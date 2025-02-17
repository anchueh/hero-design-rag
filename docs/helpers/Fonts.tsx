import React from 'react';
import styled from 'styled-components';
import { theme } from '@ehrocks/hero-design-react';

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TableCell = styled.th<{ boldText?: boolean }>`
  border: 1px solid #d9dbdf;
  padding: ${theme.space.medium}px;
  font-size: ${theme.fontSizes.large}px;
  font-weight: ${(props) =>
    props.boldText ? theme.fontWeights.bold : theme.fontWeights.regular};
`;

const WEB_SCALE = [
  10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 42, 48, 54, 60, 68, 76,
];
const MOBILE_SCALE = [10, 12, 14, 16, 18, 20, 24, 28, 32];

const FontScale = ({ type = 'web' }) => {
  const isMobile = type === 'mobile';
  const SCALE = isMobile ? MOBILE_SCALE : WEB_SCALE;

  return (
    <div style={{ overflowX: 'auto' }}>
      <Table>
        <tbody>
          <tr>
            <TableCell boldText>Font Size (px)</TableCell>
            {SCALE.map((size) => (
              <TableCell key={size}>{size}</TableCell>
            ))}
          </tr>
          <tr>
            <TableCell boldText>Line Height (px)</TableCell>
            {SCALE.map((size) => (
              <TableCell key={size}>{size + 8}</TableCell>
            ))}
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

const WeightExample = styled.div<{
  weight: 'light' | 'regular' | 'semi-bold' | 'bold';
}>`
  height: 256px;
  width: 256px;
  border: 1px solid #d9dbdf;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
  font-size: 60px;
  line-height: 68px;
  font-weight: ${(props) => {
    switch (props.weight) {
      case 'light':
        return theme.fontWeights.light;
      case 'semi-bold':
        return theme.fontWeights.semiBold;
      case 'bold':
        return theme.fontWeights.bold;
      default:
        return theme.fontWeights.regular;
    }
  }};
`;

const ExampleContainer = styled.div`
  border-collapse: collapse;
  width: 100%;
`;

const FontWeights = ({ type = 'web' }) => {
  const isWeb = type === 'web';

  return (
    <ExampleContainer>
      <WeightExample weight="light">Light</WeightExample>
      <WeightExample weight="regular">Regular</WeightExample>
      <WeightExample weight="semi-bold">Semi Bold</WeightExample>
      {isWeb && <WeightExample weight="bold">Bold</WeightExample>}
    </ExampleContainer>
  );
};

export { FontScale, FontWeights };
