import React, { memo } from 'react';
import styled from 'styled-components/native';
import { UIText } from './UIText';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface BottomProps {
  handleCancel: () => void;
  handleSave: () => void;
}

export const Bottom = memo<BottomProps>(({ handleCancel, handleSave }) => {
  const { bottom } = useSafeAreaInsets();
  return (
    <BottomContainer>
      <BottomBtn $marginBottom={bottom} activeOpacity={0.9} onPress={handleCancel}>
        <UIText>Cancel</UIText>
      </BottomBtn>
      <BottomBtn $marginBottom={bottom} activeOpacity={0.9} onPress={handleSave}>
        <UIText>Save</UIText>
      </BottomBtn>
    </BottomContainer>
  );
});

const BottomContainer = styled.View`
  flex-direction: row;
  background-color: ${props => props.theme.secondary};
  gap: 1px;
  border-top-width: 1px;
  border-top-color: ${props => props.theme.secondary};
`;

interface BottomBtnProps {
  $marginBottom: number;
}

const BottomBtn = styled.TouchableOpacity<BottomBtnProps>`
  flex: 1;
  align-items: center;
  padding: 10px 0px ${props => props.$marginBottom + 10 ?? 8}px 0px;
  background-color: ${props => props.theme.background};
`;
