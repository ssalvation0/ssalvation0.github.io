// One-off: capture project screenshots into public/projects/ using the system Chrome.
// Two variants per project:
//   <base>.jpg       portrait  (~0.83) — desktop card previews (tall, side-by-side)
//   <base>-wide.jpg  landscape (16:9)  — mobile card previews (full-width thumbnail)
// ProjectCard serves them responsively via <picture>.
// Usage: node scripts/capture-screenshots.mjs   (captures from the live deployments)
import puppeteer from "puppeteer-core";

const CHROME =
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const shots = [
  { base: "transmogvault", url: "https://transmogvault.vercel.app/", wait: 5000 },
  { base: "termino", url: "https://ssalvation0.github.io/termino-app/", wait: 3500 },
  { base: "testtask", url: "https://ssalvation0.github.io/testtask/", wait: 3000 },
];

const variants = [
  // 1280 / 1550 ≈ 0.826 — matches the desktop preview box ratio.
  { suffix: "", width: 1280, height: 1550, deviceScaleFactor: 1 },
  // 16:9 — matches the mobile aspect-video preview box.
  { suffix: "-wide", width: 1280, height: 720, deviceScaleFactor: 1 },
];

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ["--no-sandbox", "--hide-scrollbars"],
});

for (const s of shots) {
  for (const v of variants) {
    const page = await browser.newPage();
    const out = `public/projects/${s.base}${v.suffix}.jpg`;
    try {
      await page.setViewport({
        width: v.width,
        height: v.height,
        deviceScaleFactor: v.deviceScaleFactor,
      });
      await page.goto(s.url, { waitUntil: "networkidle2", timeout: 45000 });
      await new Promise((r) => setTimeout(r, s.wait));
      await page.screenshot({ path: out, type: "jpeg", quality: 82 });
      console.log("saved", out);
    } catch (e) {
      console.error("FAILED", s.url, "->", e.message);
    }
    await page.close();
  }
}

await browser.close();
console.log("done");
