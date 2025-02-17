import React from 'react';

import DosAndDontsCarousel from '@site/src/components/Guideline/DosAndDontsCarousel';
import {
  DontsGuidelineCarouselProps,
  DosGuidelineCarouselProps,
} from '@site/src/components/Guideline/GuidelineCarousel';
import {
  Box,
  Button,
  Card,
  Checkbox,
  Divider,
  TextInput,
  theme,
} from '@hero-design/rn';
import { noop } from '../utils/utils';

const doCollections: DosGuidelineCarouselProps['collection'] = [
  {
    id: 1,
    title: 'Generally',
    content:
      'Generally, use only one primary button per screen, it can helps the main action stands out on a screen. Secondary buttons or text buttons can be used for secondary or less critical actions.',
    example: (
      <Box padding="large" bgColor="neutralGlobalSurface">
        <Card
          style={{
            backgroundColor: theme.colors.neutralGlobalSurface,
            minHeight: 302,
            justifyContent: 'flex-end',
            paddingLeft: theme.space.large,
            paddingRight: theme.space.large,
          }}
        >
          <Button
            text="Login"
            variant="filled"
            intent="primary"
            onPress={noop}
            style={{ marginBottom: theme.space.medium }}
          />

          <Button
            text="Sign up with email"
            variant="text"
            intent="primary"
            onPress={noop}
            style={{ marginBottom: theme.space.medium }}
          />
        </Card>
      </Box>
    ),
  },
  {
    id: 2,
    title: 'Secondary button usecase',
    content:
      'Only use secondary button if primary button has already been applied. Only use one secondary button per section.',
    example: (
      <Box padding="large" bgColor="neutralGlobalSurface">
        <Card
          style={{
            backgroundColor: theme.colors.neutralGlobalSurface,
            minHeight: 302,
            justifyContent: 'flex-end',
            paddingLeft: theme.space.large,
            paddingRight: theme.space.large,
          }}
        >
          <Button
            text="Verify"
            variant="filled"
            intent="primary"
            onPress={noop}
            style={{ marginBottom: theme.space.medium }}
          />
          <Button
            text="Cancel"
            variant="filled"
            intent="secondary"
            onPress={noop}
            style={{ marginBottom: theme.space.medium }}
          />
        </Card>
      </Box>
    ),
  },
  {
    id: 3,
    title: 'Horizontal group buttons',
    content: `For any horizontal grouped buttons, the primary actions is always on the rightmost of a screen.`,
    example: (
      <Box padding="large" bgColor="neutralGlobalSurface">
        <Card
          style={{
            backgroundColor: theme.colors.defaultGlobalSurface,
            minHeight: 302,
            display: 'flex',
            justifyContent: 'space-between',
            paddingLeft: theme.space.large,
            paddingRight: theme.space.large,
          }}
        >
          <Box>
            <TextInput label="Treatment Provider" />

            <TextInput label="Special Requirements" />
          </Box>

          <Box>
            <Divider
              style={{ backgroundColor: theme.colors.neutralGlobalSurface }}
            />
            <Box
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}
            >
              <Button
                text="Cancel"
                variant="text"
                intent="secondary"
                onPress={noop}
                style={{ marginBottom: theme.space.medium }}
              />
              <Button
                text="Submit"
                variant="text"
                intent="primary"
                onPress={noop}
                style={{ marginBottom: theme.space.medium }}
              />
            </Box>
          </Box>
        </Card>
      </Box>
    ),
  },
  {
    id: 4,
    title: 'Button represent',
    content: `Buttons are just one option to represent actions within a product and should not be overused. Excess use of buttons on a single screen can disrupt the visual hierarchy. 
  Consider placing additional actions instead, such as FAB, text links, icon buttons, toolbars, tags etc.`,
    example: (
      <Box padding="large" bgColor="neutralGlobalSurface">
        <Card
          style={{
            backgroundColor: theme.colors.defaultGlobalSurface,
            minHeight: 302,
            justifyContent: 'space-between',
            paddingLeft: theme.space.large,
            paddingRight: theme.space.large,
          }}
        >
          <Box>
            <Checkbox
              checked
              style={{ marginVertical: theme.space.medium }}
              description="Please agree to our privacy policy"
            />
          </Box>

          <Box>
            <Divider
              style={{ backgroundColor: theme.colors.neutralGlobalSurface }}
            />
            <Box
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}
            >
              <Button
                text="Decline"
                variant="text"
                intent="danger"
                onPress={noop}
                style={{ marginBottom: theme.space.medium }}
              />
              <Button
                text="Approve"
                variant="text"
                intent="primary"
                onPress={noop}
                style={{ marginBottom: theme.space.medium }}
              />
            </Box>
          </Box>
        </Card>
      </Box>
    ),
  },
  {
    id: 5,
    title: 'Responsive button container',
    showScrollText: true,
    content:
      'Button container should be responsive to the layout grid, and always keep a 16px margin on both the left and right sides from the edge.',
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

        <Button
          text="Apply Now"
          variant="filled"
          intent="primary"
          onPress={noop}
          style={{
            marginBottom: theme.space.medium,
            marginTop: theme.space.medium,
          }}
        />
      </Box>
    ),
  },
];

