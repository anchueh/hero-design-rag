import { Page } from '@playwright/test';

type Viewport = {
  width: number;
  height: number;
};

type PageGoToOptions = Parameters<Page['goto']>[1];

type CustomSelector = (id: string) => string;

const goTo = async (
  page: Page,
  route: string,
  opts?: { viewport?: Viewport } & PageGoToOptions
) => {
  const docHost = process.env.DOC_HOST || 'http://localhost:4000';

  if (opts?.viewport) {
    page.setViewportSize(opts.viewport);
  }

  await page.goto(`${docHost}${route}`, {
    ...opts,
  });
};

const toPlaygroundSelector = (id: string) =>
  `#${id} ~ [class^="playgroundContainer"] > [class^="playgroundPreview"]`;

const getPlayground = (
  page: Page,
  id: string,
  toCustomSelector?: CustomSelector
) => {
  return page
    .locator(
      !toCustomSelector ? toPlaygroundSelector(id) : toCustomSelector(id)
    )
    .first();
};

const getPlaygroundScreenshot = async (
  page: Page,
  {
    id,
    expandedHeight,
    expandedWidth,
    delay = 0,
    transparentCaret = true,
    toCustomSelector = undefined,
    disabledAnimation,
  }: {
    id: string;
    expandedHeight?: string;
    expandedWidth?: string;
    delay?: number;
    transparentCaret?: boolean;
    toCustomSelector?: (id: string) => string;
    disabledAnimation?: boolean;
  }
) => {
  await page.evaluate(
    ({ playgroundHeight, playgroundSelector, playgroundWidth }) => {
      const playgroundEle = document.querySelector(
        playgroundSelector
      ) as HTMLDivElement;
      if (playgroundHeight != null) {
        playgroundEle.style.height = playgroundHeight;
      }
      if (playgroundWidth != null) {
        playgroundEle.style.width = playgroundWidth;
      }
    },
    {
      playgroundSelector: !toCustomSelector
        ? toPlaygroundSelector(id)
        : toCustomSelector(id),
      playgroundHeight: expandedHeight,
      playgroundWidth: expandedWidth,
    }
  );

  //  Hide back to top button and navbar
  const style = `
      button[aria-label^="Scroll back to top"], nav[class^="navbar"]{
        display: none;
      }

      ${
        transparentCaret &&
        `      input {
        caret-color: transparent;
      }`
      }
    `;
  await page.addStyleTag({ content: style });

  if (delay > 0) {
    await page.waitForTimeout(delay);
  }

  const playground = await getPlayground(page, id, toCustomSelector).screenshot(
    {
      animations: disabledAnimation ? 'disabled' : 'allow',
    }
  );

  return playground;
};

const pauseAnimation = (
  page: Page,
  { id, selector }: { id?: string; selector: string }
) =>
  page.evaluate(
    ({ passedInSelector, playgroundSelector }) =>
      document
        .querySelectorAll([playgroundSelector, passedInSelector].join(' '))
        .forEach((ele) => ele.setAttribute('style', 'animation: none')),
    {
      playgroundSelector: id !== undefined ? toPlaygroundSelector(id) : '',
      passedInSelector: selector,
    }
  );

const hoverElementWithTestId = async (
  page: Page,
  testId: string,
  options?: { timeout?: number }
) => page.getByTestId(testId).first().hover(options);

const getModalSelector = (id, modalContentTestId) =>
  `${toPlaygroundSelector(id)} [data-test-id="${modalContentTestId}"]`;

const getModalScreenshot = async (
  page: Page,
  { id, delay, modalContentTestId = 'modal-content' }
) => {
  const playground = await page.$(getModalSelector(id, modalContentTestId));
  await page.waitForTimeout(delay);
  return playground.screenshot();
};

const clickButton = async (page: Page, text: string) => {
  const button = page.getByRole('button', { name: text });
  await button.click();
  await page.mouse.move(0, 0);
};

const clickElementWithTestId = async (page: Page, testId: string) => {
  await page.getByTestId(testId).first().click();
  await page.mouse.move(0, 0);
};

const clickElementWithId = async (page: Page, id: string) => {
  await page.locator(`#${id}`).first().click({ force: true });
  await page.mouse.move(0, 0);
};

const hoverElement = async (page: Page, testId: string, id: string) =>
  page.hover(`${toPlaygroundSelector(id)} [data-test-id="${testId}"]`);

const typeInput = (page: Page, id: string, value: string) =>
  page.locator(`#${id}`).first().fill(value);

const hoverElementAndGetScreenShot = async (
  page: Page,
  {
    id,
    testId,
    expandedHeight,
    expandedWidth,
    delay = 0,
    transparentCaret = true,
    toCustomSelector = undefined,
    hoverTimeout,
  }: {
    id: string;
    testId: string;
    expandedHeight?: string;
    expandedWidth?: string;
    delay?: number;
    transparentCaret?: boolean;
    toCustomSelector?: (id: string) => string;
    hoverTimeout?: number;
  }
) => {
  await page.evaluate(
    ({ playgroundHeight, playgroundSelector, playgroundWidth }) => {
      const playgroundEle = document.querySelector(
        playgroundSelector
      ) as HTMLDivElement;
      if (playgroundHeight != null) {
        playgroundEle.style.height = playgroundHeight;
      }
      if (playgroundWidth != null) {
        playgroundEle.style.width = playgroundWidth;
      }
    },
    {
      playgroundSelector: !toCustomSelector
        ? toPlaygroundSelector(id)
        : toCustomSelector(id),
      playgroundHeight: expandedHeight,
      playgroundWidth: expandedWidth,
    }
  );

  //  Hide back to top button and navbar
  const style = `
      button[aria-label^="Scroll back to top"], nav[class^="navbar"]{
        display: none;
      }

      ${
        transparentCaret &&
        `      input {
        caret-color: transparent;
      }`
      }
    `;
  await page.addStyleTag({ content: style });

  if (delay) {
    await page.waitForTimeout(delay);
  }

  await hoverElementWithTestId(page, testId);

  if (hoverTimeout) {
    await page.waitForTimeout(hoverTimeout);
  }

  const playground = getPlayground(page, id, toCustomSelector);
  const playwrightBox = await playground.boundingBox();

  const screenshot = await page.screenshot({
    clip: playwrightBox,
  });

  return screenshot;
};
export {
  goTo,
  getPlaygroundScreenshot,
  getPlayground,
  toPlaygroundSelector,
  pauseAnimation,
  hoverElementWithTestId,
  getModalScreenshot,
  clickButton,
  clickElementWithTestId,
  clickElementWithId,
  hoverElement,
  typeInput,
  hoverElementAndGetScreenShot,
};
