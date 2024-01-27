import React, { memo } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabStackScreenList, TabScreens } from './types';
import { HomeScreen, SettingsScreen } from '../screens';

const { Navigator, Screen } = createBottomTabNavigator<TabStackScreenList>();

export const TabNavigation = memo(() => (
  <Navigator>
    <Screen name={TabScreens.HOME} component={HomeScreen} />
    <Screen name={TabScreens.SETTINGS} component={SettingsScreen} />
  </Navigator>
));
