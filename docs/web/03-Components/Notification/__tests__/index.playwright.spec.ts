import test, { expect, Page } from '@playwright/test';
import {
  getPlaygroundScreenshot,
  goTo,
  pauseAnimation,
} from '@site/docs/web/playwrightTestHelper';

let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();

  await goTo(page, '/web/Components/notification');
});

test.afterAll(async () => {
  await page.close();
});

test('matches basic notification', async () => {
  expect(
    await getPlaygroundScreenshot(page, { id: 'basic' })
  ).toMatchSnapshot();
});

test('matches different notification intents', async () => {
  expect(
    await getPlaygroundScreenshot(page, { id: 'with-different-intents' })
  ).toMatchSnapshot();
});

test('matches notification without icon', async () => {
  expect(
    await getPlaygroundScreenshot(page, { id: 'without-notification-icon' })
  ).toMatchSnapshot();
});

test('matches notification with customised icon', async () => {
  await pauseAnimation(page, {
    id: 'customising-notification-icon',
    selector: '.hero-icon-loading-2',
  });
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'customising-notification-icon',
    })
  ).toMatchSnapshot();
});

test('matches notification with close button', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'with-close-button-on-the-right-side',
    })
  ).toMatchSnapshot();
});

test('matches notification with customised content', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'customising-notification-content',
    })
  ).toMatchSnapshot();
});
