import test, { expect, Page } from '@playwright/test';
import {
  getPlaygroundScreenshot,
  goTo,
} from '@site/docs/web/playwrightTestHelper';

let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();

  await goTo(page, '/web/Components/progress', {
    viewport: { width: 1920, height: 1080 },
  });
});

test.afterAll(async () => {
  await page.close();
});

test('matches basic progress', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'basic',
    })
  ).toMatchSnapshot();
});

test('matches vertical progress', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'with-vertical-style',
    })
  ).toMatchSnapshot();
});

test('matches progress with markers', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'with-markers',
    })
  ).toMatchSnapshot();
});

test('matches circular progress', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'with-circular-style',
    })
  ).toMatchSnapshot();
});

test('matches progress with different statuses', async () => {
  // Prevent flaky snapshot because of animation
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'with-statuses',
    })
  ).toMatchSnapshot();
});

test('matches progress with different sizes', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'with-sizes',
    })
  ).toMatchSnapshot();
});

test('matches progress with custom rendering', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'customise-value-rendering',
    })
  ).toMatchSnapshot();
});
