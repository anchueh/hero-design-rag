import React from 'react';
import DosAndDontsCarousel from '@site/src/components/Guideline/DosAndDontsCarousel';

import {
  DontsGuidelineCarouselProps,
  DosGuidelineCarouselProps,
} from '@site/src/components/Guideline/GuidelineCarousel';
import {
  Avatar,
  Box,
  Card,
  Divider,
  Icon,
  List,
  SectionHeading,
  Tag,
  TextInput,
  Typography,
  theme,
} from '@hero-design/rn';
import { TouchableOpacity } from 'react-native';

const dosCollection: DosGuidelineCarouselProps['collection'] = [];

const dontsCollection: DontsGuidelineCarouselProps['collection'] = [
  {
    id: 1,
    title: 'Behaviour',
    content: `Don't use tags as buttons`,
    description: `Don't use tags as buttons`,
    example: (
      <Box>
        <Divider />
        <Box
          style={{
            height: 44,
          }}
          justifyContent="center"
          alignContent="center"
        >
          <Typography.Title
            level="h5"
            style={{
              textAlign: 'center',
              textAlignVertical: 'center',
            }}
          >
            Leave Request
          </Typography.Title>
        </Box>
        <Divider />
        <Box
          padding="medium"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Box>
            <Typography.Label>Employee</Typography.Label>
            <Typography.Body>Palm Beesly</Typography.Body>
          </Box>
          <Box>
            <TouchableOpacity
              onPress={() => {
                alert('Edit');
              }}
            >
              <Tag content="Edit" intent="info" />
            </TouchableOpacity>
          </Box>
        </Box>
        <Divider />
        <Box padding="medium">
          <TextInput label="Leave Category" value="Annual Leave" />
        </Box>
      </Box>
    ),
  },
  {
    id: 2,
    title: 'Behaviour',
    content: `Don’t embed any links or have interactive states`,
    description: `Don’t embed any links or have interactive states`,
    example: (
      <Box flex={1} backgroundColor="neutralGlobalSurface">
        <Card
          style={{
            margin: theme.space.medium,
            padding: theme.space.medium,
            backgroundColor: theme.colors.defaultGlobalSurface,
          }}
        >
          <Box flexDirection="row">
            <Box marginRight="medium" marginBottom="medium">
              <Avatar size="large" title="PB" />
            </Box>
            <Box flexGrow={2}>
              <Typography.Caption> Apple </Typography.Caption>
              <Typography.Body variant="regular-bold">
                System Engineer
              </Typography.Body>
            </Box>
            <Box>
              <Typography.Caption>5d</Typography.Caption>
            </Box>
          </Box>
          <Box>Full-time * Narre Warren, VIC</Box>
          <Box
            marginVertical="medium"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Tag
              content={
                <Typography.Caption
                  style={{
                    textDecorationLine: 'underline',
                  }}
                >
                  ARCHIVED
                </Typography.Caption>
              }
              intent="archived"
            />
            <Icon icon="bookmark-outlined" />
          </Box>
        </Card>
      </Box>
    ),
  },
  {
    id: 3,
    title: 'Behaviour',
    content: `Don’t use alternative tag options other than the available tag types Hero Design Mobile. Only create a new tag if there aren’t any existing options to communicate the status you need`,
    description: `Don’t use alternative tag options other than the available tag types Hero Design Mobile. Only create a new tag if there aren’t any existing options to communicate the status you need`,
    example: (
      <Box flex={1} backgroundColor="neutralGlobalSurface">
        <Card
          style={{
            margin: theme.space.medium,
            padding: theme.space.medium,
            backgroundColor: theme.colors.defaultGlobalSurface,
          }}
        >
          <Box flexDirection="row">
            <Box marginRight="medium" marginBottom="medium">
              <Avatar size="large" title="HD" />
            </Box>
            <Box flexGrow={2}>
              <Typography.Caption> Vivid Propery Services </Typography.Caption>
              <Typography.Body variant="regular-bold">
                UI/UX Designer
              </Typography.Body>
            </Box>
            <Box>
              <Typography.Caption>5d</Typography.Caption>
            </Box>
          </Box>
          <Box>Full-time * Remote</Box>
          <Box
            marginVertical="medium"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Tag content="New" intent="info" />
            <Icon icon="bookmark-outlined" />
          </Box>
        </Card>
      </Box>
    ),
  },
  {
    id: 4,
    title: 'Behaviour',
    content: `Don’t randomly positiong tags, as they need to clearly identify the object or action that they’re informing or labelling`,
    description: `Don’t randomly positiong tags, as they need to clearly identify the object or action that they’re informing or labelling`,
    example: (
      <Box flex={1} padding="medium" backgroundColor="neutralGlobalSurface">
        <Card
          style={{
            backgroundColor: theme.colors.defaultGlobalSurface,
            overflow: 'hidden',
          }}
        >
          <SectionHeading
            text="Wed, 15 Jub"
            style={{ marginTop: theme.space.small }}
          />
          <Box>
            <List.Item
              title={
                <Typography.Body variant="regular-bold">
                  11:25 AM - 12:25 PM
                </Typography.Body>
              }
              suffix="arrow-right"
              style={{ paddingVertical: theme.space.small }}
            />
            <List.Item
              title="Total hours"
              suffix={<Typography.Body variant="small">1 hour</Typography.Body>}
              style={{ paddingVertical: theme.space.small }}
            />
            <Box paddingLeft="medium" flexDirection="row">
              <Tag content="Submitted" intent="info" />
            </Box>
            <List.Item
              title="Location"
              suffix={<Typography.Body>Ariel EH Demo 2022</Typography.Body>}
              style={{ paddingVertical: theme.space.small }}
            />
          </Box>
        </Card>
      </Box>
    ),
  },
  {
    id: 5,
    title: 'Behaviour',
    content: `Don’t use long and unscannable text for label tags`,
    description: `Don’t use long and unscannable text for label tags`,
    example: (
      <Box flex={1} padding="medium" backgroundColor="neutralGlobalSurface">
        <Card.Data intent="info">
          <Box flex={1}>
            <List.Item
              title={
                <Typography.Body variant="regular-bold">
                  11:25 AM - 12:25 PM
                </Typography.Body>
              }
              suffix="arrow-right"
              style={{ paddingVertical: theme.space.small }}
            />
            <Box paddingLeft="medium" backgroundColor="defaultGlobalSurface">
              <Typography.Body variant="small">Webinar Demo</Typography.Body>
              <Typography.Body variant="small">To: Abby Price</Typography.Body>
              <Box flexDirection="row">
                <Tag
                  content="PROPOSED SHIFT SWAP (AWAITING APPROVAL)"
                  intent="info"
                />
              </Box>
            </Box>
            <List.Item
              title="Location"
              suffix={<Typography.Body>Ariel EH Demo 2022</Typography.Body>}
              style={{ paddingVertical: theme.space.small }}
            />
          </Box>
        </Card.Data>
      </Box>
    ),
  },
];

const SwitchDosAndDonts = () => {
  return (
    <DosAndDontsCarousel
      dosCollection={dosCollection}
      dontsCollection={dontsCollection}
    />
  );
};

export default SwitchDosAndDonts;
