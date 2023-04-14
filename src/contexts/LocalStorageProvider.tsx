import { ReactNode, useContext } from 'react';
import { SettingsContext } from 'contexts/SettingsContext';
import { useLocalStorage } from '@dfl/hook-utils';

type LocalStorageProviderProps = {
  children: ReactNode;
};

const LocalStorageProvider = ({ children }: LocalStorageProviderProps) => {
  const { data: settings, storeData: saveSettings } = useLocalStorage('exportDialogInformation', false);

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

export const useSettings = () => {
  const { settings, saveSettings } = useContext(SettingsContext);

  return {
    settings,
    saveSettings,
  };
};

export default LocalStorageProvider;
