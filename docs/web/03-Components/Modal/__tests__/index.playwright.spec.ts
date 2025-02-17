import test, { expect } from '@playwright/test';
import {
  clickButton,
  getModalScreenshot,
  goTo,
} from '@site/docs/web/playwrightTestHelper';

test.beforeEach(async ({ page }) => {
  await goTo(page, '/web/Components/modal', {
    viewport: { width: 1920, height: 1080 },
  });
});

test('matches basic modal', async ({ page }) => {
  await clickButton(page, 'Open basic modal');

  expect(
    await getModalScreenshot(page, {
      id: 'basic',
      delay: 500,
    })
  ).toMatchSnapshot();
});

test('matches primary modal', async ({ page }) => {
  await clickButton(page, 'Open primary modal');

  expect(
    await getModalScreenshot(page, {
      id: 'basic',
      delay: 500,
    })
  ).toMatchSnapshot();
});

test('matches small modal', async ({ page }) => {
  await clickButton(page, 'Open small modal');

  expect(
    await getModalScreenshot(page, {
      id: 'control-modal-sizes',
      delay: 500,
    })
  ).toMatchSnapshot();
});

test('matches medium modal', async ({ page }) => {
  await clickButton(page, 'Open medium modal');

  expect(
    await getModalScreenshot(page, {
      id: 'control-modal-sizes',
      delay: 500,
    })
  ).toMatchSnapshot();
});

test('matches large modal', async ({ page }) => {
  await clickButton(page, 'Open large modal');

  expect(
    await getModalScreenshot(page, {
      id: 'control-modal-sizes',
      delay: 500,
    })
  ).toMatchSnapshot();
});

test('matches extra large modal', async ({ page }) => {
  await clickButton(page, 'Open extra large modal');

  expect(
    await getModalScreenshot(page, {
      id: 'control-modal-sizes',
      delay: 500,
    })
  ).toMatchSnapshot();
});

test('matches double extra large modal', async ({ page }) => {
  await clickButton(page, 'Open double extra large modal');

  expect(
    await getModalScreenshot(page, {
      id: 'control-modal-sizes',
      delay: 500,
    })
  ).toMatchSnapshot();
});

test('matches info popup modal', async ({ page }) => {
  await clickButton(page, 'Info Modal');

  expect(
    await getModalScreenshot(page, {
      id: 'popup-modal',
      delay: 500,
    })
  ).toMatchSnapshot();
});

test('matches success popup modal', async ({ page }) => {
  await clickButton(page, 'Success Modal');

  expect(
    await getModalScreenshot(page, {
      id: 'popup-modal',
      delay: 500,
    })
  ).toMatchSnapshot();
});

test('matches warning popup modal', async ({ page }) => {
  await clickButton(page, 'Warning Modal');

  expect(
    await getModalScreenshot(page, {
      id: 'popup-modal',
      delay: 500,
    })
  ).toMatchSnapshot();
});

test('matches danger popup modal', async ({ page }) => {
  await clickButton(page, 'Danger Modal');

  expect(
    await getModalScreenshot(page, {
      id: 'popup-modal',
      delay: 500,
    })
  ).toMatchSnapshot();
});

test('matches confirm popup modal', async ({ page }) => {
  await clickButton(page, 'Confirm Modal');

  expect(
    await getModalScreenshot(page, {
      id: 'popup-modal',
      delay: 500,
    })
  ).toMatchSnapshot();
});

// FIXME: Weird result on CI. Will fix later
// test('matches custom modal', async ({ page }) => {
//   await clickButton(page, 'Custom Modal');
//   await page.mouse.move(0, 0);
//   await page.mouse.wheel(0, -100000000);

//   expect(
//     await getModalScreenshot(page, {
//       id: 'modal-rendering-customisation',
//       delay: 500,
//     })
//   ).toMatchSnapshot();
// });
