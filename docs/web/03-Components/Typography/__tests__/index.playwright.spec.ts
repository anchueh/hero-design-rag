import test, { expect, Page } from '@playwright/test';
import {
  getPlaygroundScreenshot,
  goTo,
} from '@site/docs/web/playwrightTestHelper';

let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();

  await goTo(page, '/web/Components/typography', {
    viewport: { width: 1920, height: 1080 },
  });
});

test.afterAll(async () => {
  await page.close();
});

test('matches typography title', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'typographytitle',
    })
  ).toMatchSnapshot();
});

test('matches typography text variants', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'display-text-in-different-sizes-weights-and-colors',
    })
  ).toMatchSnapshot();
});

test('matches custom html tag typography text', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'display-text-as-your-desired-html-tag',
    })
  ).toMatchSnapshot();
});
