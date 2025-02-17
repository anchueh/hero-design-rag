import test, { expect, Page } from '@playwright/test';
import {
  getPlaygroundScreenshot,
  goTo,
  typeInput,
} from '@site/docs/web/playwrightTestHelper';

let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();

  await goTo(page, '/web/Components/timePicker');
});

test.afterAll(async () => {
  await page.close();
});

test('matches basic time picker', async () => {
  await typeInput(page, 'time-picker__basic', '11:22');
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'basic',
      expandedHeight: '360px',
    })
  ).toMatchSnapshot();
});

test('matches time picker with seconds', async () => {
  await typeInput(page, 'time-picker__with-seconds', '15:30:57');
  const inputBox = await page
    .locator('#time-picker__with-seconds')
    .boundingBox();

  await page.mouse.wheel(inputBox.x, inputBox.y);

  expect(
    await getPlaygroundScreenshot(page, {
      id: 'with-seconds',
      expandedHeight: '360px',
      delay: 1000,
    })
  ).toMatchSnapshot();
});
