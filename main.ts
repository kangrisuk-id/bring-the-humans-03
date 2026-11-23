import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

function copyVideoJson(): void {
  const source = join(botDir, "VIDEO.json");
  const destination = join(outputDir, "VIDEO.json");
  const bytes = readFileSync(source);

  mkdirSync(outputDir, { recursive: true });
  writeFileSync(destination, bytes);
}

copyVideoJson();
