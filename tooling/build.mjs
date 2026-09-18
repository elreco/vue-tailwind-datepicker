import { build } from "esbuild";
import { cp, mkdir, readFile, rm, chmod } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const entries = {
  engine: ["index", "import"],
  specs: ["index", "composition"],
  shared: ["index", "registry-client"],
  react: ["index", "showcase", "composition"],
  blocks: ["index", "showcase"],
  cli: ["index"],
  mcp: ["index"],
};

await rm(resolve(root, ".build/types"), { recursive: true, force: true });
execFileSync(
  process.execPath,
  [
    resolve(root, "node_modules/typescript/bin/tsc"),
    "-p",
    "tsconfig.build.json",
  ],
  { cwd: root, stdio: "inherit" },
);

for (const [name, names] of Object.entries(entries)) {
  const directory = resolve(root, "packages", name);
  const manifest = JSON.parse(
    await readFile(resolve(directory, "package.json"), "utf8"),
  );
  const executable = name === "cli" || name === "mcp";
  const entryPoints = Object.fromEntries(
    names.map((entry) => {
      const file =
        manifest.exports[entry === "index" ? "." : `./${entry}`].source;
      return [entry, resolve(directory, file)];
    }),
  );
  await rm(resolve(directory, "dist"), { recursive: true, force: true });
  await mkdir(resolve(directory, "dist"), { recursive: true });
  await build({
    entryPoints,
    outdir: resolve(directory, "dist"),
    bundle: true,
    platform: executable ? "node" : "neutral",
    format: "esm",
    target: executable ? "node24" : "es2022",
    packages: "external",
    tsconfigRaw: { compilerOptions: { jsx: "react-jsx" } },
    legalComments: "eof",
    outExtension: executable ? { ".js": ".mjs" } : undefined,
    banner:
      name === "react" || name === "blocks"
        ? { js: '"use client";' }
        : undefined,
    logLevel: "warning",
  });
  await cp(
    resolve(root, ".build/types/packages", name, "src"),
    resolve(directory, "dist"),
    {
      recursive: true,
    },
  );
  if (name === "react" || name === "blocks") {
    await cp(
      resolve(directory, "src/styles.css"),
      resolve(directory, "dist/styles.css"),
    );
  }
  if (executable) await chmod(resolve(directory, "dist/index.mjs"), 0o755);
  console.log(`Built ${manifest.name}`);
}