const dontsCollections: DontsGuidelineCarouselProps['collection'] = [
  {
    id: 1,
    title: 'Duplicate primary buttons in a screen',
    content: 'Don’t use two primary buttons on a single screen.',
    example: (
      <Box padding="large" bgColor="neutralGlobalSurface">
        <Card
          style={{
            backgroundColor: theme.colors.neutralGlobalSurface,
            minHeight: 302,
            justifyContent: 'flex-end',
            paddingLeft: theme.space.large,
            paddingRight: theme.space.large,
          }}
        >
          <Button
            text="Login"
            variant="filled"
            intent="primary"
            onPress={noop}
            style={{ marginBottom: theme.space.medium }}
          />

          <Button
            text="Sign up with email"
            variant="filled"
            intent="primary"
            onPress={noop}
            style={{ marginBottom: theme.space.medium }}
          />
        </Card>
      </Box>
    ),
  },
  {
    id: 2,
    title: 'Stop using secondary standalone',
    content: 'Don’t use a secondary button on its own.',
    example: (
      <Box padding="large" bgColor="neutralGlobalSurface">
        <Card
          style={{
            backgroundColor: theme.colors.neutralGlobalSurface,
            minHeight: 302,
            justifyContent: 'flex-end',
            paddingLeft: theme.space.large,
            paddingRight: theme.space.large,
          }}
        >
          <Button
            text="Verify"
            variant="filled"
            intent="secondary"
            style={{ marginBottom: theme.space.medium }}
            onPress={noop}
          />
        </Card>
      </Box>
    ),
  },
  {
    id: 3,
    title: 'Vertical group buttons',
    content: `For any vertical button groups, the primary button is always on top and the secondary or tertiary button is below. For vertically stacked buttons, do not place a secondary or text button above a primary button.`,
    example: (
      <Box padding="large" bgColor="neutralGlobalSurface">
        <Card
          style={{
            backgroundColor: theme.colors.neutralGlobalSurface,
            minHeight: 302,
            justifyContent: 'flex-end',
            paddingLeft: theme.space.large,
            paddingRight: theme.space.large,
          }}
        >
          <Button
            text="Request to reset your 2-Factor Authentication"
            variant="text"
            intent="primary"
            onPress={noop}
            style={{ marginBottom: theme.space.medium }}
          />
          <Button
            text="Next"
            variant="filled"
            intent="primary"
            onPress={noop}
            style={{ marginBottom: theme.space.medium }}
          />
        </Card>
      </Box>
    ),
  },
  {
    id: 4,
    title: 'Too many buttons',
    content: `Don’t clutter your screen design with too many action buttons.`,
    example: (
      <Box padding="large" bgColor="neutralGlobalSurface">
        <Card
          style={{
            backgroundColor: theme.colors.defaultGlobalSurface,
            minHeight: 302,
            justifyContent: 'space-between',
            paddingLeft: theme.space.large,
            paddingRight: theme.space.large,
            paddingTop: theme.space.large,
          }}
        >
          <Box>
            <Button
              text="Save"
              variant="filled"
              intent="primary"
              style={{ marginBottom: theme.space.medium }}
              onPress={noop}
            />

            <Button
              text="Cancel leave request"
              variant="text"
              intent="danger"
              style={{ marginBottom: theme.space.medium }}
              onPress={noop}
            />
          </Box>

          <Box>
            <Divider
              style={{ backgroundColor: theme.colors.neutralGlobalSurface }}
            />
            <Box
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}
            >
              <Button
                text="Cancel"
                variant="text"
                intent="danger"
                style={{ marginBottom: theme.space.medium }}
                onPress={noop}
              />
              <Button
                text="Submit"
                variant="text"
                intent="primary"
                style={{ marginBottom: theme.space.medium }}
                onPress={noop}
              />
            </Box>
          </Box>
        </Card>
      </Box>
    ),
  },
  {
    id: 5,
    showScrollText: true,
    title: 'Do not stretch button container',
    content:
      'Do not stretch a button container according to the text label within.',
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

        <Button
          text="Apply Now"
          variant="filled"
          intent="primary"
          onPress={noop}
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: theme.space.medium,
            marginTop: theme.space.medium,
            width: 250,
          }}
        />
      </Box>
    ),
  },
];

export default function ButtonDosAndDonts() {
  return (
    <DosAndDontsCarousel
      dosCollection={doCollections}
      dontsCollection={dontsCollections}
    />
  );
}
