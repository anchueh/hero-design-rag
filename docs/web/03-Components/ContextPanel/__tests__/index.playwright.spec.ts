import test, { expect } from '@playwright/test';
import {
  getModalScreenshot,
  goTo,
  clickButton,
} from '@site/docs/web/playwrightTestHelper';

test.beforeEach(async ({ page }) => {
  await goTo(page, '/web/Components/contextPanel');
});

test('matches basic context panel', async ({ page }) => {
  await clickButton(page, 'Open Basic Context Panel');

  expect(
    await getModalScreenshot(page, {
      id: 'basic',
      delay: 500,
      modalContentTestId: 'context-panel-context-panel',
    })
  ).toMatchSnapshot();
});

test('matches customized context panel', async ({ page }) => {
  await clickButton(page, 'Open Custom Context Panel');

  expect(
    await getModalScreenshot(page, {
      id: 'customized-context-panel',
      delay: 500,
      modalContentTestId: 'context-panel-context-panel',
    })
  ).toMatchSnapshot();
});
