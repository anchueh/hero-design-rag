import test, { expect, Page } from '@playwright/test';
import {
  getPlaygroundScreenshot,
  goTo,
} from '@site/docs/web/playwrightTestHelper';

let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();

  await goTo(page, '/web/Components/breadcrumb');
});

test.afterAll(async () => {
  await page.close();
});

test('matches basic breadcrumb', async () => {
  expect(
    await getPlaygroundScreenshot(page, { id: 'basic' })
  ).toMatchSnapshot();
});

test('matches single usage', async () => {
  expect(
    await getPlaygroundScreenshot(page, { id: 'single-usage' })
  ).toMatchSnapshot();
});
