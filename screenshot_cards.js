const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // モバイルサイズで表示
  await page.setViewportSize({ width: 390, height: 844 });

  // Googleフォントなど外部リソースをブロック
  await page.route('**/*', (route) => {
    const url = route.request().url();
    if (url.includes('fonts.googleapis.com') || url.includes('fonts.gstatic.com')) {
      route.abort();
    } else {
      route.continue();
    }
  });

  const filePath = 'file://' + path.resolve(__dirname, 'index.html');
  await page.goto(filePath, { waitUntil: 'domcontentloaded', timeout: 15000 });
  await page.waitForTimeout(1000);

  // アイコン〜説明文の範囲だけを切り取るヘルパー
  async function screenshotCardHeader(cardSelector, descSelector, outPath) {
    const card = page.locator(cardSelector);
    const cardBox = await card.boundingBox();
    const desc = page.locator(descSelector);
    const descBox = await desc.boundingBox();
    const padding = 32;
    const clip = {
      x: cardBox.x,
      y: cardBox.y,
      width: cardBox.width,
      height: (descBox.y + descBox.height) - cardBox.y + padding,
    };
    await page.screenshot({ path: outPath, clip, fullPage: true });
  }

  await screenshotCardHeader(
    '.service-card.dayservice',
    '.service-card.dayservice .service-card-description',
    'card_dayservice.png'
  );
  console.log('デイサービスカード: card_dayservice.png');

  await screenshotCardHeader(
    '.service-card.resthome',
    '.service-card.resthome .service-card-description',
    'card_resthome.png'
  );
  console.log('老人ホームカード: card_resthome.png');

  await browser.close();
})();
