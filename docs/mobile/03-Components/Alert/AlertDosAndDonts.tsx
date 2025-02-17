import React from 'react';
import DosAndDontsCarousel from '@site/src/components/Guideline/DosAndDontsCarousel';
import {
  DontsGuidelineCarouselProps,
  DosGuidelineCarouselProps,
} from '@site/src/components/Guideline/GuidelineCarousel';
import {
  Alert,
  Box,
  Card,
  Icon,
  PinInput,
  TextInput,
  Typography,
  theme,
} from '@hero-design/rn';
import { noop } from '../utils/utils';

const dosCollection: DosGuidelineCarouselProps['collection'] = [
  {
    id: 1,
    title: 'Consistency',
    content:
      'Use a consistent design for alerts and always position the alert at the top of the screen so that users will always see the alert.',
    example: (
      <Box padding="large" bgColor="neutralGlobalSurface">
        <Card style={{ backgroundColor: theme.colors.defaultGlobalSurface }}>
          <Box padding="medium">
            <Box flexDirection="row" alignItems="flex-end">
              <Typography.Title level="h1" typeface="playful">
                $953
              </Typography.Title>
              <Typography.Title level="h3" typeface="playful">
                .04
              </Typography.Title>
            </Box>

            <Box
              flexDirection="row"
              justifyContent="space-between"
              marginTop="small"
            >
              <Typography.Body>Spend account balance</Typography.Body>
              <Icon icon="money-notes" />
            </Box>
          </Box>
        </Card>

        <Alert
          style={{ marginTop: theme.space.medium }}
          content="Scheduled maintenance"
        />

        <Card
          style={{
            backgroundColor: theme.colors.defaultGlobalSurface,
            marginTop: theme.space.medium,
            ...theme.shadows.default,
          }}
        >
          <Box
            padding="medium"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography.Body>636-220 | 1234567890</Typography.Body>
              <Typography.Caption style={{ marginTop: theme.space.xsmall }}>
                Account detail
              </Typography.Caption>
            </Box>

            <Icon icon="upload-outlined" size="xsmall" intent="primary" />
          </Box>
        </Card>

        <Card
          style={{
            backgroundColor: theme.colors.defaultGlobalSurface,
            marginTop: theme.space.medium,
            ...theme.shadows.default,
          }}
        >
          <Box
            padding="medium"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography.Body>786-245 | 9876543219</Typography.Body>
              <Typography.Caption style={{ marginTop: theme.space.xsmall }}>
                Account detail
              </Typography.Caption>
            </Box>

            <Icon icon="upload-outlined" size="xsmall" intent="primary" />
          </Box>
        </Card>
      </Box>
    ),
    showScrollText: true,
  },
  {
    id: 2,
    title: 'Call to action',
    content:
      'If required, provide a clear call to action - the user should know what they need to do next in response to the alert.',
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
            style={{ width: '47%', height: 120 }}
          />
        </Box>

        <Alert
          onClose={() => ({})}
          intent="warning"
          style={{ marginTop: theme.space.medium }}
          content="Please enrol a card before you start shopping."
        />
      </Box>
    ),
    showScrollText: true,
  },
  {
    id: 3,
    title: 'Positioning',
    content:
      'Status alerts are always fixed, it usually appears directly beneath the horizontal navigation and cannot be dismissed.',
    example: (
      <Box bgColor="neutralGlobalSurface">
        <Box style={{ height: 100 }} bgColor="decorativePrimary" />
        <Box
          paddingHorizontal="medium"
          paddingVertical="medium"
          style={{ height: 60 }}
          flexDirection="row"
          alignItems="center"
        >
          <Typography.Body style={{ marginRight: theme.space.medium }}>
            Certifications
          </Typography.Body>
          <Typography.Body
            style={{
              marginRight: theme.space.medium,
              padding: theme.space.xsmall,
              backgroundColor: theme.colors.decorativePrimarySurface,
              borderRadius: theme.radii.large,
            }}
          >
            Policies
          </Typography.Body>

          <Typography.Body style={{ marginRight: theme.space.medium }}>
            Goals
          </Typography.Body>
          <Typography.Body>Events</Typography.Body>
        </Box>
        <Alert
          variant="unrounded"
          intent="success"
          content="This policy has been acknowledged."
        />

        <Box padding="large">
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
              style={{ width: '48%', height: 120 }}
            />
            <Box
              borderRadius="large"
              bgColor="decorativePrimary"
              style={{ width: '48%', height: 120 }}
            />
          </Box>
        </Box>
      </Box>
    ),
    showScrollText: true,
  },
  {
    id: 4,
    title: 'Errors',
    content: `Use alerts with input error states only to inform users of required actions when an input error state is not immediately visible on the screen, such as when it's located below the screen break or among other components like a form.`,
    example: (
      <Box padding="large">
        <Box marginBottom="medium" flexDirection="row" justifyContent="center">
          <Box
            marginRight="xxxxlarge"
            bgColor="decorativePrimary"
            borderRadius="rounded"
            style={{ width: 70, height: 70 }}
          />
          <Box
            bgColor="decorativePrimarySurface"
            borderRadius="rounded"
            style={{ width: 70, height: 70 }}
          />
        </Box>

        <Alert
          style={{ marginBottom: theme.space.small }}
          intent="error"
          content="Last name is not valid. Please remove any symbols or numbers."
          onClose={() => ({})}
        />

        <TextInput
          required
          label="Account Email"
          style={{ marginBottom: theme.space.xsmall }}
        />
        <TextInput
          required
          label="First Name"
          style={{ marginBottom: theme.space.xsmall }}
        />
        <TextInput
          required
          label="Last Name"
          error="Last name cannot contain symbols or numbers."
          value="Jon3$"
        />
      </Box>
    ),
    showScrollText: true,
  },
];

