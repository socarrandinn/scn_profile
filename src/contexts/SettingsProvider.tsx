import { ReactNode, useCallback, useContext, useMemo } from 'react';
import { initialSettings, SettingsContext } from 'contexts/SettingsContext';
import { useLocalStorage } from '@dfl/hook-utils';
import { createTheme, responsiveFontSizes } from '@mui/material';
import { THEMES } from '@dfl/mui-react-common';
import { THEME_SETTING } from 'settings/theme';
import { esES, enUS } from '@mui/material/locale';
import { useTranslateValue } from 'hooks/useTranslateValue';

type SettingsProviderProps = {
  children: ReactNode;
};

const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const { data: settings, storeData: saveSettings } = useLocalStorage('settings', initialSettings);

  return (
    <SettingsContext.Provider
      value={{
        settings,
        saveSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

const localesMap: Record<string, any> = {
  es: esES,
  en: enUS,
};

export const useSettings = () => {
  const { settings, saveSettings } = useContext(SettingsContext);
  const { locale } = useTranslateValue();
  const isDark = useMemo(() => settings.theme === 'dark', [settings]);

  const toggleTheme = useCallback(() => {
    settings.theme = settings.theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    saveSettings({ ...settings });
  }, [settings, saveSettings]);

  const theme = useMemo(() => {
    // @ts-ignore

    const currentTheme: Theme = THEME_SETTING[settings.theme];

    // locale
    const currentLocale = localesMap[locale] || esES;

    let theme = createTheme(currentTheme, currentLocale);

    theme = responsiveFontSizes(theme);

    // theme shadows
    theme.shadows[1] = '6px 6px 20px #0000001A';
    theme.shadows[2] = '0px 0px 21px 1px rgba(0, 0, 0, 0.07)';
    theme.shadows[3] = '0px 10px 30px rgba(0, 0, 0, 0.1)';
    theme.shadows[4] = '0px 7px 30px 3px rgba(0, 0, 0, 0.05)';
    return theme;
  }, [settings, locale]);

  return {
    settings,
    theme,
    saveSettings,
    toggleTheme,
    isDark,
  };
};

export default SettingsProvider;
