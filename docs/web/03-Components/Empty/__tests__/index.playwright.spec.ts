import test, { expect, Page } from '@playwright/test';
import {
  getPlaygroundScreenshot,
  goTo,
} from '@site/docs/web/playwrightTestHelper';

let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();

  await goTo(page, '/web/Components/empty');
});

test.afterAll(async () => {
  await page.close();
});
test('matches basic empty', async () => {
  expect(
    await getPlaygroundScreenshot(page, { id: 'basic' })
  ).toMatchSnapshot();
});

test('matches with extra action', async () => {
  expect(
    await getPlaygroundScreenshot(page, { id: 'with-extra-action' })
  ).toMatchSnapshot();
});

test('matches empty with title', async () => {
  expect(
    await getPlaygroundScreenshot(page, { id: 'with-title' })
  ).toMatchSnapshot();
});

test('matches small empty', async () => {
  expect(
    await getPlaygroundScreenshot(page, { id: 'small-size' })
  ).toMatchSnapshot();
});

test('matches medium empty', async () => {
  expect(
    await getPlaygroundScreenshot(page, { id: 'medium-size' })
  ).toMatchSnapshot();
});

test('matches customised empty image', async () => {
  expect(
    await getPlaygroundScreenshot(page, { id: 'customise-empty-image' })
  ).toMatchSnapshot();
});

test('matches customised text display', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'customise-text-display',
      delay: 500,
    })
  ).toMatchSnapshot();
});
