import test, { expect, Page } from '@playwright/test';
import {
  clickButton,
  getPlaygroundScreenshot,
  goTo,
} from '@site/docs/web/playwrightTestHelper';

let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();

  await goTo(page, '/web/Components/dropdown');
});

test.afterAll(async () => {
  await page.close();
});

test('matches menu rendering', async () => {
  await clickButton(page, 'What to expect');
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'rendering-menu-in-a-dropdown',
      // Need more space to capture the popover.
      expandedHeight: '250px',
    })
  ).toMatchSnapshot();
});

test('matches inputs rendering', async () => {
  await clickButton(page, 'Input personal detail');
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'rendering-inputs-in-a-dropdown',
      // Need more space to capture the popover.
      expandedHeight: '250px',
    })
  ).toMatchSnapshot();
});
