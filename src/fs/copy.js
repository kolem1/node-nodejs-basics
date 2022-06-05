import { access, mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = dirname(fileURLToPath(import.meta.url));

export const copy = async () => {
  const filesFolderPath = join("files");
  const filesCopyFolderPath = join(__dirname, "files_copy");
  const errorMessage = "FS operation failed";
  try {
    await access(filesFolderPath);
    const files = await readdir(filesFolderPath);
    await mkdir(filesCopyFolderPath, { recursive: false });
    files.forEach(async (file) => {
      const filePath = join(filesFolderPath, file);
      const distPath = join(filesCopyFolderPath, file);
      const srcFile = await readFile(filePath);
      writeFile(distPath, srcFile);
    });
  } catch (err) {
    throw new Error(errorMessage);
  }
};

copy();
