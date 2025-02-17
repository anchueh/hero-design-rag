import test, { expect, Page } from '@playwright/test';
import {
  getPlaygroundScreenshot,
  goTo,
} from '@site/docs/web/playwrightTestHelper';

let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();

  await goTo(page, '/web/Components/tag');
});

test.afterAll(async () => {
  await page.close();
});

test('matches tag variants', async () => {
  expect(
    await getPlaygroundScreenshot(page, { id: 'tag-variants' })
  ).toMatchSnapshot();
});

test('matches tag sizes', async () => {
  expect(
    await getPlaygroundScreenshot(page, { id: 'tag-sizes' })
  ).toMatchSnapshot();
});

test('matches removable tag', async () => {
  expect(
    await getPlaygroundScreenshot(page, { id: 'removable-tag' })
  ).toMatchSnapshot();
});
