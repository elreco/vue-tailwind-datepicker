import {
  mkdtemp,
  readFile,
  writeFile,
  mkdir,
  symlink,
  rm,
} from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { it, expect } from "vitest";
import { installFiles } from "./files";

it("updates pristine files, preserves local edits and deletions, and keeps the prior lock on conflicts", async () => {
  const root = await mkdtemp(join(tmpdir(), "coderocket-install-"));
  try {
    const initial = await installFiles(
      root,
      { "components/ui/button.tsx": "v1", "styles/theme.css": "theme1" },
      1,
    );
    if (!initial.applied) throw new Error("Expected install");
    const update = await installFiles(
      root,
      { "components/ui/button.tsx": "v2", "styles/theme.css": "theme2" },
      2,
      initial.lock,
    );
    if (!update.applied) throw new Error("Expected update");
    await writeFile(join(root, "components/ui/button.tsx"), "my edit");
    const conflict = await installFiles(
      root,
      { "components/ui/button.tsx": "v3", "styles/theme.css": "theme3" },
      3,
      update.lock,
    );
    expect(conflict.applied).toBe(false);
    expect(await readFile(join(root, "components/ui/button.tsx"), "utf8")).toBe(
      "my edit",
    );
    expect(await readFile(join(root, "styles/theme.css"), "utf8")).toBe(
      "theme2",
    );
    expect(
      JSON.parse(await readFile(join(root, ".coderocket/lock.json"), "utf8"))
        .revision,
    ).toBe(2);
    await rm(join(root, "components/ui/button.tsx"));
    expect(
      (
        await installFiles(
          root,
          { "components/ui/button.tsx": "v3" },
          3,
          update.lock,
        )
      ).applied,
    ).toBe(false);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});
it("protects existing files on first install and rejects traversal and symlinks", async () => {
  const root = await mkdtemp(join(tmpdir(), "coderocket-paths-")),
    outside = await mkdtemp(join(tmpdir(), "coderocket-outside-"));
  try {
    await writeFile(join(root, "AGENTS.md"), "my existing instructions");
    expect(
      (await installFiles(root, { "AGENTS.md": "incoming" }, 1)).applied,
    ).toBe(false);
    await expect(
      installFiles(root, { "../escape.tsx": "bad" }, 1),
    ).rejects.toThrow("unsupported");
    await mkdir(join(root, "components"));
    await symlink(outside, join(root, "components/ui"));
    await expect(
      installFiles(root, { "components/ui/button.tsx": "bad" }, 1),
    ).rejects.toThrow("symbolic");
    expect(await readFile(join(root, "AGENTS.md"), "utf8")).toBe(
      "my existing instructions",
    );
  } finally {
    await rm(root, { recursive: true, force: true });
    await rm(outside, { recursive: true, force: true });
  }
});
