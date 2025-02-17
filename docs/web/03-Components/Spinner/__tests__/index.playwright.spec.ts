import test, { expect, Page } from '@playwright/test';
import {
  getPlaygroundScreenshot,
  goTo,
  pauseAnimation,
} from '@site/docs/web/playwrightTestHelper';

let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();

  await goTo(page, '/web/components/spinner');
  await pauseAnimation(page, {
    selector: '.for-visual-test div',
  });
});

test.afterAll(async () => {
  await page.close();
});

test('matches basic spinner', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'basic',
    })
  ).toMatchSnapshot();
});

test('matches spinner with content', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'spinner-with-content',
    })
  ).toMatchSnapshot();
});

test('matches spinner with different sizes', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'sizes',
    })
  ).toMatchSnapshot();
});