const dontsCollection: DontsGuidelineCarouselProps['collection'] = [
  {
    id: 1,
    title: 'Colors',
    content: `Don’t change the icon or colours.`,
    example: (
      <Box padding="large" bgColor="neutralGlobalSurface">
        <Card style={{ backgroundColor: theme.colors.defaultGlobalSurface }}>
          <Box padding="medium">
            <Box flexDirection="row" alignItems="flex-end">
              <Typography.Title level="h1" typeface="playful">
                $953
              </Typography.Title>
              <Typography.Title level="h3" typeface="playful">
                .04
              </Typography.Title>
            </Box>

            <Box
              flexDirection="row"
              justifyContent="space-between"
              marginTop="small"
            >
              <Typography.Body>Spend account balance</Typography.Body>
              <Icon icon="money-notes" />
            </Box>
          </Box>
        </Card>

        <Alert
          style={{
            marginTop: theme.space.medium,
            backgroundColor: theme.colors.onInfoSurface,
          }}
          content="Scheduled maintenance"
        />

        <Card
          style={{
            backgroundColor: theme.colors.defaultGlobalSurface,
            marginTop: theme.space.medium,
            ...theme.shadows.default,
          }}
        >
          <Box
            padding="medium"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography.Body>636-220 | 1234567890</Typography.Body>
              <Typography.Body style={{ marginTop: theme.space.xsmall }}>
                Account detail
              </Typography.Body>
            </Box>

            <Icon icon="upload-outlined" size="xsmall" intent="primary" />
          </Box>
        </Card>

        <Card
          style={{
            backgroundColor: theme.colors.defaultGlobalSurface,
            marginTop: theme.space.medium,
            ...theme.shadows.default,
          }}
        >
          <Box
            padding="medium"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography.Body>786-245 | 9876543219</Typography.Body>
              <Typography.Caption style={{ marginTop: theme.space.xsmall }}>
                Account detail
              </Typography.Caption>
            </Box>

            <Icon icon="upload-outlined" size="xsmall" intent="primary" />
          </Box>
        </Card>
      </Box>
    ),
    showScrollText: true,
  },
  {
    id: 2,
    title: 'Relevance',
    content: `Don't use alerts for non-critical information. Users should only be alerted for important information.`,
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
            style={{ width: '48%', height: 120 }}
          />
          <Box
            borderRadius="large"
            bgColor="decorativePrimary"
            style={{ width: '48%', height: 120 }}
          />
        </Box>

        <Alert
          onClose={() => ({})}
          intent="warning"
          style={{ marginTop: theme.space.medium }}
          content="Agoda is offering 25% additional cashback for 24 hours."
        />
      </Box>
    ),
    showScrollText: true,
  },
  {
    id: 3,
    title: 'Conciseness',
    content: `Don't make alerts too long or wordy - users should be able to quickly process the information and move on.`,
    example: (
      <Box bgColor="neutralGlobalSurface">
        <Box style={{ height: 100 }} bgColor="decorativePrimary" />
        <Box
          paddingHorizontal="medium"
          paddingVertical="medium"
          style={{ height: 60 }}
          flexDirection="row"
          alignItems="center"
        >
          <Typography.Body style={{ marginRight: theme.space.medium }}>
            Certifications
          </Typography.Body>
          <Typography.Body
            style={{
              marginRight: theme.space.medium,
              padding: theme.space.xsmall,
              backgroundColor: theme.colors.decorativePrimarySurface,
              borderRadius: theme.radii.large,
            }}
          >
            Policies
          </Typography.Body>

          <Typography.Body style={{ marginRight: theme.space.medium }}>
            Goals
          </Typography.Body>
          <Typography.Body>Events</Typography.Body>
        </Box>
        <Alert
          variant="unrounded"
          intent="success"
          content="This policy has been acknowledged. You have acknowledged 59% of all your policies."
        />

        <Box padding="large">
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
              style={{ width: '48%', height: 120 }}
            />
            <Box
              borderRadius="large"
              bgColor="decorativePrimary"
              style={{ width: '48%', height: 120 }}
            />
          </Box>
        </Box>
      </Box>
    ),
    showScrollText: true,
  },
  {
    id: 4,
    title: 'Errors',
    content: `Don’t use an alert when the input error state is sufficient and clear in communicating the information to the user.`,
    example: (
      <Box
        style={{ height: '100%' }}
        padding="large"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          marginBottom="xxlarge"
          style={{ width: '100%' }}
          flexDirection="row"
          alignItems="center"
        >
          <Icon
            icon="single-left-arrow"
            size="small"
            style={{ marginRight: theme.space.xxxxlarge }}
          />
          <Typography.Caption>Damaged, lost or stolen card</Typography.Caption>
        </Box>
        <Alert
          intent="error"
          content="Not a secure PIN."
          onClose={() => ({})}
          style={{ marginBottom: theme.space.medium, width: '100%' }}
        />
        <Typography.Title
          level="h3"
          typeface="playful"
          style={{ marginBottom: theme.space.xxlarge, textAlign: 'center' }}
        >
          Choose a PIN for your new card.
        </Typography.Title>
        <PinInput error="Not a secure PIN." value="1234" onChangeText={noop} />
      </Box>
    ),
    showScrollText: false,
  },
];

const AlertDosAndDonts = () => {
  return (
    <DosAndDontsCarousel
      dosCollection={dosCollection}
      dontsCollection={dontsCollection}
    />
  );
};

export default AlertDosAndDonts;
