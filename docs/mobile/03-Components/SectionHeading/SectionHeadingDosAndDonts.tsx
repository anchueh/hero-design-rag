import React from 'react';
import DosAndDontsCarousel from '@site/src/components/Guideline/DosAndDontsCarousel';
import {
  DontsGuidelineCarouselProps,
  DosGuidelineCarouselProps,
} from '@site/src/components/Guideline/GuidelineCarousel';
import { Box, SectionHeading, Typography, Divider } from '@hero-design/rn';
import { FlatList } from 'react-native';

const listData = [
  { id: 'l1', title: 'Annual leave', balance: '0.00 hours' },
  { id: 'l2', title: 'Sick leave', balance: '5 days' },
  { id: 'l3', title: 'Study leave', balance: '0.00 hours' },
];

const dosCollection: DosGuidelineCarouselProps['collection'] = [
  {
    id: 1,
    title: 'Descriptive',
    content:
      'Section heading needs to be accurately and descriptively describing the grouping of content below.',
    example: (
      <Box padding="medium">
        <SectionHeading text="Leave balance" style={{ marginBottom: 0 }} />
        <FlatList
          data={listData}
          renderItem={({ item }) => (
            <Box
              padding="medium"
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Typography.Body>{item.title}</Typography.Body>
              <Typography.Body variant="regular-bold">
                {item.balance}
              </Typography.Body>
            </Box>
          )}
          keyExtractor={(item) => item.id}
        />
      </Box>
    ),
  },
];

const dontsCollection: DontsGuidelineCarouselProps['collection'] = [
  {
    id: 1,
    title: 'Descriptive',
    content:
      'Avoid using more than one line of section heading to describe the grouping, recommended to use clear and concise language.',
    example: (
      <Box padding="medium">
        <SectionHeading
          text="All your remaining leave balances
at 7 Jun 2023"
          style={{ marginBottom: 0 }}
        />
        <FlatList
          data={listData}
          renderItem={({ item }) => (
            <Box
              padding="medium"
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Typography.Body>{item.title}</Typography.Body>
              <Typography.Body variant="regular-bold">
                {item.balance}
              </Typography.Body>
            </Box>
          )}
          keyExtractor={(item) => item.id}
        />
      </Box>
    ),
  },

  {
    id: 2,
    title: 'Descriptive',
    content:
      'Avoid using section heading small, only use it within a drawer component to highlight transactions.',
    example: (
      <Box padding="medium">
        <Box padding="medium">
          <Typography.Body variant="regular-bold">
            Pay period ending: 01 Aug 2023
          </Typography.Body>
        </Box>
        <SectionHeading
          size="small"
          text="Gross pay"
          rightChildren={<Typography.Caption>$1,000.00</Typography.Caption>}
          style={{ marginBottom: 0 }}
        />
        <Box
          padding="medium"
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Typography.Caption>Net pay</Typography.Caption>
          <Typography.Caption>$900</Typography.Caption>
        </Box>
        <Divider />
        <Box padding="medium">
          <Typography.Body variant="regular-bold">
            Pay period ending: 01 Jul 2023
          </Typography.Body>
        </Box>
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
