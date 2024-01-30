import React, { memo, useCallback } from 'react';
import styled from 'styled-components/native';
import { UIText } from '../components/shared/UIText';
import { SvgChevron } from '../assets/icons/SvgChevron';
import { useAppearance } from '../context';
import { useColorScheme } from 'react-native';
import { SvgCheck } from '../assets/icons/SvgCheck';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { MainScreens, settingScreenNavigationProp } from '../navigation/types';
import { UIBackGroundImage } from '../components/shared/UIBackgroundImage';

export const SettingsScreen = memo(() => {
  const theme = useTheme();
  const navigation = useNavigation<settingScreenNavigationProp>();
  const colorScheme = useColorScheme();
  const {
    updateAppearanceConfig,
    appearanceConfig: { theme: currentTheme },
    backgroundImageUri,
  } = useAppearance();

  const handleToggleTheme = useCallback(() => {
    updateAppearanceConfig({
      theme: currentTheme === 'light' ? 'dark' : 'light',
    });
  }, [currentTheme, updateAppearanceConfig]);

  const handleSystemTheme = useCallback(() => {
    updateAppearanceConfig({
      theme: colorScheme ? colorScheme : 'light',
    });
  }, [colorScheme, updateAppearanceConfig]);

  const handleCustomizeFonts = useCallback(() => {
    navigation.navigate(MainScreens.CUSTOMIZE_FONTS);
  }, [navigation]);

  const handleCustomizeIcons = useCallback(() => {
    navigation.navigate(MainScreens.CUSTOMIZE_ICONS);
  }, [navigation]);

  const handleCustomizeBackground = useCallback(() => {
    navigation.navigate(MainScreens.CUSTOMIZE_BACKGROUND);
  }, [navigation]);

  return (
    <Container>
      <UIBackGroundImage backgroundImageUri={backgroundImageUri} />
      <Section>
        <Button disabled>
          <UIText>Dark mode</UIText>
          <Switch onValueChange={handleToggleTheme} value={currentTheme === 'dark'} />
        </Button>
        <Button onPress={handleSystemTheme}>
          <UIText>System</UIText>
          {colorScheme === currentTheme && <SvgCheck fill={theme.primary} />}
        </Button>
      </Section>
      <Section>
        <Button onPress={handleCustomizeIcons}>
          <UIText>Icons</UIText>
          <SvgChevron />
        </Button>
      </Section>
      <Section>
        <Button onPress={handleCustomizeFonts}>
          <UIText>Fonts</UIText>
          <SvgChevron />
        </Button>
      </Section>
      <Section>
        <Button onPress={handleCustomizeBackground}>
          <UIText>Choose background</UIText>
          <SvgChevron />
        </Button>
      </Section>
    </Container>
  );
});

const Container = styled.ImageBackground`
  flex: 1;
  background-color: ${props => props.theme.background};
`;

const Section = styled.View`
  margin: 12px 8px 0px 8px;
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

const Switch = styled.Switch``;
