import React, { memo, useCallback, useState } from 'react';
import styled from 'styled-components/native';
import { SvgHome } from '../assets';
import { useTheme } from 'styled-components';
import { iconsColors, iconsSizes } from '../constants';
import { Bottom, UIText } from '../components/shared';
import { useNavigation } from '@react-navigation/native';
import { useAppearance } from '../context';
import { darkTheme, lightTheme } from '../theme';

export const CustomizeIconsScreen = memo(() => {
  const theme = useTheme();
  const navigation = useNavigation();
  const { updateAppearanceConfig } = useAppearance();
  const [selectedSize, setSelectedSize] = useState(theme.iconsSize);
  const [selectedColor, setSelectedColor] = useState(theme.iconsColor);

  const handleCancel = useCallback(() => {
    navigation.canGoBack() && navigation.goBack();
  }, [navigation]);

  const handleSave = useCallback(() => {
    updateAppearanceConfig({
      iconsSize: selectedSize,
      iconsColor: selectedColor,
    });
  }, [selectedSize, selectedColor, updateAppearanceConfig]);

  const handleDefaultIconStyle = useCallback(() => {
    updateAppearanceConfig({
      iconsColor: undefined,
    });
    setSelectedColor(theme.theme === 'light' ? lightTheme.iconsColor : darkTheme.iconsColor);
    setSelectedSize(lightTheme.iconsSize);
  }, [theme, updateAppearanceConfig]);

  return (
    <>
      <Container>
        <Text>Choose icons size</Text>
        <IconsContainer>
          {Object.values(iconsSizes).map(size => (
            <IconContainer
              key={size.toString()}
              $selected={selectedSize === size}
              onPress={() => setSelectedSize(size)}>
              <SvgHome size={size} fill={theme.iconsColor} />
            </IconContainer>
          ))}
        </IconsContainer>
        <Text>Choose icons color</Text>
        <IconsContainer>
          {Object.values(iconsColors).map(color => (
            <IconContainer
              key={color}
              $selected={selectedColor === color}
              onPress={() => setSelectedColor(color)}>
              <SvgHome size={theme.iconsSize} fill={color} />
            </IconContainer>
          ))}
        </IconsContainer>
        <Section>
          <Button onPress={handleDefaultIconStyle}>
            <UIText>Default</UIText>
          </Button>
        </Section>
      </Container>
      <Bottom handleCancel={handleCancel} handleSave={handleSave} />
    </>
  );
});

const Container = styled.View`
  flex: 1;
  padding: 12px;
  background-color: ${props => props.theme.background};
  gap: 12px;
`;

const Text = styled(UIText)``;

const IconsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

interface IconSizeContainerProps {
  $selected: boolean;
}

const IconContainer = styled.TouchableOpacity<IconSizeContainerProps>`
  background-color: ${props => props.theme.secondary};
  padding: 8px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  border: 2px solid ${props => (props.$selected ? props.theme.selectedText : props.theme.secondary)};
`;

const Section = styled.View`
  margin: 12px 0px 0px 0px;
  border-radius: 8px;
  padding: 10px 4px 10px 10px;
  background-color: ${props => props.theme.secondary};
  gap: 10px;
`;

const Button = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
