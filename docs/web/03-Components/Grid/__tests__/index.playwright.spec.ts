import test, { expect, Page } from '@playwright/test';
import {
  getPlaygroundScreenshot,
  goTo,
} from '@site/docs/web/playwrightTestHelper';

let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();

  await goTo(page, '/web/Components/grid');
});

test.afterAll(async () => {
  await page.close();
});

test('matches basic usage', async () => {
  expect(
    await getPlaygroundScreenshot(page, { id: 'basic' })
  ).toMatchSnapshot();
});

test('matches span usage', async () => {
  expect(await getPlaygroundScreenshot(page, { id: 'span' })).toMatchSnapshot();
});

test('matches offset usage', async () => {
  expect(
    await getPlaygroundScreenshot(page, { id: 'offset' })
  ).toMatchSnapshot();
});

test('matches gutter usage', async () => {
  expect(
    await getPlaygroundScreenshot(page, { id: 'gutter' })
  ).toMatchSnapshot();
});

test('matches responsiveness usage', async () => {
  expect(
    await getPlaygroundScreenshot(page, { id: 'responsiveness' })
  ).toMatchSnapshot();
});
