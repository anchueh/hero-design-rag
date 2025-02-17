import React from 'react';
import { Typography, Icon, ThemeProvider, theme } from '@hero-design/rn';

type RowProps =
  | {
      text: string;
      Example?: React.ReactNode;
    }
  | string;

type ColumnProps = {
  rows: RowProps[];
  isValid: boolean;
};

const Row = (item: RowProps) => {
  if (typeof item === 'string') {
    return (
      <Typography.Body variant="small" intent="primary">
        {item}
      </Typography.Body>
    );
  }

  const { text, Example } = item;
  return (
    <div>
      <Typography.Body variant="small" style={{ flex: 1 }}>
        {text}
      </Typography.Body>
      {Example}
    </div>
  );
};

const ColumnHeadingTable = ({ rows, isValid = true }: ColumnProps) => {
  return (
    <div>
      {rows?.map((item) => (
        <div>
          {isValid ? (
            <div
              style={{
                display: 'flex',
                textAlign: 'center',
                alignItems: 'center',
              }}
            >
              <Icon
                icon="circle-check"
                intent="success"
                style={{ alignSelf: 'center', margin: theme.space.small }}
              />
              <Typography.Body variant="regular-bold">Do</Typography.Body>
            </div>
          ) : (
            <div
              style={{
                display: 'flex',
                textAlign: 'center',
                alignItems: 'center',
              }}
            >
              <Icon
                icon="circle-cancel"
                intent="danger"
                style={{ alignSelf: 'center', margin: theme.space.small }}
              />
              <Typography.Body variant="regular-bold">
                Don&apos;t
              </Typography.Body>
            </div>
          )}
          {Row(item)}
        </div>
      ))}
    </div>
  );
};

type TableProps = {
  should?: Omit<ColumnProps, 'isValid'>;
  shouldNot?: Omit<ColumnProps, 'isValid'>;
};
const ColumnHeadingTablePrinciple = ({ should, shouldNot }: TableProps) => {
  const cellStyle = {
    border: `1px solid ${theme.colors.secondaryOutline}`,
    padding: theme.space.small,
    width: '50%',
    verticalAlign: 'top',
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <table
          style={{
            borderCollapse: 'collapse',
            width: '100%',
            tableLayout: 'fixed',
          }}
        >
          <tr>
            {should && (
              <td style={cellStyle}>
                <div style={{ display: 'inline-block' }}>
                  <ColumnHeadingTable isValid rows={should.rows} />
                </div>
              </td>
            )}
            {shouldNot && (
              <td style={cellStyle}>
                <div style={{ display: 'inline-block' }}>
                  <ColumnHeadingTable isValid={false} rows={shouldNot.rows} />
                </div>
              </td>
            )}
          </tr>
        </table>
      </div>
    </ThemeProvider>
  );
};

export default ColumnHeadingTablePrinciple;
