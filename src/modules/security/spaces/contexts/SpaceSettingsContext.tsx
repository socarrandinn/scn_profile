import { createContext } from 'react';

interface SettingsContextProps {
  settings: any;
  loading: boolean;
}

export const SpaceSettingsContext = createContext<SettingsContextProps>({
  settings: {},
  loading: false,
});
