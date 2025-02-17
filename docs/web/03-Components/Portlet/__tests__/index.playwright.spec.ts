import test, { expect, Page } from '@playwright/test';
import {
  getPlaygroundScreenshot,
  goTo,
} from '@site/docs/web/playwrightTestHelper';

let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();

  await goTo(page, '/web/Components/Portlet', {
    viewport: { width: 1920, height: 1080 },
  });
});

test.afterAll(async () => {
  await page.close();
});

test('matches basic portlet', async () => {
  await page.waitForTimeout(5000);
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'basic',
    })
  ).toMatchSnapshot();
});

test('matches portlet custom actions', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'custom-actions',
    })
  ).toMatchSnapshot();
});
