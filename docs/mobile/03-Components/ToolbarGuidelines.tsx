import React from 'react';
import { Toolbar } from '@hero-design/rn';
import { View } from 'react-native';
import DoOrNotTable from './utils/DoOrNotTable';

const ToolbarWrapper = ({ children }: { children: React.ReactNode }) => (
  <View style={{ height: 64 }}>{children}</View>
);
const ToolbarLabelGuideline = () => {
  return (
    <DoOrNotTable
      should={{
        rows: [
          {
            text: 'Label should be a verb and one word is preferred, for example `Cancel`, `Submit`. ',
            Example: (
              <ToolbarWrapper>
                <Toolbar>
                  <Toolbar.Group
                    align="right"
                    items={[
                      { label: 'Cancel', intent: 'secondary' },
                      { label: 'Submit', intent: 'primary' },
                    ]}
                  />
                </Toolbar>
              </ToolbarWrapper>
            ),
          },
          {
            text: 'The priority should be: primary -> secondary -> success -> info -> warning -> danger. The higher priority should be placed on the right.',
            Example: (
              <ToolbarWrapper>
                <Toolbar>
                  <Toolbar.Group
                    align="right"
                    items={[
                      {
                        label: 'Reset',
                        intent: 'danger',
                        onPress: () => alert('Reset'),
                      },
                      {
                        label: 'Cancel',
                        disabled: true,
                        intent: 'secondary',
                        onPress: () => alert('Disabled'),
                      },
                      {
                        label: 'Submit',
                        intent: 'primary',
                        onPress: () => alert('Submit'),
                      },
                    ]}
                  />
                </Toolbar>
              </ToolbarWrapper>
            ),
          },
        ],
      }}
      shouldNot={{
        rows: [
          {
            text: 'Label should be short. For example, when the users access Create Leave Request screen, they know they are acting on Leave Request. So, `Cancel` is meaningful enough instead of `Cancel Leave request` .',
            Example: (
              <ToolbarWrapper>
                <Toolbar>
                  <Toolbar.Group
                    align="right"
                    items={[
                      { label: 'Cancel Leave Request', intent: 'secondary' },
                      { label: 'Submit', intent: 'primary' },
                    ]}
                  />
                </Toolbar>
              </ToolbarWrapper>
            ),
          },
        ],
      }}
    />
  );
};

export { ToolbarLabelGuideline };
