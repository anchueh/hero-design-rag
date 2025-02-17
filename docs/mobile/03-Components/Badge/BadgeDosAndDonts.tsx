import React from 'react';
import DosAndDontsCarousel from '@site/src/components/Guideline/DosAndDontsCarousel';
import {
  DontsGuidelineCarouselProps,
  DosGuidelineCarouselProps,
} from '@site/src/components/Guideline/GuidelineCarousel';
import { Badge, Box, Icon, Typography, theme } from '@hero-design/rn';

const doCollection: DosGuidelineCarouselProps['collection'] = [
  {
    id: 1,
    title: 'Maximum characters',
    content: `Use maximum 4 characters in a number badge including a + to indicate more.`,
    example: (
      <Box
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          gap: theme.space.large,
          minHeight: 300,
        }}
      >
        <Badge
          content={9}
          // @ts-expect-error: Using web css value to render on web
          style={{ width: 'fit-content' }}
        />
        <Badge
          content={99}
          // @ts-expect-error: Using web css value to render on web
          style={{ width: 'fit-content' }}
        />
        <Badge
          content={100}
          // @ts-expect-error: Using web css value to render on web
          style={{ width: 'fit-content' }}
        />
        <Badge
          max={999}
          content={1000}
          // @ts-expect-error: Using web css value to render on web
          style={{ width: 'fit-content' }}
        />
      </Box>
    ),
  },
  {
    id: 2,
    title: 'Color',
    content: 'Use pillar primary colour for badges.',
    example: (
      <Box padding="large" bgColor="neutralGlobalSurface">
        <Box
          marginBottom="medium"
          borderRadius="large"
          bgColor="highlightedSurface"
          style={{ width: '100%', height: 120 }}
        />

        <Box
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: theme.space.medium,
            marginBottom: theme.space.small,
          }}
        >
          <Typography.Caption>Bidding Employees</Typography.Caption>
          <Badge
            content={5}
            // @ts-expect-error: Using web css value to render on web
            style={{ width: 'fit-content' }}
          />
        </Box>

        <Box flexDirection="row" justifyContent="space-between">
          <Box
            borderRadius="large"
            bgColor="highlightedSurface"
            style={{ width: '47%', height: 120 }}
          />
          <Box
            borderRadius="large"
            bgColor="decorativePrimary"
            style={{ width: '47%', height: 120 }}
          />
        </Box>
      </Box>
    ),
  },
];

const dontsCollection: DontsGuidelineCarouselProps['collection'] = [
  {
    id: 1,
    title: 'Exceed characters',
    content: `Don’t use more than 4 characters in a number badge.`,
    example: (
      <Box
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          gap: theme.space.large,
          minHeight: 300,
        }}
      >
        <Badge
          max={9999}
          content={10000}
          // @ts-expect-error: Using web css value to render on web
          style={{ width: 'fit-content' }}
        />
      </Box>
    ),
  },
  {
    id: 2,
    title: 'Conflicting colors',
    content: 'Don’t use two conflicting colours.',
    example: (
      <Box padding="large" bgColor="neutralGlobalSurface">
        <Box
          marginBottom="medium"
          borderRadius="large"
          bgColor="highlightedSurface"
          style={{ width: '100%', height: 120 }}
        />
        <Box flexDirection="row" justifyContent="space-between">
          <Box
            borderRadius="large"
            bgColor="highlightedSurface"
            style={{ width: '47%', height: 120 }}
          />
          <Box
            borderRadius="large"
            bgColor="decorativePrimary"
            style={{ width: '47%', height: 120, padding: theme.space.medium }}
          >
            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: theme.space.medium,
                marginBottom: theme.space.small,
              }}
            >
              <Typography.Caption>Bidding Employees</Typography.Caption>
              <Badge.Status style={{ marginEnd: theme.space.small }}>
                <Icon
                  icon="bell"
                  size="small"
                  style={{ color: theme.colors.warning }}
                />
              </Badge.Status>
            </Box>
          </Box>
        </Box>
      </Box>
    ),
  },
  {
    id: 3,
    title: `Position`,
    content: `Badgets have fixed positions, don’t change the position of a badge.`,
    example: (
      <Box padding="large" bgColor="neutralGlobalSurface">
        <Box
          marginBottom="medium"
          borderRadius="large"
          bgColor="highlightedSurface"
          style={{ width: '100%', height: 120 }}
        />
        <Box
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: theme.space.medium,
            marginBottom: theme.space.small,
          }}
        >
          <Typography.Caption>Bidding Employees</Typography.Caption>
          <Badge
            content={5}
            // @ts-expect-error: Using web css value to render on web
            style={{ width: 'fit-content' }}
          />

          <Badge.Status>
            <Typography.Caption>Bidding Employees</Typography.Caption>{' '}
          </Badge.Status>
        </Box>

        <Box flexDirection="row" justifyContent="space-between">
          <Box
            borderRadius="large"
            bgColor="highlightedSurface"
            style={{ width: '47%', height: 120 }}
          />
          <Box
            borderRadius="large"
            bgColor="decorativePrimary"
            style={{ width: '47%', height: 120 }}
          />
        </Box>
      </Box>
    ),
  },
];

export default function BottomSheetDosAndDonts() {
  return (
    <DosAndDontsCarousel
      dosCollection={doCollection}
      dontsCollection={dontsCollection}
    />
  );
}
