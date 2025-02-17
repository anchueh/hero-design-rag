import test, { expect, Page } from '@playwright/test';
import {
  getPlaygroundScreenshot,
  goTo,
} from '@site/docs/web/playwrightTestHelper';

let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();

  await goTo(page, '/web/Components/selectButton');
});

test.afterAll(async () => {
  await page.close();
});

test('matches basic select button', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'basic',
    })
  ).toMatchSnapshot();
});

test('matches disabled select button', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'disabled-state',
    })
  ).toMatchSnapshot();
});

test('matches select button sizes', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'sizes',
    })
  ).toMatchSnapshot();
});

test('matches select button group', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'selectbuttongroup',
    })
  ).toMatchSnapshot();
});
