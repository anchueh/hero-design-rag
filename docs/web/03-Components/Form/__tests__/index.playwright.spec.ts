import test, { expect, Page } from '@playwright/test';
import {
  getPlaygroundScreenshot,
  goTo,
  pauseAnimation,
} from '@site/docs/web/playwrightTestHelper';

let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();

  await goTo(page, '/web/Components/form');
});

test.afterAll(async () => {
  await page.close();
});

test('matches Form.Field with Input', async () => {
  await pauseAnimation(page, {
    id: 'formfield-with-input',
    selector: '.hero-icon-loading',
  });

  expect(
    await getPlaygroundScreenshot(page, {
      id: 'formfield-with-input',
    })
  ).toMatchSnapshot();
});

test('matches Form.Field with TextArea', async () => {
  await pauseAnimation(page, {
    id: 'formfield-with-inputtextarea',
    selector: '.hero-icon-loading',
  });

  expect(
    await getPlaygroundScreenshot(page, {
      id: 'formfield-with-inputtextarea',
    })
  ).toMatchSnapshot();
});

test('matches Form.Field with DatePicker', async () => {
  await pauseAnimation(page, {
    id: 'formfield-with-datepicker',
    selector: '.hero-icon-loading',
  });

  expect(
    await getPlaygroundScreenshot(page, {
      id: 'formfield-with-datepicker',
    })
  ).toMatchSnapshot();
});

test('matches Form.Field with Select', async () => {
  await pauseAnimation(page, {
    id: 'formfield-with-select',
    selector: '.hero-icon-loading',
  });

  expect(
    await getPlaygroundScreenshot(page, {
      id: 'formfield-with-select',
    })
  ).toMatchSnapshot();
});
