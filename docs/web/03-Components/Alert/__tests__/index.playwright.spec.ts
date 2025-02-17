import { test, expect, Page } from '@playwright/test';
import {
  getPlaygroundScreenshot,
  goTo,
} from '@site/docs/web/playwrightTestHelper';

let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();

  await goTo(page, '/web/Components/alert');
});

test.afterAll(async () => {
  await page.close();
});

test('matches basic alert', async () => {
  expect(
    await getPlaygroundScreenshot(page, { id: 'basic' })
  ).toMatchSnapshot();
});

test('matches compact alert', async () => {
  expect(
    await getPlaygroundScreenshot(page, { id: 'compact-alert' })
  ).toMatchSnapshot();
});

test('matches alerts different intents', async () => {
  expect(
    await getPlaygroundScreenshot(page, { id: 'with-different-intents' })
  ).toMatchSnapshot();
});

test('matches alert with customised icon', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'customising-alert-icon',
    })
  ).toMatchSnapshot();
});

test('matches alert with close button', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'with-close-button-on-the-right-side',
    })
  ).toMatchSnapshot();
});

test('matches alert with customised content', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'customising-alert-content',
    })
  ).toMatchSnapshot();
});
