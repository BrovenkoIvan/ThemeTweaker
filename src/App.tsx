import React, { memo } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppearanceProvider } from './context';
import { MainNavigation } from './navigation/MainNavigation';

export const App = memo(() => {
  return (
    <AppearanceProvider>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </AppearanceProvider>
  );
});
