import React, { memo } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabStackScreenList, TabScreens } from './types';
import { HomeScreen, SettingsScreen } from '../screens';
import { useTheme } from 'styled-components';
import { SvgHome, SvgSettings } from '../assets';
import { UIText } from '../components/shared/UIText';

const { Navigator, Screen } = createBottomTabNavigator<TabStackScreenList>();

export const TabNavigation = memo(() => {
  const theme = useTheme();
  return (
    <Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: theme.background,
        },
        headerStyle: {
          backgroundColor: theme.background,
        },
        headerTitleStyle: {
          color: theme.text,
          fontSize: theme.fontSize,
          fontFamily: theme.fontFamily,
        },
        tabBarLabel: ({ focused }) => {
          return <UIText $focused={focused}>{route.name}</UIText>;
        },
        tabBarLabelStyle: {
          fontSize: theme.fontSize,
          fontFamily: theme.fontFamily,
        },
        tabBarIcon: () => {
          switch (route.name) {
            case TabScreens.HOME:
              return <SvgHome fill={theme.iconsColor} size={theme.iconsSize} />;
            case TabScreens.SETTINGS:
              return <SvgSettings fill={theme.iconsColor} size={theme.iconsSize} />;
          }
        },
      })}>
      <Screen name={TabScreens.HOME} component={HomeScreen} />
      <Screen name={TabScreens.SETTINGS} component={SettingsScreen} />
    </Navigator>
  );
});
