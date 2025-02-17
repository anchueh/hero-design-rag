import test, { expect, Page } from '@playwright/test';
import {
  getPlaygroundScreenshot,
  goTo,
} from '@site/docs/web/playwrightTestHelper';

let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();

  await goTo(page, '/web/Components/badge');
});

test.afterAll(async () => {
  await page.close();
});

test('matches badge text badge', async () => {
  expect(await getPlaygroundScreenshot(page, { id: 'text' })).toMatchSnapshot();
});

test('matches number badge', async () => {
  expect(
    await getPlaygroundScreenshot(page, { id: 'number' })
  ).toMatchSnapshot();
});

test('matches icon count badge', async () => {
  expect(await getPlaygroundScreenshot(page, { id: 'icon' })).toMatchSnapshot();
});

test('matches icon number badge', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'number-1',
    })
  ).toMatchSnapshot();
});

test('matches status badge', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'status',
    })
  ).toMatchSnapshot();
});
