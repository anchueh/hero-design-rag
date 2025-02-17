import test, { expect, Page } from '@playwright/test';
import {
  getPlaygroundScreenshot,
  goTo,
} from '@site/docs/web/playwrightTestHelper';

let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();

  await goTo(page, '/web/Components/Table/Basic');
});

test.afterAll(async () => {
  await page.close();
});

test('matches basic table', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'render-the-most-basic-table',
    })
  ).toMatchSnapshot();
});

test('matches grouped rows table', async () => {
  await page.waitForTimeout(500);
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'rows-grouped-by-condition',
    })
  ).toMatchSnapshot();
});

test('matches table with pagination', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'pagination',
    })
  ).toMatchSnapshot();
});

test('matches table with multilevel header', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'multilevel-header',
    })
  ).toMatchSnapshot();
});

test('matches table with row expansion', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'row-expansion',
    })
  ).toMatchSnapshot();
});

test('matches table with colunm sorting', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'column-sorting',
    })
  ).toMatchSnapshot();
});

test('matches table with row selection', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'row-selection',
    })
  ).toMatchSnapshot();
});

test('matches table with customised column layout', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'column-layout',
    })
  ).toMatchSnapshot();
});

test('matches table with empty state', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'empty-state',
    })
  ).toMatchSnapshot();
});

test('matches responsive table by freezing first column(s)', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'responsive-by-freezing-first-columns-in-small-screens',
    })
  ).toMatchSnapshot();
});

test('matches responsive table by freezing multiple columns', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'responsive-by-freezing-multiple-columns-in-small-screens',
    })
  ).toMatchSnapshot();
});

test('matches Filters, Row Action, ActionButtons and Bulk Actions', async () => {
  await page.waitForTimeout(2000);
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'filters-row-action-actionbuttons-and-bulk-actions',
    })
  ).toMatchSnapshot();
});

test('matches Filters, Row Action, ActionButtons and Bulk Actions at larger viewport', async () => {
  await page.setViewportSize({
    width: 1920,
    height: 1080,
  });

  expect(
    await getPlaygroundScreenshot(page, {
      id: 'filters-row-action-actionbuttons-and-bulk-actions',
      delay: 1000,
    })
  ).toMatchSnapshot();
});
