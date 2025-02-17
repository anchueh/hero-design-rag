import test, { expect, Page } from '@playwright/test';
import {
  clickElementWithTestId,
  getPlaygroundScreenshot,
  goTo,
} from '@site/docs/web/playwrightTestHelper';

let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();

  await goTo(page, '/web/Components/SideBar', {
    viewport: { width: 1920, height: 1080 },
    waitUntil: 'networkidle',
  });
});

test.afterAll(async () => {
  await page.close();
});

test('matches basic sidebar', async () => {
  await clickElementWithTestId(page, 'primary-item-profile');
  expect(
    await getPlaygroundScreenshot(page, { id: 'basic', delay: 2000 })
  ).toMatchSnapshot();
});

test('matches disabled navigation', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'disabled-navigation',
    })
  ).toMatchSnapshot();
});
