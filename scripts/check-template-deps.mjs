#!/usr/bin/env node
import {readdirSync, readFileSync, statSync} from "node:fs";
import {join, resolve} from "node:path";

const REQUIRED = ["tailwindcss", "@tailwindcss/cli"];
const TEMPLATES_DIR = resolve(process.argv[2] ?? "templates");

const failures = [];
const checked = [];

for (const name of readdirSync(TEMPLATES_DIR).sort()) {
  const dir = join(TEMPLATES_DIR, name);
  if (!statSync(dir).isDirectory()) continue;

  const pkgPath = join(dir, "package.json");
  let pkg;
  try {
    pkg = JSON.parse(readFileSync(pkgPath, "utf8"));
  } catch (err) {
    if (err.code === "ENOENT") continue;
    failures.push(`${name}: package.json unreadable — ${err.message}`);
    continue;
  }

  const deps = {...pkg.dependencies, ...pkg.devDependencies};
  const missing = REQUIRED.filter((dep) => !(dep in deps));
  if (missing.length) {
    failures.push(`${name}: missing ${missing.join(", ")}`);
  } else {
    checked.push(name);
  }
}

if (failures.length) {
  console.error("✗ Template dependency audit failed:\n");
  for (const f of failures) console.error(`  ${f}`);
  console.error(`\nHugo >= 0.161.0 requires the npm @tailwindcss/cli package — the standalone tailwindcss binary is no longer accepted.`);
  process.exit(1);
}

console.log(`✓ All ${checked.length} templates declare required Tailwind dependencies:`);
for (const name of checked) console.log(`  ${name}`);
