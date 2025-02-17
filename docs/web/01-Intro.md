---
id: intro
title: Introduction
---

# Getting started

Hero Design's component library is built to provide better development experience for front-end developers.

## Installation

- Please make sure that you have [Node.js](https://nodejs.org/en/) (>=20.0.0) or [Yarn](https://classic.yarnpkg.com/en/docs/install#mac-stable) (4.0.2 - Installing via `npm` is recommended) installed.
- Install `@ehrocks/hero-design-react` and its peer dependencies:

If you're using `npm`:

```bash
npm install @ehrocks/hero-design-react
```

If you're using `yarn`:

```bash
yarn add @ehrocks/hero-design-react
```

## Usage

#### Inject styles

- All Hero Design's components need a theme object to get their styles. The library already has a default theme object which can be provided to the components via `ThemeProvider` from `styled-components`.
- To use the icon set of Hero Design, you need to load its style by importing from `@ehrocks/hero-design-react/es/styles/index.css`.

You may wish to configure your project to inject these at application level.

#### Using components

Simply import components by name from `@ehrocks/hero-design-react` package.

**Examples**

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { theme, Button } from 'hero-design';

const App = () => (
  <ThemeProvider theme={theme}>
    <Button text="Hero Design" />
  </ThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
```

#### Accessing theme

If you wish to use theme object only, you can wrap your component with `styled-components`'s HOC `withTheme` as long as your component is placed under ThemeProvider's context.

For more details of theme object, please go to [Theming](/web/guidelines/theming).

#### Contributing

Please go to [contributing guidelines](/web/contributing/process) to learn how you can contribute to this project.
