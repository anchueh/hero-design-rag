import React from 'react';
import DosAndDontsCarousel from '@site/src/components/Guideline/DosAndDontsCarousel';

import {
  DontsGuidelineCarouselProps,
  DosGuidelineCarouselProps,
} from '@site/src/components/Guideline/GuidelineCarousel';
import {
  Box,
  DatePicker,
  List,
  Switch,
  Tag,
  Toolbar,
  Typography,
  theme,
} from '@hero-design/rn';
import { noop } from '../utils/utils';

const dosCollection: DosGuidelineCarouselProps['collection'] = [
  {
    id: 1,
    title: 'Behaviour',
    description: 'The switch label used here is direct and unambiguous.',

    content:
      'Keep the label concise and short. The label should describe what the switch will do when it’s on. Avoid using questions or ambiguous language.',
    example: (
      <Box padding="large">
        <List.Item title="Show leave balances" suffix={<Switch checked />} />
        <List.Item
          style={{
            paddingVertical: theme.space.small,
          }}
          title="Leave Balance"
          suffix={<Typography.Body>90 hours</Typography.Body>}
        />
        <List.Item
          style={{
            paddingVertical: theme.space.small,
          }}
          title="Approved Leave"
          suffix={<Typography.Body>7.6 hours</Typography.Body>}
        />
        <List.Item
          style={{
            paddingVertical: theme.space.small,
          }}
          title="Available Balance"
          suffix={<Typography.Body>82.4 hours</Typography.Body>}
        />
      </Box>
    ),
    showScrollText: true,
  },
];

const dontsCollection: DontsGuidelineCarouselProps['collection'] = [
  {
    id: 1,
    title: 'Behaviour',
    content: `Switches should take immediate effect and should not require user to tap a Save or Submit to apply the new state.`,
    description: `Use a switch to control one or more options from a list. Switches should provide immediate effect to a user’s action without needing to save/submit.`,
    example: (
      <Box margin="medium" flex={1}>
        <Box marginBottom="xlarge" flex={1}>
          <Typography.Body> Goal type: </Typography.Body>
          <List.Item
            style={{
              paddingVertical: theme.space.small,
            }}
            title="Individual"
            suffix={<Switch checked />}
          />
          <List.Item
            style={{
              paddingVertical: theme.space.small,
            }}
            title="Team"
            suffix={<Switch />}
          />
          <List.Item
            style={{
              paddingVertical: theme.space.small,
            }}
            title="Company"
            suffix={<Switch />}
          />
        </Box>
        <Toolbar>
          <Toolbar.Group
            align="right"
            items={[
              {
                label: 'Submit',
              },
            ]}
          />
        </Toolbar>
      </Box>
    ),
    showScrollText: true,
  },
  {
    id: 2,
    title: 'Behaviour',
    content: `Keep the label concise and short. The label should describe what the switch will do when it’s on. Avoid using questions or ambiguous language.`,
    description: `The question label here cause users second guessing whether the switches represent yes or no`,
    example: (
      <Box padding="large" flex={1}>
        <List.Item
          title="Was treatment provided?"
          suffix={<Switch checked />}
        />
      </Box>
    ),
    showScrollText: true,
  },
  {
    id: 3,
    title: 'Behaviour',
    content: `Don't use tags as buttons.`,
    description: `Don't use tags as buttons.`,

    example: (
      <Box padding="large">
        <Box>
          <Box flexDirection="row">
            <Typography.Label>Employee</Typography.Label>
            <Tag content="Edit" intent="info" />
          </Box>
          <Box>
            <Typography.Body>Palm Beesly</Typography.Body>
          </Box>
        </Box>

        <DatePicker
          value={new Date('2022-09-16')}
          label="Issue Date"
          onChange={noop}
          confirmLabel="OK"
        />
        <List.Item title="Never expires" suffix={<Switch checked />} />
        <DatePicker
          value={new Date('2022-09-16')}
          label="Expired Date"
          disabled
          onChange={noop}
          confirmLabel="OK"
        />
      </Box>
    ),
  },
];

const SwitchDosAndDonts = () => {
  return (
    <DosAndDontsCarousel
      dosCollection={dosCollection}
      dontsCollection={dontsCollection}
    />
  );
};

export default SwitchDosAndDonts;
