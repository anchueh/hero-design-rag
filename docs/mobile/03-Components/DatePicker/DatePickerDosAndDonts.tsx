import React from 'react';
import DosAndDontsCarousel from '@site/src/components/Guideline/DosAndDontsCarousel';
import {
  DontsGuidelineCarouselProps,
  DosGuidelineCarouselProps,
} from '@site/src/components/Guideline/GuidelineCarousel';

const dosCollection: DosGuidelineCarouselProps['collection'] = [
  {
    id: 1,
    title: 'Action button',
    content:
      'It is recommended to always include an action button for users to save their selected date values in a picker.',
    description:
      'Use a Save button to save users’ selection and return back to the text input.',
    example: (
      <img src="/img/screenshots/do-action-datepicker.png" alt="do-action" />
    ),
  },
];

const dontsCollection: DontsGuidelineCarouselProps['collection'] = [
  {
    id: 1,
    title: 'Action button',
    content:
      'It is recommended to always include an action button for users to save their selected date values in a picker.',
    description:
      "Using a date picker without a save button leaves users no choice to save a selection they've made.",
    example: (
      <img
        src="/img/screenshots/dont-action-datepicker.png"
        alt="dont-action"
      />
    ),
  },
];

const DatePickerDosAndDonts = () => {
  return (
    <DosAndDontsCarousel
      dosCollection={dosCollection}
      dontsCollection={dontsCollection}
    />
  );
};

export default DatePickerDosAndDonts;
