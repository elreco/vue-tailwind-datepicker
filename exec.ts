/* eslint-disable no-console */
import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "fs-extra";

(async () => {
  const dayjsLocale = "./node_modules/dayjs/esm/locale";
  const localeSrc = "./src/locale";

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  await fs.remove(localeSrc);
  const locales = await fs.readdir(dayjsLocale);
  for (const locale of locales) {
    fs.copySync(
      `${dayjsLocale}/${locale}`,
      path.join(__dirname, `./src/locale/${locale}`),
    );
    fs.readFile(`${localeSrc}/${locale}`, "utf8", (err, data) => {
      if (err) return console.log(err);
      const result = data.replace(/..\/index/g, "dayjs");

      fs.writeFile(`${localeSrc}/${locale}`, result, "utf8", (err) => {
        if (err) return console.log(err);
      });
    });
  }
})();
