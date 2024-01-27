import React, { memo } from 'react';
import styled from 'styled-components/native';

export const SettingsScreen = memo(() => {
  return (
    <Container>
      <Text>Hello, World!</Text>
    </Container>
  );
});

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text``;
