import test, { expect, Page } from '@playwright/test';
import {
  getPlaygroundScreenshot,
  goTo,
} from '@site/docs/web/playwrightTestHelper';

let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();

  await goTo(page, '/web/components/statistic');
});

test.afterAll(async () => {
  await page.close();
});

test('matches basic statistic', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'text-alignment-justified',
    })
  ).toMatchSnapshot();
});

test('matches basic statistic with units', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'units',
    })
  ).toMatchSnapshot();
});

test('matches statistic in card samples', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'with-card-examples',
    })
  ).toMatchSnapshot();
});
