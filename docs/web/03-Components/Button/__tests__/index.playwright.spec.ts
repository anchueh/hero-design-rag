import test, { expect, Page } from '@playwright/test';
import {
  getPlaygroundScreenshot,
  goTo,
  pauseAnimation,
} from '@site/docs/web/playwrightTestHelper';

let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();

  await goTo(page, '/web/Components/button');
});

test.afterAll(async () => {
  await page.close();
});
test('matches button variants', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'variants',
    })
  ).toMatchSnapshot();
});

test('matches button with icons', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'with-icons',
    })
  ).toMatchSnapshot();
});

test('matches loading button', async () => {
  // Prevent flaky snapshot because of animation
  await pauseAnimation(page, {
    id: 'with-loading',
    selector: '.hero-icon-loading',
  });
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'with-loading',
    })
  ).toMatchSnapshot();
});

test('matches disabled buttons', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'disabled',
    })
  ).toMatchSnapshot();
});

test('matches buttons with sizes', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'sizes',
    })
  ).toMatchSnapshot();
});

test('matches button link', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'buttonlink',
    })
  ).toMatchSnapshot();
});

test('matches button icon', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'buttonicon',
    })
  ).toMatchSnapshot();
});
