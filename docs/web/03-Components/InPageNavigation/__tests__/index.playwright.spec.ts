import test, { expect, Page } from '@playwright/test';
import {
  getPlaygroundScreenshot,
  goTo,
} from '@site/docs/web/playwrightTestHelper';

let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();

  await goTo(page, '/web/Components/InPageNavigation');
});

test.afterAll(async () => {
  await page.close();
});

test('matches vertical navigation', async () => {
  expect(
    await getPlaygroundScreenshot(page, { id: 'vertical' })
  ).toMatchSnapshot();
});

test('matches horizontal navigation', async () => {
  expect(
    await getPlaygroundScreenshot(page, { id: 'horizontal' })
  ).toMatchSnapshot();
});

test('matches with icons', async () => {
  expect(
    await getPlaygroundScreenshot(page, { id: 'with-icons' })
  ).toMatchSnapshot();
});

test('matches with actions', async () => {
  await page.setViewportSize({ width: 1920, height: 800 });
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'with-actions',
    })
  ).toMatchSnapshot();
});
