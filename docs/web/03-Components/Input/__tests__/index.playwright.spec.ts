import test, { expect, Page } from '@playwright/test';
import {
  getPlaygroundScreenshot,
  goTo,
} from '@site/docs/web/playwrightTestHelper';

let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();

  await goTo(page, '/web/Components/Input');
});

test.afterAll(async () => {
  await page.close();
});

test('matches basic inputs', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'basic',
    })
  ).toMatchSnapshot();
});

test('matches input with different sizes', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'sizes',
    })
  ).toMatchSnapshot();
});

test('matches input with affixes', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'affixes',
    })
  ).toMatchSnapshot();
});

test('matches input with customised affixes', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'customised-affixes',
    })
  ).toMatchSnapshot();
});

test('matches textarea', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'textarea',
    })
  ).toMatchSnapshot();
});
