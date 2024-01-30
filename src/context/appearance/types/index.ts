export interface AppearanceConfig {
  theme: string;
  fontSize: number;
  fontFamily: string;
  iconsSize: number;
  iconsColor?: string;
}

export interface AppearanceContextProps {
  appearanceConfig: AppearanceConfig;
  updateAppearanceConfig: (updates: Partial<AppearanceConfig>) => void;
  backgroundImageUri: string | null;
  saveBackgroundImageUri: (backgroundImageUri: string) => void;
  removeBackgroundImageUri: () => void;
}
