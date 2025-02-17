import test, { expect, Page } from '@playwright/test';
import {
  clickElementWithTestId,
  getPlaygroundScreenshot,
  goTo,
} from '@site/docs/web/playwrightTestHelper';

let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();

  await goTo(page, '/web/Components/Widget');
});

test.afterAll(async () => {
  await page.close();
});

test('matches basic widget', async () => {
  expect(
    await getPlaygroundScreenshot(page, { id: 'basic' })
  ).toMatchSnapshot();
});

test('matches widget with title dot', async () => {
  expect(
    await getPlaygroundScreenshot(page, { id: 'widget-with-title-dot' })
  ).toMatchSnapshot();
});

test('matches widget with title icon', async () => {
  expect(
    await getPlaygroundScreenshot(page, { id: 'widget-with-title-icon' })
  ).toMatchSnapshot();
});

test('matches widget with title extra', async () => {
  expect(
    await getPlaygroundScreenshot(page, { id: 'widget-with-title-extra' })
  ).toMatchSnapshot();
});

test('matches widget with actions', async () => {
  await clickElementWithTestId(page, 'action-icon-widget-action');
  expect(
    await getPlaygroundScreenshot(page, { id: 'widget-with-actions' })
  ).toMatchSnapshot();
});

test('matches widget with actions extra', async () => {
  expect(
    await getPlaygroundScreenshot(page, { id: 'widget-with-actions-extra' })
  ).toMatchSnapshot();
});

test('matches support drag and resize', async () => {
  expect(
    await getPlaygroundScreenshot(page, { id: 'drag-and-resize-support' })
  ).toMatchSnapshot();
});
