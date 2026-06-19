// Renders cv/cv.html to a print-ready PDF in public/.
// Usage: node scripts/build-cv.mjs   (requires Google Chrome)
import puppeteer from "puppeteer-core";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ["--no-sandbox"],
});
const page = await browser.newPage();
await page.goto(`file://${root}/cv/cv.html`, { waitUntil: "networkidle0" });
await page.pdf({
  path: `${root}/public/Nazar-Stefiniv-CV.pdf`,
  format: "A4",
  printBackground: true,
  preferCSSPageSize: true,
});
await browser.close();
console.log("saved public/Nazar-Stefiniv-CV.pdf");
