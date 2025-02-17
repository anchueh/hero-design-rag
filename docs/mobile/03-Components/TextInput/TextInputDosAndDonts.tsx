import React from 'react';
import DosAndDontsCarousel from '@site/src/components/Guideline/DosAndDontsCarousel';

import {
  CautionGuidelineCarouselProps,
  DontsGuidelineCarouselProps,
  DosGuidelineCarouselProps,
} from '@site/src/components/Guideline/GuidelineCarousel';
import {
  Box,
  Divider,
  TextInput,
  Typography,
  Image,
  Select,
} from '@hero-design/rn';
import { noop } from '../utils/utils';

const dosCollection: DosGuidelineCarouselProps['collection'] = [
  {
    id: 1,
    title: 'Behaviour',
    content: `When an error occurs, the error message will overwrite the help text. The help text will reappear once the error has been resolved.`,
    description: `Swap help text with the error message when an error occurs`,
    example: (
      <Box padding="large">
        <TextInput
          label="Description"
          required
          helpText="This is a help text"
        />
        <TextInput
          label="Description"
          required
          helpText="This is a help text"
          error="This is an error message"
        />
      </Box>
    ),
  },
  {
    id: 2,
    title: 'Behaviour',
    content: `Keep error message within one line, if it’s lengthy, consider wrapping it to a second line`,
    description: `Wrap the error message to a second line if it’s necessary`,
    example: (
      <Box padding="large">
        <TextInput
          label="Description"
          variant="textarea"
          required
          helpText="This is a help text"
          error="this field must not exceed character limit. just want to make the error message longer"
          value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper enim augue, quis tempor nisi vestibulum aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper enim augue, quis tempor nisi vestibulum aliquam. Lorem ipsum dolor so"
          maxLength={255}
        />
      </Box>
    ),
  },
];

const dontsCollection: DontsGuidelineCarouselProps['collection'] = [
  {
    id: 1,
    title: 'Behaviour',
    content: `When an error occurs, the error message will overwrite the help text. The help text will reappear once the error has been resolved.`,
    description: `In case of an error, do not overlap the error message and help text `,
    example: (
      <Box padding="large">
        <TextInput
          label="Description"
          required
          helpText="This is a help text"
          error="This is an error message"
        />
        <Typography.Caption>This is a help text</Typography.Caption>
      </Box>
    ),
  },
  {
    id: 2,
    title: 'Behaviour',
    content: `Keep error message within one line, if it’s lengthy, consider wrapping it to a second line`,
    description: `Avoid stacking the error message with the word counter`,
    example: (
      <Box padding="large">
        <TextInput
          label="Description"
          variant="textarea"
          required
          helpText="This is a help text"
          error="this field must not exceed character limit"
          value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper enim augue, quis tempor nisi vestibulum aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper enim augue, quis tempor nisi vestibulum aliquam. Lorem ipsum dolor so"
        />
        <Box alignItems="flex-end">
          <Typography.Caption intent="danger">256/255</Typography.Caption>
        </Box>
      </Box>
    ),
  },
];

const cautionCollection: CautionGuidelineCarouselProps['collection'] = [
  {
    id: 1,
    title: 'Behaviour',
    content: `Input with a logo or avatar is rarely used, use it sparingly`,
    description: `Input with a logo or avatar is rarely used, use it sparingly`,
    example: (
      <Box>
        <Divider />
        <Box
          style={{
            height: 44,
          }}
          justifyContent="center"
          alignContent="center"
        >
          <Typography.Title
            level="h5"
            style={{
              textAlign: 'center',
              textAlignVertical: 'center',
            }}
          >
            New Message
          </Typography.Title>
        </Box>
        <Divider />
        <Box padding="large">
          <TextInput
            label="Company"
            required
            value="Apple"
            prefix={
              <Image
                style={{
                  width: 32,
                  height: 32,
                }}
                source={{
                  uri: '/img/screenshots/apple-icon.png',
                }}
              />
            }
          />
          <Select
            label="Role"
            value="Software Engineer"
            required
            onConfirm={noop}
            options={[
              {
                text: 'Software Engineer',
                value: 'Software Engineer',
              },
            ]}
          />
          <Select
            label="Topic"
            value="Probation Periods"
            required
            onConfirm={noop}
            options={[
              {
                text: 'Probation Periods',
                value: 'Probation Periods',
              },
            ]}
          />
        </Box>
      </Box>
    ),
  },
];
const TextInputDosAndDonts = () => {
  return (
    <DosAndDontsCarousel
      dosCollection={dosCollection}
      dontsCollection={dontsCollection}
      cautionCollection={cautionCollection}
    />
  );
};

export default TextInputDosAndDonts;
