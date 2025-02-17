import test, { expect, Page } from '@playwright/test';
import {
  getPlaygroundScreenshot,
  goTo,
} from '@site/docs/web/playwrightTestHelper';

let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();

  await goTo(page, '/web/Components/checkbox');
});

test.afterAll(async () => {
  await page.close();
});

test('matches checkbox basic', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'checkbox-1',
    })
  ).toMatchSnapshot();
});

test('matches disabled checkbox', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'disabled-checkbox',
    })
  ).toMatchSnapshot();
});

test('matches customised checkbox', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'checkbox-with-custom-text',
    })
  ).toMatchSnapshot();
});

test('matches checkbox group', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'checkboxgroup',
    })
  ).toMatchSnapshot();
});

test('matches checkbox group layout', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'checkboxgroup-layout',
    })
  ).toMatchSnapshot();
});

test('matches indeterminate checkbox', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'indeterminate-checkbox',
    })
  ).toMatchSnapshot();
});

test('matches checkbox button', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'checkboxbutton',
    })
  ).toMatchSnapshot();
});

test('matches checkbox button sizes', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'checkboxbutton-sizes',
    })
  ).toMatchSnapshot();
});

test('matches checkbox button group', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'checkboxbuttongroup',
    })
  ).toMatchSnapshot();
});
