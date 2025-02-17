import React from 'react';
import { Box, Image } from '@hero-design/rn';
import DosAndDontsCarousel from '@site/src/components/Guideline/DosAndDontsCarousel';
import {
  DontsGuidelineCarouselProps,
  DosGuidelineCarouselProps,
} from '@site/src/components/Guideline/GuidelineCarousel';

const dosCollection: DosGuidelineCarouselProps['collection'] = [
  {
    id: 1,
    title: 'Consistency',
    content:
      'Provide clear visual feedback when a list item is swiped, always use a background colour, icon and text label to indicate the swipeable list is activated.',
    example: (
      <Box>
        <Image
          style={{
            marginTop: 20,
            width: '100%',
            height: 74,
            backgroundColor: '#F5F5F5',
          }}
          source={{ uri: '/img/screenshots/swipeable-do-example-1-1.png' }}
        />
        <Image
          style={{
            marginTop: 20,
            width: '100%',
            height: 74,
            backgroundColor: '#F5F5F5',
          }}
          source={{
            uri: '/img/screenshots/swipeable-do-example-1-2.png',
          }}
        />
      </Box>
    ),
  },
  {
    id: 2,
    title: 'Call to action',
    content:
      'Use swipeable lists in appropriate contexts, and keep the behaviour consistent within an application, so it doesn’t increase the difficulties for users to learn multiple meanings or use cases for the same gesture. For example, if swipeable lists are applied on the Timesheet screen’s manager dashboard, then it will also needs to be applied on Leave, Expenses screens’ manager dashboard.',
  },
  {
    id: 3,
    title: 'Positioning',
    content:
      'Support easy undo actions if users accidentally swipe an item, always use a snackbar to allow users to reverse any actions.',
  },
];

const dontsCollection: DontsGuidelineCarouselProps['collection'] = [
  {
    id: 1,
    title: 'Colors',
    content: `Limit destructive actions for any swipeable list, such as delete, decline`,
  },
  {
    id: 2,
    title: 'Relevance',
    content: `Don’t overuse swipeable lists, make sure it won’t interfere with other functions or gestures on a screen`,
  },
  {
    id: 3,
    title: 'Conciseness',
    content: `Don’t use swipeable list for non-essential or redundant actions, as this can add clutter and complexity to the app`,
  },
];

const SwipeableDosAndDonts = () => {
  return (
    <DosAndDontsCarousel
      dosCollection={dosCollection}
      dontsCollection={dontsCollection}
    />
  );
};

export default SwipeableDosAndDonts;
