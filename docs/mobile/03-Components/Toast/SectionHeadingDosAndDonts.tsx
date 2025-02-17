import React from 'react';
import DosAndDontsCarousel from '@site/src/components/Guideline/DosAndDontsCarousel';
import {
  CautionGuidelineCarouselProps,
  DontsGuidelineCarouselProps,
  DosGuidelineCarouselProps,
} from '@site/src/components/Guideline/GuidelineCarousel';

const dosCollection: DosGuidelineCarouselProps['collection'] = [
  {
    id: 1,
    title: 'Positioning',
    content:
      'Do place the Toast at the bottom of the screen to avoid blocking any Floating action button (FAB)',
    example: <img src="/img/screenshots/toast/do-1.png" alt="Positioning" />,
  },
  {
    id: 2,
    title: 'Positioning',
    content:
      'Place the Toast above any Call-to-Action (CTA) or navigation elements.',
    example: <img src="/img/screenshots/toast/do-2.png" alt="Positioning" />,
  },
];

const dontsCollection: DontsGuidelineCarouselProps['collection'] = [
  {
    id: 1,
    title: 'Positioning',
    content: 'Don’t overlap a toast with a floating action button (FAB)',
    example: <img src="/img/screenshots/toast/dont-1.png" alt="Positioning" />,
  },
  {
    id: 2,
    title: 'Positioning',
    content: 'Don’t overlap a toast with a Call-to-Action (CTA) ',
    example: <img src="/img/screenshots/toast/dont-2.png" alt="Positioning" />,
  },
  {
    id: 3,
    title: 'Multiple Toasts',
    content:
      "Don't display multiple Toasts at the same time. If multiple messages are necessary, display them one at a time.",
    example: (
      <img src="/img/screenshots/toast/dont-3.png" alt="Multiple Toasts" />
    ),
  },
  {
    id: 4,
    title: 'Customizing Style',
    content:
      "Don't change the shape, colour, behaviour or any other visual element of the Toast.",
    example: (
      <img src="/img/screenshots/toast/dont-4.png" alt="Customizing Style" />
    ),
  },
];

const cautionCollection: CautionGuidelineCarouselProps['collection'] = [
  {
    id: 1,
    title: 'Toast and Alert',
    content:
      'It is acceptable to have both toasts and alerts on the same screen as long as they serve distinct purposes and are used appropriately. However, use this pattern sparingly, as it creates visual clutter, making it difficult for users to focus on the main content.',
    example: (
      <img src="/img/screenshots/toast/caution.png" alt="Toast and Alert" />
    ),
  },
];

const SectionHeadingDosAndDonts = () => {
  return (
    <DosAndDontsCarousel
      dosCollection={dosCollection}
      dontsCollection={dontsCollection}
      cautionCollection={cautionCollection}
    />
  );
};

export default SectionHeadingDosAndDonts;
