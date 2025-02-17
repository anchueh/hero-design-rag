import test, { expect, Page } from '@playwright/test';
import {
  clickElementWithTestId,
  getPlaygroundScreenshot,
  goTo,
} from '@site/docs/web/playwrightTestHelper';

let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();

  await goTo(page, '/web/Components/filters', {
    viewport: { width: 1920, height: 1080 },
  });
});

test.afterAll(async () => {
  await page.close();
});

test('matches default settings using with table', async () => {
  await clickElementWithTestId(page, 'default-setting-more-btn');
  // reset mouse position to avoid hover on select.
  await page.mouse.move(0, 0);

  expect(
    await getPlaygroundScreenshot(page, {
      id: 'default-settings-using-with-table',
      delay: 1000,
    })
  ).toMatchSnapshot();
});

test('matches custom apply changes', async () => {
  await clickElementWithTestId(page, 'custom-apply-change-more-btn');
  await page.mouse.move(0, 0);
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'customized-filter-apply-changes',
      delay: 1000,
    })
  ).toMatchSnapshot();
});

test('matches custom apply all changes', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'customized-filter-apply-all-changes',
      delay: 1000,
    })
  ).toMatchSnapshot();
});

test('matches draft filter value', async () => {
  await clickElementWithTestId(page, 'draft-filter-value-more-btn');
  // reset mouse position to avoid hover on select.
  await page.mouse.move(0, 0);

  expect(
    await getPlaygroundScreenshot(page, {
      id: 'controlled-draft-filter-value',
      delay: 1000,
    })
  ).toMatchSnapshot();
});

test('matches group filter wide layout', async () => {
  await clickElementWithTestId(page, 'wide-layout-more-btn');
  // reset mouse position to avoid hover on select.
  await page.mouse.move(0, 0);
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'filtergroup-with-wide-layout',
      delay: 1000,
    })
  ).toMatchSnapshot();
});
