import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
    secondary: string;
    text: string;
    selectedText: string;
    background: string;
    accent: string;
    iconsColor: string;
    fontFamily: string;
    fontSize: number;
    iconsSize: number;
  }
}
