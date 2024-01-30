import { useContext } from 'react';
import { AppearanceContext } from '../AppearanceContext';

export const useAppearance = () => {
  const context = useContext(AppearanceContext);
  if (context === null) {
    throw new Error('useAppearance should be used inside AppearanceProvider');
  }
  return context;
};
