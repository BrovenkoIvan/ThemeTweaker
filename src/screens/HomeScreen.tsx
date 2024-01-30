import React, { memo } from 'react';
import styled from 'styled-components/native';
import { UIText } from '../components/shared/UIText';

export const HomeScreen = memo(() => {
  return (
    <Container>
      <UIText>Coming soon!</UIText>
    </Container>
  );
});

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.background};
`;
