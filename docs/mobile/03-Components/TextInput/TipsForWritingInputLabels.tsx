import React from 'react';
import DosAndDontsCarousel from '@site/src/components/Guideline/DosAndDontsCarousel';

import {
  DontsGuidelineCarouselProps,
  DosGuidelineCarouselProps,
} from '@site/src/components/Guideline/GuidelineCarousel';
import { Box, TextInput } from '@hero-design/rn';

const dosCollection: DosGuidelineCarouselProps['collection'] = [
  {
    id: 1,
    title: 'Tips for writing input labels',
    content: `To indicate a field is mandatory, use * on the leading side of a label`,
    description: `Always use * to indicate an required field`,
    example: (
      <Box padding="large">
        <TextInput
          label="Billing address"
          required
          value="U5/89 Lawson drive"
        />
      </Box>
    ),
  },
];

const dontsCollection: DontsGuidelineCarouselProps['collection'] = [
  {
    id: 1,
    title: 'Tips for writing input labels',
    content: `To indicate a field is mandatory, use * on the leading side of a label`,
    description: `Do not use (optional) after a text label`,
    example: (
      <Box padding="large">
        <TextInput
          label="Billing address (optional)"
          required
          value="U5/89 Lawson drive"
        />
      </Box>
    ),
  },
  {
    id: 2,
    title: 'Tips for writing input labels',
    content: `Use short and clear text label`,
    description: `Don’t truncate label text`,
    example: (
      <Box padding="large">
        <TextInput label="Best phone number to reach..." required />
      </Box>
    ),
  },
  {
    id: 3,
    title: 'Tips for writing input labels',
    content: `Use short and clear text label`,
    description: `Label text shouldn’t take up mutiple lines`,
    example: (
      <Box padding="large">
        <TextInput
          label="Best phone number to reach you on"
          required
          value="U5/89 Lawson drive"
        />
      </Box>
    ),
  },
];

const TipsForWritingInputLabels = () => {
  return (
    <DosAndDontsCarousel
      dosCollection={dosCollection}
      dontsCollection={dontsCollection}
    />
  );
};

export default TipsForWritingInputLabels;
