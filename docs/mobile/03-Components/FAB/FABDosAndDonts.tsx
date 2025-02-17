import React, { useState } from 'react';
import {
  CautionGuidelineCarouselProps,
  DontsGuidelineCarouselProps,
  DosGuidelineCarouselProps,
} from '@site/src/components/Guideline/GuidelineCarousel';
import { Badge, Box, FAB, theme } from '@hero-design/rn';
import DosAndDontsCarousel from '@site/src/components/Guideline/DosAndDontsCarousel';

const dosCollection: DosGuidelineCarouselProps['collection'] = [
  {
    id: 1,
    title: 'Icon',
    content: `Use clear and recognisable icons, such as ‘add’, ‘chat’, ‘close’, ‘copy’`,
    example: (
      <Box
        padding="large"
        style={{ flexDirection: 'row', marginTop: theme.space.xxlarge }}
      >
        <FAB icon="add" />
        <FAB
          icon="send"
          style={{
            marginLeft: theme.space.medium,
          }}
        />
        <FAB
          icon="cancel"
          style={{
            marginLeft: theme.space.medium,
          }}
        />
        <FAB
          icon="file-copy"
          style={{
            marginLeft: theme.space.medium,
          }}
        />
      </Box>
    ),
  },
];

const dontsCollection: DontsGuidelineCarouselProps['collection'] = [
  {
    id: 1,
    title: 'Icon',
    content: `Avoid using confusing or ambiguous icons that require users to guess the intended action, unless the icon is accompanied by a label`,
    example: (
      <Box
        padding="large"
        style={{ flexDirection: 'row', marginTop: theme.space.xxlarge }}
      >
        <FAB icon="bank" />
        <FAB
          icon="bolt"
          style={{
            marginLeft: theme.space.medium,
          }}
        />
        <FAB
          icon="happy-sun"
          style={{
            marginLeft: theme.space.medium,
          }}
        />
        <FAB
          icon="surfing"
          style={{
            marginLeft: theme.space.medium,
          }}
        />
      </Box>
    ),
  },
  {
    id: 2,
    title: 'Quality matters more than quantity',
    content: `Don't place no more than 5 additional menu options above the default FAB`,
    example: function App() {
      const [open, setOpen] = useState(false);
      return (
        <Box padding="large" style={{ marginTop: theme.space.xxlarge }}>
          <FAB.ActionGroup
            items={[
              { icon: 'speaker', title: 'Give shout out' },
              { icon: 'target', title: 'Goal' },
              { icon: 'plane', title: 'Leave request' },
              { icon: 'health-bag', title: 'Safety incident' },
              { icon: 'clock', title: 'Timesheets' },
              { icon: 'bolt', title: 'Performance' },
            ]}
            fabTitle="Toggle FAB"
            onPress={() => {
              setOpen(!open);
            }}
            onBackdropPress={() => setOpen(false)}
            active={open}
          />
        </Box>
      );
    },
  },
  {
    id: 3,
    title: 'Show me your badge',
    content: `It’s recommended not to place a badge or any other element on top of a FAB`,
    example: (
      <Box
        padding="large"
        style={{ flexDirection: 'row', marginTop: theme.space.xxlarge }}
      >
        <Badge.Status>
          <FAB icon="pencil" title="Shout out" />
        </Badge.Status>
      </Box>
    ),
  },
];

const cautionCollection: CautionGuidelineCarouselProps['collection'] = [
  {
    id: 1,
    title: 'Show me your badge',
    content: `Use a badge only in front of a direct messaging feature`,
    example: (
      <Box
        padding="large"
        style={{ flexDirection: 'row', marginTop: theme.space.xxlarge }}
      >
        <Badge.Status>
          <FAB icon="chat-bubble-outlined" />
        </Badge.Status>
      </Box>
    ),
  },
];

const FABDosAndDonts = () => {
  return (
    <DosAndDontsCarousel
      dontsCollection={dontsCollection}
      dosCollection={dosCollection}
      cautionCollection={cautionCollection}
    />
  );
};

export default FABDosAndDonts;
