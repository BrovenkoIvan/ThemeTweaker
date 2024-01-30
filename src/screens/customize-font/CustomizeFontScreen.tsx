import React, { memo, useState, useCallback } from 'react';
import styled from 'styled-components/native';
import Slider from '@react-native-community/slider';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { useAppearance } from '../../context';
import { Bottom, UIText } from '../../components/shared';
import { FontFamilyItem } from './components/FontFamilyItem';
import { fontFamilies, fontSizes } from '../../constants';

export const CustomizeFontScreen = memo(() => {
  const navigation = useNavigation();
  const { updateAppearanceConfig } = useAppearance();
  const theme = useTheme();
  const [selectedFontSize, setSelectedFontSize] = useState(theme.fontSize);
  const [selectedFontFamily, setSelectedFontFamily] = useState(theme.fontFamily);

  const handleCancel = useCallback(() => {
    navigation.canGoBack() && navigation.goBack();
  }, [navigation]);

  const handleSave = useCallback(() => {
    updateAppearanceConfig({
      fontSize: selectedFontSize,
      fontFamily: selectedFontFamily,
    });
  }, [selectedFontFamily, selectedFontSize, updateAppearanceConfig]);

  return (
    <>
      <Container>
        <Text $fontSize={selectedFontSize} $fontFamily={selectedFontFamily}>
          Font size
        </Text>
        <SliderContainer>
          <Char $fontSize={fontSizes.xs}>A</Char>
          <FontSizeSlider
            minimumValue={fontSizes.xs}
            maximumValue={fontSizes.lg}
            step={2}
            value={selectedFontSize}
            onValueChange={value => setSelectedFontSize(value)}
          />
          <Char $fontSize={fontSizes.lg}>A</Char>
        </SliderContainer>
        <Text $fontSize={selectedFontSize} $fontFamily={selectedFontFamily}>
          Font family
        </Text>
        {Object.values(fontFamilies).map(fontFamily => (
          <FontFamilyItem
            key={fontFamily}
            theme={theme}
            fontFamily={fontFamily}
            setSelectedFontFamily={setSelectedFontFamily}
            selectedFontFamily={selectedFontFamily}
            fontSize={selectedFontSize}
          />
        ))}
      </Container>
      <Bottom handleCancel={handleCancel} handleSave={handleSave} />
    </>
  );
});

interface TextProps {
  $fontSize: number;
  $fontFamily: string;
}
const Text = styled(UIText)<TextProps>`
  font-size: ${props => props.$fontSize}px;
  font-family: ${props => props.$fontFamily};
  margin-left: 8px;
`;

const Container = styled.ScrollView`
  padding: 8px;
  flex: 1;
  background-color: ${props => props.theme.background};
`;

const SliderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin: 8px;
`;

const FontSizeSlider = styled(Slider)`
  flex: 1;
`;

interface CharProps {
  $fontSize: number;
}

const Char = styled.Text<CharProps>`
  color: ${props => props.theme.text};
  font-size: ${props => props.$fontSize}px;
`;
