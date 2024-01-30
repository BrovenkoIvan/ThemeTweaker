import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export enum TabScreens {
  HOME = 'Home',
  SETTINGS = 'Settings',
}

export enum MainScreens {
  TABS = 'Tabs',
  CUSTOMIZE_ICONS = 'Customize icons',
  CUSTOMIZE_FONTS = 'Customize fonts',
  CUSTOMIZE_BACKGROUND = 'Customize background',
}

export type TabStackScreenList = {
  [TabScreens.HOME]: undefined;
  [TabScreens.SETTINGS]: undefined;
};

export type MainStackScreenList = {
  [MainScreens.TABS]: undefined;
  [MainScreens.CUSTOMIZE_ICONS]: undefined;
  [MainScreens.CUSTOMIZE_FONTS]: undefined;
  [MainScreens.CUSTOMIZE_FONTS]: undefined;
  [MainScreens.CUSTOMIZE_BACKGROUND]: undefined;
};

export type settingScreenNavigationProp = NativeStackNavigationProp<
  MainStackScreenList,
  MainScreens.TABS
>;
