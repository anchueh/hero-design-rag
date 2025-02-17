import test, { expect, Page } from '@playwright/test';
import {
  getPlaygroundScreenshot,
  goTo,
} from '@site/docs/web/playwrightTestHelper';

let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();

  await goTo(page, '/web/Components/collapse');
});

test.afterAll(async () => {
  await page.close();
});

test('matches basic collapse', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'basic',
    })
  ).toMatchSnapshot();
});

test('matches basic mounted collapse', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'keep-children-mounted-when-collapsing',
      delay: 300,
    })
  ).toMatchSnapshot();
});
