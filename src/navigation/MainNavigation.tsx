import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { memo } from 'react';
import { CustomizeBackgroundScreen, CustomizeFontScreen, CustomizeIconsScreen } from '../screens';
import { MainScreens, MainStackScreenList } from './types';
import { TabNavigation } from './TabNavigation';
import { DefaultTheme, useTheme } from 'styled-components';

const { Navigator, Screen } = createNativeStackNavigator<MainStackScreenList>();

const screenOptions = (theme: DefaultTheme) => ({
  headerStyle: {
    backgroundColor: theme.background,
  },
  headerTitleStyle: {
    color: theme.text,
    fontSize: theme.fontSize,
    fontFamily: theme.fontFamily,
  },
  headerBackTitleVisible: false,
});

export const MainNavigation = memo(() => {
  const theme = useTheme();
  return (
    <Navigator>
      <Screen name={MainScreens.TABS} component={TabNavigation} options={{ headerShown: false }} />
      <Screen
        name={MainScreens.CUSTOMIZE_ICONS}
        component={CustomizeIconsScreen}
        options={() => screenOptions(theme)}
      />
      <Screen
        name={MainScreens.CUSTOMIZE_FONTS}
        component={CustomizeFontScreen}
        options={() => screenOptions(theme)}
      />
      <Screen
        name={MainScreens.CUSTOMIZE_BACKGROUND}
        component={CustomizeBackgroundScreen}
        options={() => screenOptions(theme)}
      />
    </Navigator>
  );
});
