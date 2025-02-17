import React from 'react';
import { Tooltip, theme } from '@ehrocks/hero-design-react';
import styled from 'styled-components';
import Values from 'values.js';

const PALETTE = [
  { code: theme.colors.palette.grey, name: 'grey' },
  { code: theme.colors.palette.violet, name: 'violet' },
  { code: theme.colors.palette.purple, name: 'purple' },
  { code: theme.colors.palette.pink, name: 'pink' },
  { code: theme.colors.palette.green, name: 'green' },
  {
    code: theme.colors.palette.grotesqueGreen,
    name: 'grotesque-green',
  },
  { code: theme.colors.palette.smalt, name: 'smalt' },
  { code: theme.colors.palette.dodgerBlue, name: 'dodger-blue' },
  { code: theme.colors.palette.blue, name: 'blue' },
  { code: theme.colors.palette.red, name: 'red' },
  { code: theme.colors.palette.orange, name: 'orange' },
  { code: theme.colors.palette.yellow, name: 'yellow' },
];

const PaletteWrapper = styled.div`
  display: flex;
  gap: ${theme.space.medium}px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: ${theme.space.medium}px;
`;

const Color = styled.div<{
  width: number;
  height: number;
  color: string;
  textColor?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background-color: ${(props) => props.color};
  box-shadow: ${theme.shadows.default};
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: ${(props) => `${props.height / 2}px`};
  font-size: ${theme.fontSizes.medium}px;
  color: ${(props) => props.textColor};
`;

const ColorBlock = ({ color, themeName, kebabName, size }) => {
  const exposedInPalette = theme.colors.palette[themeName] !== undefined;
  const content = React.useMemo(() => {
    return (
      <div>
        <p>
          {color} ↔ {kebabName}
        </p>
        <p>
          {exposedInPalette ? (
            <>
              <span>Access via theme: colors.palette.{themeName}</span>
              <br />
              <span>Access via sx: {kebabName}</span>
            </>
          ) : (
            <span>
              Not expose yet,{' '}
              <a
                href="https://github.com/Thinkei/hero-design/issues/new/choose"
                style={{ color: theme.colors.palette.violetLight30 }}
              >
                request it
              </a>
            </span>
          )}
        </p>
      </div>
    );
  }, [themeName, kebabName, exposedInPalette]);
  return (
    <Tooltip
      target={<Color color={color} width={size} height={size} />}
      content={content}
      interactive
    />
  );
};

const ColorLine = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.space.medium}px;
`;

const DerivativeColors = ({ color, brightnessStep }) => {
  const weights = Array.from(Array(6).keys());
  const tints = weights
    .slice(0, 6)
    .reverse()
    .map((w) => {
      const colorVal = new Values(color.code);
      const s = colorVal.tint(brightnessStep * (w + 1)).hexString();
      return (
        <ColorBlock
          key={w}
          color={s}
          themeName={`${color.name}Light${brightnessStep * (w + 1)}`}
          kebabName={`${color.name}-light-${brightnessStep * (w + 1)}`}
          size={40}
        />
      );
    });
  const shades = weights.map((w) => {
    const colorVal = new Values(color.code);
    const t = colorVal.shade(brightnessStep * (w + 1)).hexString();
    return (
      <ColorBlock
        key={w}
        color={t}
        themeName={`${color.name}Dark${brightnessStep * (w + 1)}`}
        kebabName={`${color.name}-dark-${brightnessStep * (w + 1)}`}
        size={40}
      />
    );
  });

  return (
    <ColorLine>
      {tints}
      <ColorBlock
        color={color.code}
        themeName={color.name}
        kebabName={color.name}
        size={60}
      />
      {shades}
    </ColorLine>
  );
};

const Palette = () => {
  return (
    <PaletteWrapper>
      {PALETTE.map((color) => (
        <DerivativeColors key={color.name} color={color} brightnessStep={15} />
      ))}
    </PaletteWrapper>
  );
};

export { Palette };
