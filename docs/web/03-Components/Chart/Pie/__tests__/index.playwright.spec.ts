import test, { expect, Page } from '@playwright/test';
import {
  getPlaygroundScreenshot,
  goTo,
  hoverElementAndGetScreenShot,
} from '@site/docs/web/playwrightTestHelper';

let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();

  await goTo(page, '/web/Components/Chart/Pie');
});

test.afterAll(async () => {
  await page.close();
});

test('matches basic pie chart', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'basic',
    })
  ).toMatchSnapshot();
});

test('matches multi size of pie chart', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'sizes',
    })
  ).toMatchSnapshot();
});

test('matches with icon of pie chart', async () => {
  expect(
    await hoverElementAndGetScreenShot(page, {
      id: 'with-icon',
      testId: 'piechart-with-icon-slice-Success',
      delay: 1000,
      hoverTimeout: 1000,
    })
  ).toMatchSnapshot();
});

test('matches with title of pie chart', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'with-title',
    })
  ).toMatchSnapshot();
});

test('matches with legend of pie chart', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'with-legends',
    })
  ).toMatchSnapshot();
});

test('matches with checkbox legend of pie chart', async () => {
  // flaky
  await page.mouse.move(0, 0);
  await page.waitForTimeout(1000);
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'with-checkbox-legends',
    })
  ).toMatchSnapshot();
});

test('matches with always show total of pie chart', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'always-show-total',
    })
  ).toMatchSnapshot();
});

test('matches highlightedItems of pie chart', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'with-highlighted-items',
    })
  ).toMatchSnapshot();
});

test('matched with custom color', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'with-custom-color',
    })
  ).toMatchSnapshot();
});

test('matches custom central content of pie chart', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'with-custom-central-content',
    })
  ).toMatchSnapshot();
});

test('matches basic multiple pie chart', async () => {
  // flaky
  await page.mouse.move(0, 0);
  await page.waitForTimeout(1000);
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'basic-1',
    })
  ).toMatchSnapshot();
});

test('matches basic multiple pie chart when hovering', async () => {
  expect(
    await hoverElementAndGetScreenShot(page, {
      id: 'basic-1',
      testId: 'multiple-pie-chart-arc-Spike-slice-Mon',
      delay: 1000,
      hoverTimeout: 1000,
    })
  ).toMatchSnapshot();
});

test('matches with title of multiple pie chart', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'with-title-1',
    })
  ).toMatchSnapshot();
});

test('matches with legend of multiple pie chart', async () => {
  // flaky
  await page.mouse.move(0, 0);
  await page.waitForTimeout(1000);
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'with-legends-1',
    })
  ).toMatchSnapshot();
});

test('matches with checkbox legend of multiple pie chart', async () => {
  // flaky
  await page.mouse.move(0, 0);
  await page.waitForTimeout(1000);
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'with-checkbox-legends-1',
    })
  ).toMatchSnapshot();
});

test('matches highlightedItems of multiple pie chart', async () => {
  await page.waitForTimeout(1000);
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'with-highlighted-items-1',
    })
  ).toMatchSnapshot();
});

test('matched with custom color of multiple pie chart', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'with-custom-color-1',
    })
  ).toMatchSnapshot();
});
