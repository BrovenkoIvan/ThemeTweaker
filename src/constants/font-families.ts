import { Platform } from 'react-native';

export const fontFamilies = {
  Default: Platform.OS == 'ios' ? 'san Francisco' : 'Roboto',
  RobotoItalic: 'Roboto-Italic',
  RobotoLight: 'Roboto-Light',
  RobotoRegular: 'Roboto-Regular',
  RobotoBold: 'Roboto-Bold',
  SingleDay: 'SingleDay-Regular',
};
