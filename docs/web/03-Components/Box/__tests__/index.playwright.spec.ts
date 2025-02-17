import test, { expect, Page } from '@playwright/test';
import {
  getPlaygroundScreenshot,
  goTo,
} from '@site/docs/web/playwrightTestHelper';

let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();

  await goTo(page, '/web/Components/box');
});

test.afterAll(async () => {
  await page.close();
});

test('matches basic box', async () => {
  expect(
    await getPlaygroundScreenshot(page, { id: 'basic' })
  ).toMatchSnapshot();
});

test('matches box with colors', async () => {
  expect(
    await getPlaygroundScreenshot(page, { id: 'with-colors' })
  ).toMatchSnapshot();
});

test('matches box with borders', async () => {
  expect(
    await getPlaygroundScreenshot(page, { id: 'with-borders' })
  ).toMatchSnapshot();
});

test('matches box with typography', async () => {
  expect(
    await getPlaygroundScreenshot(page, { id: 'with-typography' })
  ).toMatchSnapshot();
});

test('matches box with other tag', async () => {
  expect(
    await getPlaygroundScreenshot(page, { id: 'render-box-as-html-tag' })
  ).toMatchSnapshot();
});
