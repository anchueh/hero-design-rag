import test, { expect, Page } from '@playwright/test';
import {
  getPlaygroundScreenshot,
  goTo,
} from '@site/docs/web/playwrightTestHelper';

let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();

  await goTo(page, '/web/Components/carousel');
});

test.afterAll(async () => {
  await page.close();
});
test('matches default carousel ', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'basic-usage-of-carousel',
    })
  ).toMatchSnapshot();
});

test('matches autoplay carousel', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'autoplay-carousel',
    })
  ).toMatchSnapshot();
});

test('matches carousel with different placements', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'with-dot-button-placements',
    })
  ).toMatchSnapshot();
});

test('matches carousel with multiple slides', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'show-multiple-slides',
    })
  ).toMatchSnapshot();
});

test('matches infinite carousel ', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'infinite-carousel',
    })
  ).toMatchSnapshot();
});
