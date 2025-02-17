import test, { expect, Page } from '@playwright/test';
import {
  getPlaygroundScreenshot,
  goTo,
} from '@site/docs/web/playwrightTestHelper';

let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();

  await goTo(page, '/web/Components/slider');
});

test.afterAll(async () => {
  await page.close();
});

test('matches basic usage', async () => {
  expect(
    await getPlaygroundScreenshot(page, { id: 'basic' })
  ).toMatchSnapshot();
});

test('matches always showing tooltip', async () => {
  expect(
    await getPlaygroundScreenshot(page, { id: 'always-show-tooltip' })
  ).toMatchSnapshot();
});

test('matches custom tooltip', async () => {
  expect(
    await getPlaygroundScreenshot(page, { id: 'custom-tooltip' })
  ).toMatchSnapshot();
});

test('matches disabled', async () => {
  expect(
    await getPlaygroundScreenshot(page, { id: 'disabled-state' })
  ).toMatchSnapshot();
});
