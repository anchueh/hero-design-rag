import test, { expect, Page } from '@playwright/test';
import {
  getPlaygroundScreenshot,
  goTo,
  hoverElementAndGetScreenShot,
} from '@site/docs/web/playwrightTestHelper';

let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();

  await goTo(page, '/web/Components/Chart/Column');
});

test.afterAll(async () => {
  await page.close();
});
test('matches column chart basic with hover', async () => {
  expect(
    await hoverElementAndGetScreenShot(page, {
      testId: 'basic-column-chart-Jun 2023-07th-1',
      delay: 2000,
      id: 'basic',
      hoverTimeout: 1000,
    })
  ).toMatchSnapshot();
});

test('matches column chart with title', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'with-title',
    })
  ).toMatchSnapshot();
});

test('matches column chart with legend', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'with-legend',
    })
  ).toMatchSnapshot();
});

test('matches column chart with navigation', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'with-navigation',
    })
  ).toMatchSnapshot();
});

test('matched column chart with highlighted items', async () => {
  await page.waitForTimeout(1000);
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'with-highlighted-items',
    })
  ).toMatchSnapshot();
});

test('matched column chart with bar config', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'with-bar-config',
    })
  ).toMatchSnapshot();
});

test('matched with custom color', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'with-bar-custom-color',
    })
  ).toMatchSnapshot();
});

test('matches bar sizing', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'with-bar-sizing',
    })
  ).toMatchSnapshot();
});

test('matches column chart basic', async () => {
  await page.mouse.move(0, 0);
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'basic',
    })
  ).toMatchSnapshot();
});

test('matched column chart with customised tooltip', async () => {
  expect(
    await hoverElementAndGetScreenShot(page, {
      testId: 'column-chart-with-customised-tooltip-Jun 2023-07th-1',
      delay: 2000,
      id: 'with-customised-tooltip',
      hoverTimeout: 1000,
    })
  ).toMatchSnapshot();
});
