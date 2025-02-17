import React from 'react';
import DosAndDontsCarousel from '@site/src/components/Guideline/DosAndDontsCarousel';
import { DosGuidelineCarouselProps } from '@site/src/components/Guideline/GuidelineCarousel';
import { Avatar, Box, Card, Divider, Typography, theme } from '@hero-design/rn';
import { View } from 'react-native';

const dosCollection: DosGuidelineCarouselProps['collection'] = [
  {
    id: 1,
    title: 'Right components for right purposes',
    content:
      'Cards for specific purposes, such as goals, shifts, recognition, are best used solely for their intended purpose and not for other features or purposes',
    example: (
      <Box
        padding="medium"
        // @ts-expect-error: Using web css value to render on web
        style={{
          height: 'fit-content',
          backgroundColor: theme.colors.neutralGlobalSurface,
        }}
      >
        <Card.Data
          intent="warning"
          style={{
            backgroundColor: theme.colors.defaultGlobalSurface,
          }}
        >
          <View style={{ padding: theme.space.medium }}>
            <Typography.Caption intent="subdued">
              Update Key Results
            </Typography.Caption>
            <Typography.Body style={{ marginTop: theme.space.small }}>
              CX Global Ready
            </Typography.Body>
            <Typography.Caption>From 20% to 25%</Typography.Caption>
            <Typography.Caption
              intent="subdued"
              style={{ marginTop: theme.space.small }}
            >
              Making progress
            </Typography.Caption>
          </View>
        </Card.Data>
        <Card
          intent="warning"
          style={{
            marginTop: theme.space.medium,
          }}
        >
          <View style={{ padding: theme.space.medium }}>
            <Typography.Caption intent="body">
              Update Key Results
            </Typography.Caption>
            <Typography.Body
              intent="body"
              style={{ marginTop: theme.space.small }}
            >
              CX Global Ready
            </Typography.Body>
            <Typography.Caption intent="body">
              From 20% to 25%
            </Typography.Caption>
          </View>
        </Card>

        <Typography.Body
          variant="small"
          intent="body"
          style={{ marginTop: theme.space.medium, textAlign: 'center' }}
        >
          Cards for Goals feature
        </Typography.Body>
      </Box>
    ),
    showScrollText: true,
  },
  {
    id: 2,
    title: 'Look and Feel',
    content:
      'Use dividers to visually distinguish between individual cards when presenting a set of cards.',
    example: (
      <Box>
        <Card style={{ padding: theme.space.medium }}>
          <Box flexDirection="row" alignItems="center">
            <Avatar title="JK" size="large" />
            <Typography.Body
              variant="small"
              style={{ marginLeft: theme.space.medium }}
            >
              Jennie Kim
            </Typography.Body>
          </Box>
          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            marginTop="small"
          >
            <Typography.Body variant="small" intent="subdued">
              Date
            </Typography.Body>
            <Typography.Body variant="small">Sat, 19 Feb 2022</Typography.Body>
          </Box>
          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            marginTop="xxsmall"
          >
            <Typography.Body variant="small" intent="subdued">
              Total hours
            </Typography.Body>
            <Typography.Body variant="small">5 hours</Typography.Body>
          </Box>
          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            marginTop="xxsmall"
          >
            <Typography.Body variant="small" intent="subdued">
              Work hours
            </Typography.Body>
            <Typography.Body variant="small">
              08:16 AM - 01:15 PM
            </Typography.Body>
          </Box>
          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            marginTop="xxsmall"
          >
            <Typography.Body variant="small" intent="subdued">
              Work type
            </Typography.Body>
            <Typography.Body variant="small">Change of Roster</Typography.Body>
          </Box>
          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            marginTop="xxsmall"
          >
            <Typography.Body variant="small" intent="subdued">
              Cost centre
            </Typography.Body>
            <Typography.Body variant="small">Woodsy</Typography.Body>
          </Box>
        </Card>
        <Divider style={{ backgroundColor: theme.colors.darkGlobalSurface }} />
        <Card style={{ padding: theme.space.medium }}>
          <Box flexDirection="row" alignItems="center">
            <Avatar title="JK" size="large" />
            <Typography.Body
              variant="small"
              style={{ marginLeft: theme.space.medium }}
            >
              Jennie Kim
            </Typography.Body>
          </Box>
          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            marginTop="small"
          >
            <Typography.Body variant="small" intent="subdued">
              Date
            </Typography.Body>
            <Typography.Body variant="small">Sat, 19 Feb 2022</Typography.Body>
          </Box>
          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography.Body variant="small" intent="subdued">
              Total hours
            </Typography.Body>
            <Typography.Body variant="small">5 hours</Typography.Body>
          </Box>
          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography.Body variant="small" intent="subdued">
              Work hours
            </Typography.Body>
            <Typography.Body variant="small">
              08:16 AM - 01:15 PM
            </Typography.Body>
          </Box>
          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography.Body variant="small" intent="subdued">
              Work type
            </Typography.Body>
            <Typography.Body variant="small">Change of Roster</Typography.Body>
          </Box>
          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography.Body variant="small" intent="subdued">
              Cost centre
            </Typography.Body>
            <Typography.Body variant="small">Woodsy</Typography.Body>
          </Box>
        </Card>
      </Box>
    ),
    showScrollText: true,
  },
  {
    id: 3,
    title: 'Limitless',
    content:
      'There’s no limit of how much information you can present on a card',
    example: (
      <Box>
        <Card style={{ padding: theme.space.medium }}>
          <Box flexDirection="row" alignItems="center">
            <Avatar title="JK" size="large" />
            <Typography.Body
              variant="small"
              style={{ marginLeft: theme.space.medium }}
            >
              Jennie Kim
            </Typography.Body>
          </Box>
          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            marginTop="small"
          >
            <Typography.Body variant="small" intent="subdued">
              Status
            </Typography.Body>
            <Typography.Body variant="small">Submitted</Typography.Body>
          </Box>
          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            marginTop="xxsmall"
          >
            <Typography.Body variant="small" intent="subdued">
              Purchase date
            </Typography.Body>
            <Typography.Body variant="small">Thu, 10 Mar 2022</Typography.Body>
          </Box>
          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            marginTop="xxsmall"
          >
            <Typography.Body variant="small" intent="subdued">
              Claim date
            </Typography.Body>
            <Typography.Body variant="small">Fri, 11 Mar 2022</Typography.Body>
          </Box>
          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            marginTop="xxsmall"
          >
            <Typography.Body variant="small" intent="subdued">
              Category
            </Typography.Body>
            <Typography.Body variant="small">Purchased tools</Typography.Body>
          </Box>
          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            marginTop="xxsmall"
          >
            <Typography.Body variant="small" intent="subdued">
              Supplier
            </Typography.Body>
            <Typography.Body variant="small">Bunnings</Typography.Body>
          </Box>
          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            marginTop="xxsmall"
          >
            <Typography.Body variant="small" intent="subdued">
              Includes tax of
            </Typography.Body>
            <Typography.Body variant="small">$181.82</Typography.Body>
          </Box>
          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            marginTop="xxsmall"
          >
            <Typography.Body variant="small" intent="subdued">
              Amount paid
            </Typography.Body>
            <Typography.Body variant="small">$2,000.00</Typography.Body>
          </Box>
        </Card>
      </Box>
    ),
    showScrollText: true,
  },
];

const CardDosAndDonts = () => {
  return <DosAndDontsCarousel dosCollection={dosCollection} />;
};

export default CardDosAndDonts;
