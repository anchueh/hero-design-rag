import test, { expect, Page } from '@playwright/test';
import {
  getPlaygroundScreenshot,
  goTo,
} from '@site/docs/web/playwrightTestHelper';

let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();

  await goTo(page, '/web/Components/menu');
});

test.afterAll(async () => {
  await page.close();
});

test('matches basic menu', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'basic',
    })
  ).toMatchSnapshot();
});

test('matches menu with text element', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'menuitem-with-text-element',
    })
  ).toMatchSnapshot();
});

test('matches menu with icon', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'menuitem-with-icon',
    })
  ).toMatchSnapshot();
});

test('matches menu with intent', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'menuitem-with-intent',
    })
  ).toMatchSnapshot();
});
