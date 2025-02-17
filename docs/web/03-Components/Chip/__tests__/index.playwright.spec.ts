import test, { expect, Page } from '@playwright/test';
import {
  getPlaygroundScreenshot,
  goTo,
  hoverElementAndGetScreenShot,
} from '@site/docs/web/playwrightTestHelper';

let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();

  await goTo(page, '/web/Components/chip');
});

test.afterAll(async () => {
  await page.close();
});

test('matches basic chip', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'basic',
    })
  ).toMatchSnapshot();
});

test('matches chip with icon', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'with-icon',
    })
  ).toMatchSnapshot();
});

test('matches hovered chip', async () => {
  expect(
    await hoverElementAndGetScreenShot(page, {
      id: 'basic',
      testId: 'employee-records',
      hoverTimeout: 1000,
      delay: 2000,
    })
  ).toMatchSnapshot();
});

test('matches hovered selected chip', async () => {
  expect(
    await hoverElementAndGetScreenShot(page, {
      id: 'basic',
      testId: 'performance-reviews',
      hoverTimeout: 1000,
      delay: 2000,
    })
  ).toMatchSnapshot();
});

test('matches chip with no checkmark', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'checkmark-visibility',
    })
  ).toMatchSnapshot();
});

test('matches chip with different intents', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'with-different-intents',
    })
  ).toMatchSnapshot();
});
