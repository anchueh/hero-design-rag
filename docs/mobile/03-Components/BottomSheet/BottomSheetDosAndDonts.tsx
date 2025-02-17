import React, { useState } from 'react';
import DosAndDontsCarousel from '@site/src/components/Guideline/DosAndDontsCarousel';
import {
  CautionGuidelineCarouselProps,
  DontsGuidelineCarouselProps,
  DosGuidelineCarouselProps,
} from '@site/src/components/Guideline/GuidelineCarousel';
import {
  BottomSheet,
  Box,
  Button,
  TextInput,
  Typography,
} from '@hero-design/rn';

const doCollection: DosGuidelineCarouselProps['collection'] = [
  {
    id: 1,
    title: 'Bottom Sheet confirm action',
    content: `When implementing a confirmation bottom sheet, it is important to include a cancel or close button to give the user the option to decline the action.`,
    example: function BottomSheetGeneral() {
      const [open, setOpen] = useState(false);

      return (
        <Box padding="large" bgColor="defaultGlobalSurface">
          <Box
            marginBottom="medium"
            borderRadius="large"
            bgColor="highlightedSurface"
            style={{
              width: '100%',
              height: 120,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography.Caption>Bottom Sheet confirm action</Typography.Caption>
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

          <Button
            variant="text"
            text="Toggle Bottom Sheet"
            onPress={() => setOpen(true)}
          />
          <BottomSheet
            header="Confirmation"
            footer={
              <Box flexDirection="row" justifyContent="flex-end">
                <Button
                  variant="text"
                  text="Cancel"
                  intent="secondary"
                  onPress={() => setOpen(false)}
                />
                <Button
                  variant="text"
                  text="Logout"
                  intent="danger"
                  onPress={() => setOpen(false)}
                />
              </Box>
            }
            open={open}
            onRequestClose={() => setOpen(false)}
          >
            <Box padding="large">
              <Typography.Body>Are you want to log out</Typography.Body>
            </Box>
          </BottomSheet>
        </Box>
      );
    },
  },
  {
    id: 2,
    title: 'Writing bottom sheet header and content',
    content: `The bottom sheet header needs to communicate the type of confirmation being requested. The bottom sheet header should be concise, containing no more than three words, and should not be phrased as a question. For instance, “Confirmation”, “Log out”, “Cancel swap”, and “Discard changes”.`,
    example: function BottomSheetGeneral() {
      const [open, setOpen] = useState(false);

      return (
        <Box padding="large" bgColor="defaultGlobalSurface">
          <Box
            marginBottom="medium"
            borderRadius="large"
            bgColor="highlightedSurface"
            style={{
              width: '100%',
              height: 120,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography.Caption>
              Writing bottom sheet header and content
            </Typography.Caption>
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

          <Button
            variant="text"
            text="Toggle Bottom Sheet"
            onPress={() => setOpen(true)}
          />
          <BottomSheet
            header="Confirmation"
            footer={
              <Box flexDirection="row" justifyContent="flex-end">
                <Button
                  variant="text"
                  text="Cancel"
                  intent="secondary"
                  onPress={() => setOpen(false)}
                />
                <Button
                  variant="text"
                  text="Logout"
                  intent="danger"
                  onPress={() => setOpen(false)}
                />
              </Box>
            }
            open={open}
            onRequestClose={() => setOpen(false)}
          >
            <Box padding="large">
              <Typography.Body>Are you want to log out</Typography.Body>
            </Box>
          </BottomSheet>
        </Box>
      );
    },
  },
];

const dontCollection: DontsGuidelineCarouselProps['collection'] = [
  {
    id: 1,
    title: 'Ignore cancel button for confirmation bottom sheet',
    content: `Don’t use cancel button unless it’s a confirmation bottom sheet.`,
    example: function BottomSheetGeneral() {
      const [open, setOpen] = useState(false);

      return (
        <Box padding="large" bgColor="defaultGlobalSurface">
          <Box
            marginBottom="medium"
            borderRadius="large"
            bgColor="highlightedSurface"
            style={{
              width: '100%',
              height: 120,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography.Caption>
              Ignore cancel button for confirmation bottom sheet
            </Typography.Caption>
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

          <Button
            variant="text"
            text="Toggle Bottom Sheet"
            onPress={() => setOpen(true)}
          />
          <BottomSheet
            header="Confirmation"
            footer={
              <Box flexDirection="row" justifyContent="flex-end">
                <Button
                  variant="text"
                  text="Cancel"
                  intent="secondary"
                  onPress={() => setOpen(false)}
                />
                <Button
                  variant="text"
                  text="Save"
                  intent="primary"
                  onPress={() => setOpen(false)}
                />
              </Box>
            }
            open={open}
            onRequestClose={() => setOpen(false)}
          >
            <Box padding="large">
              <TextInput label="Address" />
            </Box>
          </BottomSheet>
        </Box>
      );
    },
  },
  {
    id: 2,
    title: 'Question in bottom sheet header',
    content: `Don’t phrase the bottom sheet header as a question.`,
    example: function BottomSheetGeneral() {
      const [open, setOpen] = useState(false);

      return (
        <Box padding="large" bgColor="defaultGlobalSurface">
          <Box
            marginBottom="medium"
            borderRadius="large"
            bgColor="highlightedSurface"
            style={{
              width: '100%',
              height: 120,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography.Caption>
              Writing bottom sheet header and content
            </Typography.Caption>
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

          <Button
            variant="text"
            text="Toggle Bottom Sheet"
            onPress={() => setOpen(true)}
          />
          <BottomSheet
            header="Are you sure?"
            footer={
              <Box flexDirection="row" justifyContent="flex-end">
                <Button
                  variant="text"
                  text="Cancel"
                  intent="secondary"
                  onPress={() => setOpen(false)}
                />
                <Button
                  variant="text"
                  text="Decline"
                  intent="danger"
                  onPress={() => setOpen(false)}
                />
              </Box>
            }
            open={open}
            onRequestClose={() => setOpen(false)}
          >
            <Box padding="large">
              <Typography.Body>
                Are you sure you want to decline this leave request?
              </Typography.Body>
            </Box>
          </BottomSheet>
        </Box>
      );
    },
  },
];

const cautionCollection: CautionGuidelineCarouselProps['collection'] = [
  {
    id: 1,
    title: 'Non-critical information',
    content: `In scenarios where a confirmation modal is only displaying non-critical information, it may be acceptable not to include a cancel or close button.`,
    example: function BottomSheetGeneral() {
      const [open, setOpen] = useState(false);

      return (
        <Box padding="large" bgColor="defaultGlobalSurface">
          <Box
            marginBottom="medium"
            borderRadius="large"
            bgColor="highlightedSurface"
            style={{
              width: '100%',
              height: 120,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography.Caption>Bottom Sheet confirm action</Typography.Caption>
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

          <Button
            variant="text"
            text="Toggle Bottom Sheet"
            onPress={() => setOpen(true)}
          />
          <BottomSheet
            header="File size"
            footer={
              <Box flexDirection="row" justifyContent="flex-end">
                <Button
                  variant="text"
                  text="OK"
                  intent="secondary"
                  onPress={() => setOpen(false)}
                />
              </Box>
            }
            open={open}
            onRequestClose={() => setOpen(false)}
          >
            <Box padding="large">
              <Typography.Body>
                The total size of files must be less than 10MB
              </Typography.Body>
            </Box>
          </BottomSheet>
        </Box>
      );
    },
  },
];

export default function BottomSheetDosAndDonts() {
  return (
    <DosAndDontsCarousel
      dosCollection={doCollection}
      dontsCollection={dontCollection}
      cautionCollection={cautionCollection}
    />
  );
}
