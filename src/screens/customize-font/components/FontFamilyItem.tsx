import React, { Dispatch, SetStateAction, memo, useCallback } from 'react';
import { DefaultTheme } from 'styled-components';
import styled from 'styled-components/native';
import { UIText } from '../../../components/shared';
import { SvgCheck } from '../../../assets/icons/SvgCheck';

interface FontFamilyItemProps {
  fontFamily: string;
  theme: DefaultTheme;
  setSelectedFontFamily: Dispatch<SetStateAction<string>>;
  selectedFontFamily: string;
  fontSize: number;
}

export const FontFamilyItem = memo<FontFamilyItemProps>(
  ({ theme, fontFamily, setSelectedFontFamily, selectedFontFamily, fontSize }) => {
    const handleFontFamily = useCallback(() => {
      setSelectedFontFamily(fontFamily);
    }, [fontFamily, setSelectedFontFamily]);

    return (
      <Container onPress={handleFontFamily}>
        <Text $fontFamily={fontFamily} $fontSize={fontSize}>
          Lorem ipsum dolor sit amet
        </Text>
        {selectedFontFamily === fontFamily && <SvgCheck fill={theme.primary} />}
      </Container>
    );
  },
);

const Container = styled.TouchableOpacity`
  margin: 8px;
  background-color: ${props => props.theme.secondary};
  border-radius: 8px;
  padding: 12px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

interface TextProps {
  $fontFamily: string;
  $fontSize: number;
}

const Text = styled(UIText)<TextProps>`
  font-family: ${props => props.$fontFamily};
  font-size: ${props => props.$fontSize}px;
`;
