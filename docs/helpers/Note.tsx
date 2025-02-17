import React from 'react';
import { Alert, Typography } from '@ehrocks/hero-design-react';
import styled from 'styled-components';
import type { ReactChildren, ReactElement } from 'react';
import type { AlertProps } from '@ehrocks/hero-design-react';

const Ul = styled.ul``;
const Li = styled.li``;

const Highlight = ({ children }: { children: ReactChildren }) => (
  <Typography.Text tagName="span" fontWeight="semi-bold">
    {children}
  </Typography.Text>
);

const StyledWrapper = styled.div`
  padding-bottom: ${(props) => props.theme.space.large}px;

  ${Ul} {
    margin-bottom: 0;
    margin-top: 0;
    padding-left: ${(props) => props.theme.space.large}px;
  }
`;

interface NoteProps extends Pick<AlertProps, 'title' | 'intent' | 'style'> {
  children: string | ReactElement;
}

const Note = ({ title, intent = 'warning', style, children }: NoteProps) => (
  <StyledWrapper>
    <Alert intent={intent} title={title} content={children} style={style} />
  </StyledWrapper>
);

export { Ul, Li, Highlight };

export default Note;
