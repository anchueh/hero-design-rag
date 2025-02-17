import test, { expect, Page } from '@playwright/test';
import {
  clickElementWithTestId,
  getPlaygroundScreenshot,
  goTo,
  hoverElementWithTestId,
  typeInput,
} from '@site/docs/web/playwrightTestHelper';

let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();

  await goTo(page, '/web/Components/select');
});

test.afterAll(async () => {
  await page.close();
});

test('matches custom option rendering', async () => {
  await clickElementWithTestId(page, 'customized-option');
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'custom-option-renderer',
      expandedHeight: '250px',
    })
  ).toMatchSnapshot();
});

test('matches basic rendering', async () => {
  await clickElementWithTestId(page, 'basic');
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'basic',
      expandedHeight: '480px',
    })
  ).toMatchSnapshot();
});

test('matches custom selected option rendering', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'custom-selected-option-renderer',
      expandedHeight: '250px',
    })
  ).toMatchSnapshot();
});

test('matches grouped option rendering', async () => {
  await clickElementWithTestId(page, 'grouped-option');
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'groupedoptions',
      expandedHeight: '350px',
    })
  ).toMatchSnapshot();
});

test('matches sizes rendering', async () => {
  await page.mouse.move(0, 0);
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'sizes',
    })
  ).toMatchSnapshot();
});

test('matches prefix rendering', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'prefix',
    })
  ).toMatchSnapshot();
});

test('matches searching with no results rendering', async () => {
  await typeInput(page, 'searchable-select-input', 'random query');
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'select-with-searching-options',
      expandedHeight: '250px',
    })
  ).toMatchSnapshot();
});

test('matches creating new option rendering', async () => {
  await typeInput(page, 'creatable-select-input', 'New item');
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'allow-to-create-new-option',
      expandedHeight: '250px',
    })
  ).toMatchSnapshot();
});

test('matches clearing selected option', async () => {
  await hoverElementWithTestId(page, 'clearable');
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'allow-to-clear-selected-option',
    })
  ).toMatchSnapshot();
});

test('matches custom MultiSelect option rendering', async () => {
  await clickElementWithTestId(page, 'multiselect-customized-option');
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'multiselect-with-custom-option-renderer',
      expandedHeight: '250px',
    })
  ).toMatchSnapshot();
});

test('matches MultiSelect basic rendering', async () => {
  await clickElementWithTestId(page, 'basic-multiselect');
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'multiselect',
      expandedHeight: '250px',
    })
  ).toMatchSnapshot();
});

test('matches MultiSelect grouped option rendering', async () => {
  await clickElementWithTestId(page, 'multiselect-grouped-options');
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'multiselect-with-groupedoption',
      expandedHeight: '400px',
    })
  ).toMatchSnapshot();
});

test('matches custom MultiSelect selected option rendering', async () => {
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'multiselect-with-custom-selected-option-renderer',
    })
  ).toMatchSnapshot();
});

test('matches MultiSelect searching with no results rendering', async () => {
  await typeInput(page, 'searchable-multiselect-input', 'random query');
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'multiselect-with-searching-options',
      expandedHeight: '250px',
    })
  ).toMatchSnapshot();
});

test('matches MultiSelect creating new option rendering', async () => {
  await typeInput(page, 'creatable-multiselect-input', 'New item');
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'multiselect-with-creating-new-option',
      expandedHeight: '250px',
    })
  ).toMatchSnapshot();
});

test('matches compact MultiSelect', async () => {
  await typeInput(page, 'creatable-multiselect-input', 'New item');
  expect(
    await getPlaygroundScreenshot(page, {
      id: 'multiselect-with-compact-mode',
    })
  ).toMatchSnapshot();
});
