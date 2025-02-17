import React from 'react';
import DosAndDontsCarousel from '@site/src/components/Guideline/DosAndDontsCarousel';
import {
  DontsGuidelineCarouselProps,
  DosGuidelineCarouselProps,
} from '@site/src/components/Guideline/GuidelineCarousel';
import { Box, Typography, Radio, theme } from '@hero-design/rn';

const dosCollection: DosGuidelineCarouselProps['collection'] = [];

const dontsCollection: DontsGuidelineCarouselProps['collection'] = [
  {
    id: 1,
    title: 'Too Many Radio Buttons',
    content:
      'Avoid having too many radio buttons on a screen, as it can cause confusion and overwhelming experience for users.',
    example: (
      <Box padding="medium">
        <Typography.Title level="h4">Feed to alignment</Typography.Title>
        <Typography.Body
          intent="subdued"
          variant="small"
          style={{ marginBottom: theme.space.small }}
        >
          This will affect the progress of the alignment
        </Typography.Body>
        <Radio.Group
          options={[
            { text: 'Yes', value: 'yes' },
            { text: 'No', value: 'no' },
          ]}
          value="yes"
          onPress={() => {
            console.log('onPress');
          }}
          style={{ marginBottom: theme.space.small }}
        />
        <Typography.Title
          level="h4"
          style={{ marginBottom: theme.space.small }}
        >
          Goal type
        </Typography.Title>
        <Radio.Group
          options={[
            { text: 'Invidiual', value: 'invidiual' },
            { text: 'Team', value: 'team' },
            { text: 'Company', value: 'company' },
          ]}
          value="team"
          onPress={() => {
            console.log('onPress');
          }}
        />
      </Box>
    ),
  },

  {
    id: 2,
    title: 'Nesting Radio Buttons',
    content:
      'Avoid nesting radio buttons with other radio buttons or checkboxes components. Keep all options at the same level to avoid confusions.',
    example: (
      <Box padding="medium">
        <Typography.Title level="h4">Feed to alignment</Typography.Title>
        <Typography.Body
          intent="subdued"
          variant="small"
          style={{ marginBottom: theme.space.small }}
        >
          This will affect the progress of the alignment
        </Typography.Body>
        <Radio.Group
          options={[
            { text: 'Yes', value: 'yes' },
            { text: 'No', value: 'no' },
          ]}
          value="yes"
          onPress={() => {
            console.log('onPress');
          }}
          style={{ marginBottom: theme.space.small }}
        />

        <Radio.Group
          options={[
            { text: 'Invidiual', value: 'invidiual' },
            { text: 'Team', value: 'team' },
            { text: 'Company', value: 'company' },
          ]}
          value="team"
          onPress={() => {
            console.log('onPress');
          }}
          style={{ marginLeft: theme.space.medium }}
        />
      </Box>
    ),
  },
];

const SectionHeadingDosAndDonts = () => {
  return (
    <DosAndDontsCarousel
      dosCollection={dosCollection}
      dontsCollection={dontsCollection}
    />
  );
};

export default SectionHeadingDosAndDonts;
