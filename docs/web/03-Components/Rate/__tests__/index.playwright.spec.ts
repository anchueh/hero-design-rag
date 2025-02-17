import test, { expect, Page } from '@playwright/test';
import {
  getPlaygroundScreenshot,
  goTo,
} from '@site/docs/web/playwrightTestHelper';

let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();

  await goTo(page, '/web/Components/Rate');
});

test.afterAll(async () => {
  await page.close();
});

test('matches rate with basic rate', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'basic',
    })
  ).toMatchSnapshot();
});

test('matches rate with disable mode', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'disable',
    })
  ).toMatchSnapshot();
});

test('matches rate with different sizes', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'sizes',
    })
  ).toMatchSnapshot();
});
