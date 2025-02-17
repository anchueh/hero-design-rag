import test, { expect, Page } from '@playwright/test';
import {
  getPlaygroundScreenshot,
  goTo,
} from '@site/docs/web/playwrightTestHelper';

let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();

  await goTo(page, '/web/Components/comment');
});

test.afterAll(async () => {
  await page.close();
});
test('matches basic Comment', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'basic-comment',
    })
  ).toMatchSnapshot();
});

test('matches Comment with reactions', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'comment-with-reactions',
    })
  ).toMatchSnapshot();
});

test('matches Comment with icon actions', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'icon-actions',
    })
  ).toMatchSnapshot();
});

test('matches Comment with dropdown actions', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'dropdown-actions',
    })
  ).toMatchSnapshot();
});

test('matches Comment with a list', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'usage-with-a-list',
    })
  ).toMatchSnapshot();
});

test('matches Comment with nested comments', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'nested-comments',
    })
  ).toMatchSnapshot();
});

test('matches Editor', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'editor',
    })
  ).toMatchSnapshot();
});

test('matches Editor with custom actions', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'editor-with-customizable-actions-bar',
    })
  ).toMatchSnapshot();
});
