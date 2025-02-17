import test, { expect, Page } from '@playwright/test';
import {
  getPlaygroundScreenshot,
  goTo,
} from '@site/docs/web/playwrightTestHelper';

let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();

  await goTo(page, '/web/Components/card');
});

test.afterAll(async () => {
  await page.close();
});

test('matches basic usage of card', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'basic',
    })
  ).toMatchSnapshot();
});

test('matches card with extra content', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'card-with-extra-content',
    })
  ).toMatchSnapshot();
});

test('matches different sizes of cards', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'sizes',
    })
  ).toMatchSnapshot();
});

test('matches different variants of cards', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'card-variants',
    })
  ).toMatchSnapshot();
});

test('matches card with image', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'card-image',
    })
  ).toMatchSnapshot();
});
