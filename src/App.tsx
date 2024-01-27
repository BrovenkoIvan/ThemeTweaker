import React, { memo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigation } from './navigation';

export const App = memo(() => {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
});
