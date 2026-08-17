import { chromium } from "playwright";

const url = process.argv[2] || "http://localhost:5173/";
const outDir = process.argv[3] || ".";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(url, { waitUntil: "networkidle" });

// scroll to work section folders
await page.evaluate(() => {
  const el = document.querySelector(".work");
  el.scrollIntoView({ block: "center" });
});
await page.waitForTimeout(300);

const folder = await page.$(".folder-hotspot");
const box = await folder.boundingBox();
await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2, { steps: 10 });
await page.waitForTimeout(400);
await page.screenshot({ path: `${outDir}/hover_folder.png` });

await page.mouse.down();
await page.waitForTimeout(50);
await page.mouse.up();
await page.waitForTimeout(150);
await page.screenshot({ path: `${outDir}/click_folder.png` });

// scroll to about QR
await page.evaluate(() => {
  const el = document.querySelector(".about");
  el.scrollIntoView({ block: "start" });
});
await page.waitForTimeout(300);
const qr = await page.$(".about__qr-hotspot");
const qbox = await qr.boundingBox();
await page.mouse.move(qbox.x + qbox.width / 2, qbox.y + qbox.height / 2, { steps: 10 });
await page.waitForTimeout(400);
await page.screenshot({ path: `${outDir}/hover_qr.png` });

await browser.close();
console.log("done");
