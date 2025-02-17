import test, { expect, Page } from '@playwright/test';
import {
  getPlaygroundScreenshot,
  goTo,
} from '@site/docs/web/playwrightTestHelper';

let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();

  await goTo(page, '/web/Components/tabs');
});

test.afterAll(async () => {
  await page.close();
});

test('matches basic tabs', async () => {
  expect(
    await getPlaygroundScreenshot(page, { id: 'basic' })
  ).toMatchSnapshot();
});

test('matches sub tabs', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'with-secondary-tabs',
      delay: 2000,
    })
  ).toMatchSnapshot();
});

test('matches tabs with icons', async () => {
  expect(
    await getPlaygroundScreenshot(page, { id: 'tabs-with-icon', delay: 1000 })
  ).toMatchSnapshot();
});

test('matches subtabs with icons', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'subtabs-with-icon',
      delay: 2000,
    })
  ).toMatchSnapshot();
});

test('matches subtabs with different sizes', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'subtabs-with-different-sizes',
      delay: 2000,
    })
  ).toMatchSnapshot();
});

test('matches tabs with custom view more text', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'tabs-with-custom-view-more-text',
      delay: 2000,
    })
  ).toMatchSnapshot();
});
