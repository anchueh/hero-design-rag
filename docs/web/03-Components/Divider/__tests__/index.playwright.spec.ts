import test, { expect, Page } from '@playwright/test';
import {
  getPlaygroundScreenshot,
  goTo,
} from '@site/docs/web/playwrightTestHelper';

let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();

  await goTo(page, '/web/Components/divider');
});

test.afterAll(async () => {
  await page.close();
});

test('matches basic usage', async () => {
  expect(
    await getPlaygroundScreenshot(page, { id: 'basic' })
  ).toMatchSnapshot();
});

test('matches horizontal divider', async () => {
  expect(
    await getPlaygroundScreenshot(page, { id: 'horizontal-dividers' })
  ).toMatchSnapshot();
});

test('matches vertical divider', async () => {
  expect(
    await getPlaygroundScreenshot(page, { id: 'vertical-dividers' })
  ).toMatchSnapshot();
});
