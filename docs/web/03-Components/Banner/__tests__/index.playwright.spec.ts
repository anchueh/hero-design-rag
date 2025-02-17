import test, { expect, Page } from '@playwright/test';
import {
  getPlaygroundScreenshot,
  goTo,
} from '@site/docs/web/playwrightTestHelper';

let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();

  await goTo(page, '/web/Components/banner', {
    viewport: { width: 1920, height: 1080 },
  });
});

test.afterAll(async () => {
  await page.close();
});

test('matches basic banner', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'basic',
    })
  ).toMatchSnapshot();
});

test('matches compact banner', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'compact-style',
    })
  ).toMatchSnapshot();
});

test('matches banners with different intents and icons', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'intents-and-icons',
    })
  ).toMatchSnapshot();
});

test('matches banners with custom icons', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'custom-icons',
    })
  ).toMatchSnapshot();
});

test('matches banners with close button', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'close-button',
    })
  ).toMatchSnapshot();
});

test('matches banners with custom content', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'custom-content',
    })
  ).toMatchSnapshot();
});
