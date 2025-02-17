import React, { useState, useEffect } from 'react';
import {
  Typography,
  Input,
  Select,
  Grid,
  theme,
} from '@ehrocks/hero-design-react';
import type { BaseOption } from '@ehrocks/hero-design-react';
import styled from 'styled-components';
import Values from 'values.js';

const SettingWrapper = styled.div`
  display: flex;
  gap: ${theme.space.medium}px;
`;

const ShadeWrapper = styled(Grid)`
  margin-top: ${theme.space.xlarge}px;
`;

const ColorBlockWrapper = styled.div`
  width: 150px;
`;

const ColorBlock = styled.div`
  height: 200px;
  background-color: ${(props) => props.color};
`;

const ColorInfo = styled.div`
  padding: ${theme.space.small}px;
`;

const STEP_OPTIONS = [
  { value: 5, text: '5%' },
  { value: 10, text: '10%' },
  { value: 15, text: '15%' },
  { value: 20, text: '20%' },
];

const renderVariantName = (
  type: 'base' | 'lighten' | 'darken',
  step: number
) => {
  switch (type) {
    case 'base':
      return <Typography.Text fontWeight="semi-bold">Base</Typography.Text>;
    case 'lighten':
      return (
        <Typography.Text>
          Lighten: <strong>{step <= 100 ? step : 100}%</strong>
        </Typography.Text>
      );
    case 'darken':
      return (
        <Typography.Text>
          Darken: <strong>{step <= 100 ? step : 100}%</strong>
        </Typography.Text>
      );
  }
};

const Block = ({
  color,
  type,
  step = 0,
}: {
  color: string;
  type: 'base' | 'lighten' | 'darken';
  step?: number;
}) => {
  return (
    <ColorBlockWrapper>
      <ColorBlock color={color} />
      <ColorInfo>
        <Typography.Text>
          Color: <strong>{color.toUpperCase()}</strong>
        </Typography.Text>
        {renderVariantName(type, step)}
      </ColorInfo>
    </ColorBlockWrapper>
  );
};

const ColorGenerator = () => {
  const [color, setColor] = useState('#a3a6ac');
  const [baseColor, setBaseColor] = useState(new Values('#a3a6ac'));
  const [step, setStep] = useState(15);
  const numberOfShades = Math.round(100 / step) - 1;
  const weights = Array.from(
    Array(numberOfShades).slice(0, numberOfShades).keys()
  );

  useEffect(() => {
    if (color.length === 7) {
      setBaseColor(new Values(color));
    }
  }, [color]);

  return (
    <div>
      <SettingWrapper>
        <Typography.Text tagName="label" fontWeight="semi-bold">
          Color:
          <Input
            type="color"
            placeholder="Hex color code"
            value={color.toUpperCase()}
            onChange={(e) => setColor(e.target.value)}
          />
        </Typography.Text>
        <Typography.Text tagName="label" fontWeight="semi-bold">
          Step:
          <Select<number, BaseOption<number>>
            options={STEP_OPTIONS}
            value={step}
            onChange={setStep}
          />
        </Typography.Text>
      </SettingWrapper>
      <ShadeWrapper>
        <Grid.Row>
          {weights
            .slice(0, numberOfShades)
            .reverse()
            .map((w) => (
              <Block
                key={w}
                color={baseColor.tint(step * (w + 1)).hexString()}
                type="lighten"
                step={(w + 1) * step}
              />
            ))}
          <Block color={baseColor.hexString()} type="base" />
          {weights.map((w) => (
            <Block
              key={w}
              color={baseColor.shade(step * (w + 1)).hexString()}
              type="darken"
              step={(w + 1) * step}
            />
          ))}
        </Grid.Row>
      </ShadeWrapper>
    </div>
  );
};

export default ColorGenerator;
