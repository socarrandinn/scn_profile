import { createContext } from 'react';
import { THEMES, ThemeSettingType } from '@dfl/mui-react-common';

// Valores que expondrá el contexto
interface SettingsContextProps {
  settings: ThemeSettingType;
  saveSettings: (settings: ThemeSettingType) => void;
}

// valores iniciales del Setting
export const initialSettings: ThemeSettingType = {
  theme: THEMES.LIGHT,
  responsiveFontSizes: true,
};

export const SettingsContext = createContext<SettingsContextProps>({
  settings: initialSettings,
  saveSettings: (settings: ThemeSettingType) => {},
}); // component props type
