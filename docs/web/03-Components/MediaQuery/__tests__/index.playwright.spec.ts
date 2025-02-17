import test, { expect, Page } from '@playwright/test';
import {
  getPlaygroundScreenshot,
  goTo,
} from '@site/docs/web/playwrightTestHelper';

let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();

  await goTo(page, '/web/Components/MediaQuery');
});

test.afterAll(async () => {
  await page.close();
});

test('matches with xsmall screen when has breakpoints', async () => {
  await page.setViewportSize({ width: 300, height: 760 });
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'mediaquery-with-breakpoints',
    })
  ).toMatchSnapshot();
});

test('matches small screen', async () => {
  await page.setViewportSize({ width: 640, height: 640 });
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'with-render-children',
    })
  ).toMatchSnapshot();
});

test('matches medium screen', async () => {
  await page.setViewportSize({ width: 800, height: 600 });
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'with-render-children',
    })
  ).toMatchSnapshot();
});

test('matches large screen', async () => {
  await page.setViewportSize({ width: 1024, height: 786 });
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'with-render-children',
    })
  ).toMatchSnapshot();
});

test('matches xlarge screen', async () => {
  await page.setViewportSize({ width: 1280, height: 760 });
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'with-render-children',
    })
  ).toMatchSnapshot();
});

test('matches large screen when has breakpoints', async () => {
  await page.setViewportSize({ width: 1440, height: 760 });
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'mediaquery-with-breakpoints',
    })
  ).toMatchSnapshot();
});

test('matches custom wrapper element', async () => {
  await page.setViewportSize({ width: 1280, height: 760 });
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'mediaquery-is-a-polymorphic-components',
    })
  ).toMatchSnapshot();
});
