---
id: intro
title: Introduction
---

# Introduction

Hero Design's component library is built to provide better development experience for front-end developers.

## Prequisites

Hero Design for Mobile comes with a few peer dependencies that need to be installed first in order to use, you can find them below, more info can be found [here](https://github.com/Thinkei/hero-design/blob/master/packages/rn/package.json#L29-L40).

- `react-native-safe-area-context`
- `@react-native-community/datetimepicker`
- `@react-native-community/slider`
- `react-native-gesture-handler`
- `react-native-webview`
- `react-native-pager-view`
- `react-native-vector-icons`
- `react-native-linear-gradient`
- `@hero-design/react-native-month-year-picker`
- `@ptomasroos/react-native-multi-slider`

## Installation

- Please make sure that you have [Node.js](https://nodejs.org/en/) (>=20.0.0) and [Yarn](https://classic.yarnpkg.com/en/docs/install#mac-stable) (4.0.2 - Installing via `npm` is recommended) installed.

- Install `@hero-design/rn` and its peer dependencies:

If you're using `npm`:

```bash
npm install @hero-design/rn
```

If you're using `yarn`:

```bash
yarn add @hero-design/rn
```

- Configure babel to work with inline import

From version `7.14.0`, Hero Design use `babel-plugin-inline-import` to resolve the inline imports. Consumer project need to add below configuration to `babel.config.js`

```js
{
  "plugins": [
    [
      'babel-plugin-inline-import',
      {
        extensions: ['hero-editor/dist/app.js'],
      },
    ],
  ]
}
```

- Add `@hero-design/eslint-plugin` and extend `plugin:@hero-design/recommendedRn` config to ensure correct usage of our library: https://www.npmjs.com/package/@hero-design/eslint-plugin.

## Usage

### Inject styles

- All Hero Design's components need a theme object to get their styles. The library already has provide different theme configurations via `ThemeSwitcher`, depending on the brand that you are working on, you can config the theme name as `swag` (default), `work`, `jobs`, `wallet` or `eBens`.

### Examples

- Specify name prop as `swag` or leave it undefined to work on the UI in Swag brand.

```jsx
import React from 'react';
import { ThemeSwitcher, Button } from '@hero-design/rn';

const App = () => (
  <ThemeSwitcher name="swag">
    <Button text="Hero Design" onPress={() => console.log('button pressed')} />
  </ThemeSwitcher>
);
```

- Specify name prop as `swagLight` to work on the UI in Swag brand.

```jsx
import React from 'react';
import { ThemeSwitcher, Button } from '@hero-design/rn';

const App = () => (
  <ThemeSwitcher name="swagLight">
    <Button text="Hero Design" onPress={() => console.log('button pressed')} />
  </ThemeSwitcher>
);
```

- Specify name prop as `work` to work on the UI in Work brand.

```jsx
import React from 'react';
import { ThemeSwitcher, Button } from '@hero-design/rn';

const App = () => (
  <ThemeSwitcher name="work">
    <Button text="Hero Design" onPress={() => console.log('button pressed')} />
  </ThemeSwitcher>
);
```

- Specify name prop as `jobs` to work on the UI in Jobs brand.

```jsx
import React from 'react';
import { ThemeSwitcher, Button } from '@hero-design/rn';

const App = () => (
  <ThemeSwitcher name="work">
    <Button text="Hero Design" onPress={() => console.log('button pressed')} />
  </ThemeSwitcher>
);
```

- Specify name prop as `wallet` to work on the UI in Money brand.

```jsx
import React from 'react';
import { ThemeSwitcher, Button } from '@hero-design/rn';

const App = () => (
  <ThemeSwitcher name="wallet">
    <Button text="Hero Design" onPress={() => console.log('button pressed')} />
  </ThemeSwitcher>
);
```

- Specify name prop as `eBens` to work on the UI in Benefits brand.

```jsx
import React from 'react';
import { ThemeSwitcher, Button } from '@hero-design/rn';

const App = () => (
  <ThemeSwitcher name="eBens">
    <Button text="Hero Design" onPress={() => console.log('button pressed')} />
  </ThemeSwitcher>
);
```

- Use multiple `ThemeSwitcher` or `withTheme` to work on the UI with a mixed of brands. But this is not common. Please consult UX & Hero-design team when this happens.
  :::note
  if you use `const theme = useTheme()` in the following example, the theme is not `work` or `jobs` either. In this case, please use `withTheme` instead of `ThemeSwitcher`
  :::

```jsx
// Example of ThemeSwitcher
import React from 'react';
import { ThemeSwitcher, Button } from '@hero-design/rn';

const App = () => (
  <>
    <ThemeSwitcher name="work">
      <Button
        text="In Swag Brand"
        onPress={() => console.log('button pressed')}
      />
    </ThemeSwitcher>
    <ThemeSwitcher name="jobs">
      <Button
        text="In Job Brand"
        onPress={() => console.log('button pressed')}
      />
    </ThemeSwitcher>
  </>
);
```

```jsx
// Example of withTheme

import React from 'react';
import { withTheme, Button, useTheme } from '@hero-design/rn';

const App = () => {
  const theme = useTheme();
  return (
    <Button
      text="In Swag Brand"
      onPress={() => console.log('button pressed')}
    />
  );
};

export default withTheme(App, 'swagDark');
```

## Run playground

1. Download Expo [iOS](https://itunes.apple.com/app/apple-store/id982107779), [Android](https://play.google.com/store/apps/details?id=host.exp.exponent)
2. Open Expo Go app and **login with account eh-mobile-dev** (contact to Slack [#eh-andromeda-devs](https://employmenthero.slack.com/archives/C01DRNPF5B3) to get password)
3. Open the camera app on your device and scan the code below
   ![PlaygroundQR](./assets/ExpoPlaygroundQR.png)

   Or, open this link on your device:

```js
exp://exp.host/@thinkei/Mobile-Hero-Design-Playground?release-channel=master
```
