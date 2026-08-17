import { chromium } from "playwright";

const url = process.argv[2] || "http://localhost:5173/";
const outDir = process.argv[3] || ".";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on("console", (msg) => {
  if (msg.type() === "error") errors.push(msg.text());
});
page.on("pageerror", (err) => errors.push(String(err)));

await page.goto(url, { waitUntil: "networkidle" });
await page.waitForTimeout(500);

await page.screenshot({ path: `${outDir}/full.png`, fullPage: true });

const height = await page.evaluate(() => document.body.scrollHeight);
console.log("page height", height);

await page.setViewportSize({ width: 1440, height: 900 });
await page.screenshot({ path: `${outDir}/viewport_top.png` });

await page.evaluate((h) => window.scrollTo(0, h * 0.35), height);
await page.waitForTimeout(300);
await page.screenshot({ path: `${outDir}/viewport_mid.png` });

await page.evaluate((h) => window.scrollTo(0, h * 0.7), height);
await page.waitForTimeout(300);
await page.screenshot({ path: `${outDir}/viewport_low.png` });

await page.evaluate((h) => window.scrollTo(0, h), height);
await page.waitForTimeout(300);
await page.screenshot({ path: `${outDir}/viewport_bottom.png` });

console.log("console/page errors:", JSON.stringify(errors, null, 2));

await browser.close();
