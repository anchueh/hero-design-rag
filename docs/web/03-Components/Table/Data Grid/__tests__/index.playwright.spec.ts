import test, { expect, Page } from '@playwright/test';
import {
  getPlaygroundScreenshot,
  goTo,
} from '@site/docs/web/playwrightTestHelper';

let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();

  await goTo(page, '/web/Components/Table/Data%20Grid/');
});

test.afterAll(async () => {
  await page.close();
});

test('matches basic data grid table', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'basic-data-grid',
    })
  ).toMatchSnapshot();
});

test('matches editable data grid table', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'editable-data-grid',
    })
  ).toMatchSnapshot();
});
