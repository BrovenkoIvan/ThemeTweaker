import { Platform } from 'react-native';
import { DefaultTheme } from 'styled-components';
import { fontSizes } from '../constants/font-sizes';
import { iconsSizes } from '../constants';

export const lightTheme: DefaultTheme = {
  theme: 'light',
  background: '#f6f6f6',
  text: '#333333',
  selectedText: '#2196F3',
  primary: '#007AFF',
  secondary: '#d0d0d0',
  accent: '#FF2D55',
  iconsColor: '#555555',
  iconsSize: iconsSizes.default,
  fontSize: fontSizes.sm,
  fontFamily: Platform.OS == 'ios' ? 'san Francisco' : 'Roboto',
};

export const darkTheme: DefaultTheme = {
  theme: 'dark',
  background: '#212129',
  text: '#E5E5EA',
  selectedText: '#2196F3',
  primary: '#0A84FF',
  secondary: '#8E8E93',
  accent: '#FF453A',
  iconsColor: '#BEBEBE',
  iconsSize: iconsSizes.default,
  fontSize: fontSizes.sm,
  fontFamily: Platform.OS == 'ios' ? 'san Francisco' : 'Roboto',
};
