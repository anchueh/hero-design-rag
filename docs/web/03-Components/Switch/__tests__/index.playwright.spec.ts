import test, { expect, Page } from '@playwright/test';
import {
  getPlaygroundScreenshot,
  goTo,
} from '@site/docs/web/playwrightTestHelper';

let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();

  await goTo(page, '/web/Components/switch', {
    waitUntil: 'networkidle',
  });
});

test.afterAll(async () => {
  await page.close();
});

test('matches basic switch', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'basic',
    })
  ).toMatchSnapshot();
});

test('matches switch sizes', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'sizes',
    })
  ).toMatchSnapshot();
});

test('matches loading switch', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'with-loading-indicator',
      delay: 1000,
      disabledAnimation: true,
    })
  ).toMatchSnapshot();
});

test('matches disabled switch', async () => {
  await page.waitForTimeout(1000);
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'with-disabled-state',
    })
  ).toMatchSnapshot();
});

test('matches switch with inner icon', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'with-inner-icon-when-switch-is-on',
      delay: 1000,
    })
  ).toMatchSnapshot();
});
