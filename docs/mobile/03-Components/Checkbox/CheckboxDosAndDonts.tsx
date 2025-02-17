import React from 'react';
import DosAndDontsCarousel from '@site/src/components/Guideline/DosAndDontsCarousel';
import { DontsGuidelineCarouselProps } from '@site/src/components/Guideline/GuidelineCarousel';
import { Box, Checkbox, theme } from '@hero-design/rn';

const dontsCollection: DontsGuidelineCarouselProps['collection'] = [
  {
    id: 1,
    title: 'Multiple Checkbox',
    content: `Avoid using more than 1 large checkbox, considering using the policy checkbox or other components instead`,
    example: (
      <Box padding="large" bgColor="neutralGlobalSurface">
        <Checkbox description="By clicking 'Sign Up' you agree to Employment Hero Group's Terms & Conditions, Important Information and the Privacy Policy" />
        <Checkbox
          style={{ marginTop: theme.space.medium }}
          description="By checking this box, you consent to receiving marketing communications, promotions/offers and content from the Employment Hero Group  by [email or text] about our products, new services or brands which may be of interest to you. You can change your mind at any time."
        />
      </Box>
    ),
  },
];

const CheckboxDosAndDonts = () => {
  return <DosAndDontsCarousel dontsCollection={dontsCollection} />;
};

export default CheckboxDosAndDonts;
