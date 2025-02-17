import test, { expect, Page } from '@playwright/test';
import {
  clickButton,
  getPlaygroundScreenshot,
  goTo,
  hoverElementWithTestId,
} from '@site/docs/web/playwrightTestHelper';

let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();

  await goTo(page, '/web/Components/tooltip');
});

test.afterAll(async () => {
  await page.close();
});

test('matches basic rendering', async () => {
  await clickButton(page, 'Hover to show tooltip');
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'basic',
    })
  ).toMatchSnapshot();
});

test('matches top placement rendering', async () => {
  await clickButton(page, 'Top');
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'placement',
    })
  ).toMatchSnapshot();
});

test('matches bottom placement rendering', async () => {
  await clickButton(page, 'Bottom');
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'placement',
    })
  ).toMatchSnapshot();
});

test('matches right placement rendering', async () => {
  await clickButton(page, 'Right');
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'placement',
    })
  ).toMatchSnapshot();
});

test('matches left placement rendering', async () => {
  await clickButton(page, 'Left');
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'placement',
    })
  ).toMatchSnapshot();
});

test('matches hide Tooltip content rendering', async () => {
  await clickButton(page, 'Hide Tooltip content');
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'visibility',
    })
  ).toMatchSnapshot();
});

test('matches show Tooltip content rendering', async () => {
  await hoverElementWithTestId(page, 'disabledButton');
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'visibility',
    })
  ).toMatchSnapshot();
});

test('matches delay hover to show the tooltip', async () => {
  await hoverElementWithTestId(page, 'delay-button');
  await page.waitForTimeout(500);
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'delay',
    })
  ).toMatchSnapshot();
});

test('matches controlled tooltip', async () => {
  await clickButton(page, 'Click this button to show/hide the tooltip');
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'controlled-tooltip',
    })
  ).toMatchSnapshot();
});
