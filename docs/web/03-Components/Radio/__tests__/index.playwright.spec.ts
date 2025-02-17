import test, { expect, Page } from '@playwright/test';
import {
  getPlaygroundScreenshot,
  goTo,
} from '@site/docs/web/playwrightTestHelper';

let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();

  await goTo(page, '/web/Components/radio');
});

test.afterAll(async () => {
  await page.close();
});

test('matches basic radio', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'basic',
    })
  ).toMatchSnapshot();
});

test('matches disabled radio', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'disabled',
    })
  ).toMatchSnapshot();
});

test('matches radio group', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'radiogroup',
    })
  ).toMatchSnapshot();
});

test('matches radio group layout', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'radiogroup-layout',
    })
  ).toMatchSnapshot();
});

test('matches radio button', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'radiobutton',
    })
  ).toMatchSnapshot();
});

test('matches radio button sizes', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'radiobutton-sizes',
    })
  ).toMatchSnapshot();
});

test('matches radio button intents', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'radiobutton-intents',
    })
  ).toMatchSnapshot();
});

test('matches radio button group', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'radiobuttongroup',
    })
  ).toMatchSnapshot();
});

test('matches radio button group layout', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'radiobuttongroup-layout',
    })
  ).toMatchSnapshot();
});
