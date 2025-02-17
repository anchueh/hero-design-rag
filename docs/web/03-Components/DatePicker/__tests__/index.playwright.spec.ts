import test, { expect } from '@playwright/test';
import {
  clickElementWithId,
  getPlaygroundScreenshot,
  goTo,
} from '@site/docs/web/playwrightTestHelper';

test.describe('on desktop', () => {
  test.beforeEach(async ({ page }) => {
    await goTo(page, '/web/Components/datePicker');
  });
  test('matches basic date picker', async ({ page }) => {
    await clickElementWithId(page, 'basic-date-picker');
    expect(
      await getPlaygroundScreenshot(page, {
        id: 'basic',
        expandedHeight: '400px',
      })
    ).toMatchSnapshot();
  });

  test('matches limited range date picker', async ({ page }) => {
    await clickElementWithId(page, 'limited-range-date-picker');
    expect(
      await getPlaygroundScreenshot(page, {
        id: 'with-limited-range',
        expandedHeight: '400px',
      })
    ).toMatchSnapshot();
  });

  test('matches date range picker', async ({ page }) => {
    await clickElementWithId(page, 'date-range-start');
    expect(
      await getPlaygroundScreenshot(page, {
        id: 'datepickerrange',
        expandedHeight: '400px',
      })
    ).toMatchSnapshot();
  });

  test('matches basic week picker', async ({ page }) => {
    await clickElementWithId(page, 'week-picker');
    expect(
      await getPlaygroundScreenshot(page, {
        id: 'datepickerweek',
        expandedHeight: '400px',
      })
    ).toMatchSnapshot();
  });

  test('matches custom week start of week picker', async ({ page }) => {
    await clickElementWithId(page, 'week-picker-custom-week');
    expect(
      await getPlaygroundScreenshot(page, {
        id: 'custom-week',
        expandedHeight: '400px',
      })
    ).toMatchSnapshot();
  });

  test('matches month range picker', async ({ page }) => {
    await clickElementWithId(page, 'month-range-start');
    // flaky test
    await page.mouse.move(0, 0);
    expect(
      await getPlaygroundScreenshot(page, {
        id: 'datepickermonthrange',
        expandedHeight: '450px',
      })
    ).toMatchSnapshot();
  });

  test('matches fortnightly picker', async ({ page }) => {
    await clickElementWithId(page, 'fortnightly-picker');
    expect(
      await getPlaygroundScreenshot(page, {
        id: 'datepickerfortnightly',
        expandedHeight: '450px',
      })
    ).toMatchSnapshot();
  });

  test('matches fixed range datepicker', async ({ page }) => {
    await clickElementWithId(page, 'fixed-range-picker');
    expect(
      await getPlaygroundScreenshot(page, {
        id: 'datepickerfixedrange',
        expandedHeight: '450px',
      })
    ).toMatchSnapshot();
  });
});

test.describe('on mobile', () => {
  test.beforeEach(async ({ page }) => {
    await goTo(page, '/web/Components/datePicker', {
      viewport: { width: 400, height: 700 },
    });
  });
  test('matches date range picker', async ({ page }) => {
    await clickElementWithId(page, 'date-range-start');
    await page.waitForTimeout(1000);
    expect(
      await getPlaygroundScreenshot(page, {
        id: 'datepickerrange',
        expandedHeight: '700px',
      })
    ).toMatchSnapshot();
  });

  test('matches month range picker', async ({ page }) => {
    await clickElementWithId(page, 'month-range-start');
    // flaky test
    await page.mouse.move(0, 0);
    expect(
      await getPlaygroundScreenshot(page, {
        id: 'datepickermonthrange',
        expandedHeight: '800px',
      })
    ).toMatchSnapshot();
  });
});
