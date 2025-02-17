import test, { expect, Page } from '@playwright/test';
import {
  getPlaygroundScreenshot,
  goTo,
  hoverElementAndGetScreenShot,
} from '@site/docs/web/playwrightTestHelper';

let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();

  await goTo(page, '/web/Components/Chart/Line');
});

test.afterAll(async () => {
  await page.close();
});
test('matches line chart basic', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'outlined-variant',
    })
  ).toMatchSnapshot();
});

test('matches line chart with hover', async () => {
  expect(
    await hoverElementAndGetScreenShot(page, {
      testId: 'line-chart-content-series-lines-Kien Tran-stroke-line-0',
      id: 'outlined-variant',
      delay: 2000,
      hoverTimeout: 1000,
    })
  ).toMatchSnapshot();
});

test('matches line chart with fill-color variant', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'filled-variant',
    })
  ).toMatchSnapshot();
});

test('matches line chart tick config', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'with-tick-config',
    })
  ).toMatchSnapshot();
});

test('matches line chart with legend', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'with-legend',
    })
  ).toMatchSnapshot();
});

test('matches line chart with navigation', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'with-navigation',
    })
  ).toMatchSnapshot();
});

test('matches line chart with custom color', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'with-line-custom-color',
    })
  ).toMatchSnapshot();
});
