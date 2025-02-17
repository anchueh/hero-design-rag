import test, { expect, Page } from '@playwright/test';
import {
  getPlaygroundScreenshot,
  goTo,
} from '@site/docs/web/playwrightTestHelper';

let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();

  await goTo(page, '/web/Components/result');
});

test.afterAll(async () => {
  await page.close();
});

test('matches basic result', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'basic',
    })
  ).toMatchSnapshot();
});

test('matches exception result', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'exception',
    })
  ).toMatchSnapshot();
});

test('matches unauthorised result', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'unauthorised',
    })
  ).toMatchSnapshot();
});

test('matches server error result', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'server-error',
    })
  ).toMatchSnapshot();
});

test('matches server unavailable result', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'server-unavailable',
    })
  ).toMatchSnapshot();
});
