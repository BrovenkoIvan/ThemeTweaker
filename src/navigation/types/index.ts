import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export enum TabScreens {
  HOME = 'Home',
  SETTINGS = 'Settings',
}

export type TabStackScreenList = {
  [TabScreens.HOME]: undefined;
  [TabScreens.SETTINGS]: undefined;
};

export type settingScreenNavigationProp = NativeStackNavigationProp<
  TabStackScreenList,
  TabScreens.HOME
>;
