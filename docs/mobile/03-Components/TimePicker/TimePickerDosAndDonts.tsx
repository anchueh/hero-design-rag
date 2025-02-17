import React from 'react';
import DosAndDontsCarousel from '@site/src/components/Guideline/DosAndDontsCarousel';
import {
  DontsGuidelineCarouselProps,
  DosGuidelineCarouselProps,
} from '@site/src/components/Guideline/GuidelineCarousel';

const dosCollection: DosGuidelineCarouselProps['collection'] = [
  {
    id: 1,
    title: 'Granularity',
    content:
      'Consider providing less granularity when specifying seconds and minutes in a date picker.',
    description:
      'Do optionally increase the seconds interval as long as it divides evenly into 60.',
    example: (
      <img
        src="/img/screenshots/do-granularity-timepicker.png"
        alt="do-granularity"
      />
    ),
  },
];

const dontsCollection: DontsGuidelineCarouselProps['collection'] = [
  {
    id: 1,
    title: 'Granularity',
    content:
      'Consider providing less granularity when specifying seconds and minutes in a date picker.',
    description:
      'Avoid using very small intervals for seconds unless it is absolutely necessary.',
    example: (
      <img
        src="/img/screenshots/dont-granularity-timepicker.png"
        alt="do-granularity"
      />
    ),
  },
];

const TimePickerDosAndDonts = () => {
  return (
    <DosAndDontsCarousel
      dosCollection={dosCollection}
      dontsCollection={dontsCollection}
    />
  );
};

export default TimePickerDosAndDonts;
