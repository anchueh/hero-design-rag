import React from 'react';
import Table from '../../src/components/Table';

const SpacingTable = ({ type = 'web' }) => {
  const isMobile = type === 'mobile';
  const mobileRows = [
    {
      title: 'Scale',
      values: [
        'xxsmall',
        'xsmall',
        'small',
        'smallMedium',
        'medium',
        'large',
        'xlarge',
        'xxlarge',
        'xxxlarge',
        'xxxxlarge',
      ],
    },
    {
      title: 'Size(dp)',
      values: [2, 4, 8, 12, 16, 24, 32, 40, 48, 56],
    },
  ];

  const webRows = [
    {
      title: 'Scale',
      values: [
        'xxsmall',
        'xsmall',
        'small',
        'medium',
        'large',
        'xlarge',
        'xxlarge',
        'xxxlarge',
        'xxxxlarge',
      ],
    },
    {
      title: 'Size(px)',
      values: [2, 4, 8, 16, 24, 32, 40, 48, 56],
    },
  ];

  return (
    <div style={{ overflowX: 'scroll' }}>
      <Table style={{ width: '100%' }} rows={isMobile ? mobileRows : webRows} />
    </div>
  );
};

export default SpacingTable;
