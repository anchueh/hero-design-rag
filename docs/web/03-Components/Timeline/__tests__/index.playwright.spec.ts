import test, { expect, Page } from '@playwright/test';
import {
  getPlaygroundScreenshot,
  goTo,
} from '@site/docs/web/playwrightTestHelper';

let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();

  await goTo(page, '/web/Components/timeline', {
    viewport: { width: 1920, height: 1080 },
  });
});

test.afterAll(async () => {
  await page.close();
});

test('matches basic timeline', async () => {
  expect(
    await getPlaygroundScreenshot(page, { id: 'basic' })
  ).toMatchSnapshot();
});

test('matches different timeline intents', async () => {
  expect(
    await getPlaygroundScreenshot(page, { id: 'with-intents' })
  ).toMatchSnapshot();
});

test('matches customised timeline rendering', async () => {
  expect(
    await getPlaygroundScreenshot(page, { id: 'customise-rendering' })
  ).toMatchSnapshot();
});
