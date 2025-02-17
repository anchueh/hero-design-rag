import test, { expect, Page } from '@playwright/test';
import {
  getPlaygroundScreenshot,
  goTo,
} from '@site/docs/web/playwrightTestHelper';

let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();

  await goTo(page, '/web/Components/steps');
});

test.afterAll(async () => {
  await page.close();
});

test('matches basic steps', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'basic',
    })
  ).toMatchSnapshot();
});

test('matches compact steps', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'compact-style',
    })
  ).toMatchSnapshot();
});
