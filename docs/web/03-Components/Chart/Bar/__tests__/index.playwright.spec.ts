import test, { expect, Page } from '@playwright/test';
import {
  getPlaygroundScreenshot,
  goTo,
  hoverElementAndGetScreenShot,
} from '@site/docs/web/playwrightTestHelper';

let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();

  await goTo(page, '/web/Components/Chart/Bar');
});

test.afterAll(async () => {
  await page.close();
});

test('matches bar chart with hover', async () => {
  expect(
    await hoverElementAndGetScreenShot(page, {
      id: 'basic',
      testId: 'bar-chart-Sep-25th-17',
      hoverTimeout: 1000,
      delay: 2000,
    })
  ).toMatchSnapshot();
});

test('matches bar chart tick config', async () => {
  await page.mouse.move(0, 0);
  await page.waitForTimeout(1000);
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'with-tick-config',
    })
  ).toMatchSnapshot();
});

test('matches bar chart step config', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'with-step',
    })
  ).toMatchSnapshot();
});

test('matches bar chart with title', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'with-title',
    })
  ).toMatchSnapshot();
});

test('matches bar chart with legend', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'with-legend',
    })
  ).toMatchSnapshot();
});

test('matches bar chart with navigation', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'with-navigation',
    })
  ).toMatchSnapshot();
});

test('matches bar chart with bar config', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'with-bar-config',
    })
  ).toMatchSnapshot();
});

test('matched bar chart with highlighted items', async () => {
  await page.waitForTimeout(1000);
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'with-highlighted-items',
    })
  ).toMatchSnapshot();
});

test('matched bar chart with negative value', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'with-negative-values',
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

test('matches custom bar sizing', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'with-bar-sizing',
    })
  ).toMatchSnapshot();
});

test('matches bar chart basic', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'basic',
    })
  ).toMatchSnapshot();
});
