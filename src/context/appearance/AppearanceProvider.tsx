import React, { useColorScheme, Platform } from 'react-native';
import { darkTheme, lightTheme } from '../../theme';
import { PropsWithChildren, memo, useCallback, useEffect, useMemo, useState } from 'react';
import { AppearanceContext } from './AppearanceContext';
import { ThemeProvider } from 'styled-components';
import { storageService } from '../../services';
import { AsyncStorageKeys, fontSizes, iconsSizes } from '../../constants';
import { AppearanceConfig } from './types';

export const AppearanceProvider = memo<PropsWithChildren>(({ children }) => {
  const colorScheme = useColorScheme();
  const [backgroundImageUri, setBackgroundImageUri] = useState<string | null>('');

  const [appearanceConfig, setAppearanceConfig] = useState<AppearanceConfig>({
    theme: colorScheme ? colorScheme : 'light',
    fontSize: fontSizes.sm,
    fontFamily: Platform.OS == 'ios' ? 'san Francisco' : 'Roboto',
    iconsSize: iconsSizes.default,
  });

  const updateAppearanceConfig = useCallback(
    async (updates: Partial<AppearanceConfig>) => {
      setAppearanceConfig(prevConfig => ({ ...prevConfig, ...updates }));
      const updatedConfig = { ...appearanceConfig, ...updates };
      await storageService.store(AsyncStorageKeys.APPEARANCE_CONFIG, JSON.stringify(updatedConfig));
    },
    [appearanceConfig],
  );

  const getAppearanceConfig = useCallback(async () => {
    const savedConfig = await storageService.fetch(AsyncStorageKeys.APPEARANCE_CONFIG);
    if (savedConfig) {
      setAppearanceConfig(JSON.parse(savedConfig));
    }
  }, []);

  const theme = {
    ...(appearanceConfig.theme === 'light' ? lightTheme : darkTheme),
    ...appearanceConfig,
  };

  const saveBackgroundImageUri = useCallback(async (backgroundImageUri: string) => {
    setBackgroundImageUri(backgroundImageUri);
    await storageService.store(AsyncStorageKeys.BACKGROUND_IMAGE_URI, backgroundImageUri);
  }, []);

  const getBackgroundImageUri = useCallback(async () => {
    const savedImage = await storageService.fetch(AsyncStorageKeys.BACKGROUND_IMAGE_URI);
    if (savedImage) {
      setBackgroundImageUri(savedImage);
    }
  }, []);

  const removeBackgroundImageUri = useCallback(async () => {
    setBackgroundImageUri(null);
    await storageService.clear(AsyncStorageKeys.BACKGROUND_IMAGE_URI);
  }, []);

  useEffect(() => {
    getAppearanceConfig();
    getBackgroundImageUri();
  }, [getAppearanceConfig, getBackgroundImageUri]);

  const value = useMemo(
    () => ({
      appearanceConfig,
      updateAppearanceConfig,
      backgroundImageUri,
      saveBackgroundImageUri,
      removeBackgroundImageUri,
    }),
    [
      appearanceConfig,
      backgroundImageUri,
      updateAppearanceConfig,
      saveBackgroundImageUri,
      removeBackgroundImageUri,
    ],
  );

  return (
    <AppearanceContext.Provider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppearanceContext.Provider>
  );
});
