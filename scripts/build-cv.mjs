// Renders cv/cv.html to an ATS-friendly PDF in public/.
// Usage: npm run build:cv   (requires Google Chrome)
import puppeteer from "puppeteer-core";
import { PDFDocument } from "pdf-lib";
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const OUT = `${root}/public/Nazar-Stefiniv-CV.pdf`;
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const META = {
  title: "Nazar Stefiniv — Web Developer CV",
  author: "Nazar Stefiniv",
  subject: "Curriculum vitae — Web Developer (React, TypeScript, Node.js)",
  keywords: [
    "Nazar Stefiniv",
    "Web Developer",
    "Frontend Developer",
    "Full-Stack Developer",
    "React",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express",
    "Supabase",
    "PostgreSQL",
    "Tailwind CSS",
    "REST API",
  ],
};

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ["--no-sandbox"],
});
let raw;
try {
  const page = await browser.newPage();
  await page.goto(`file://${root}/cv/cv.html`, { waitUntil: "networkidle0" });
  await page.evaluate(() => document.fonts.ready);
  raw = await page.pdf({
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
    tagged: true, // structure tree: headings, lists, reading order
    outline: true, // bookmarks generated from the headings
  });
} finally {
  await browser.close();
}

// Guard: Type3 fonts have no reliable text layer for older resume parsers.
const type3 = Buffer.from(raw).toString("latin1").match(/\/Subtype\s*\/Type3/g);
if (type3) {
  throw new Error(`CV embeds ${type3.length} Type3 font(s); use static fonts.`);
}

const pdf = await PDFDocument.load(raw);
if (pdf.getPageCount() !== 1) {
  throw new Error(`CV must fit on one page, got ${pdf.getPageCount()}.`);
}
pdf.setTitle(META.title, { showInWindowTitleBar: true });
pdf.setAuthor(META.author);
pdf.setSubject(META.subject);
pdf.setKeywords(META.keywords);
pdf.setLanguage("en");
pdf.setCreator("cv/cv.html");
pdf.setProducer("Chrome + pdf-lib");

// Plain cross-reference table (no object streams) for the widest parser support.
await writeFile(OUT, await pdf.save({ useObjectStreams: false }));
console.log("saved public/Nazar-Stefiniv-CV.pdf");
