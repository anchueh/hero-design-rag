import test, { expect, Page } from '@playwright/test';
import {
  getPlaygroundScreenshot,
  goTo,
  pauseAnimation,
} from '@site/docs/web/playwrightTestHelper';

let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();

  await goTo(page, '/web/Components/file');
});

test.afterAll(async () => {
  await page.close();
});

test('matches basic file drag and drop', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'basic',
    })
  ).toMatchSnapshot();
});

test('matches disabled state', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'disabled-state',
    })
  ).toMatchSnapshot();
});

test('matches upload buttons with different variants', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'variants',
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

test('matches basic upload icon button', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'basic-1',
    })
  ).toMatchSnapshot();
});

test('matches upload icon button with different sizes', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'with-different-sizes',
    })
  ).toMatchSnapshot();
});
