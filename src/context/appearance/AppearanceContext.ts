import { createContext } from 'react';
import { AppearanceContextProps } from './types';

export const AppearanceContext = createContext<AppearanceContextProps | null>(null);
