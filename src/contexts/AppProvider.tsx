import { Toaster } from 'react-hot-toast';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ChildrenProps, CurrencyProvider, toasterOptions } from '@dfl/mui-react-common';
import { useSettings } from 'contexts/SettingsProvider';
import QueryProvider from 'contexts/QueryContext';
import { AuthControl, SecurityProvider } from '@dfl/react-security';
import SpaceSettingsProvider, { useSpaceSettings } from 'modules/security/spaces/contexts/SpaceSettingsProvider';

type AppContentProps = {
  children: any;
};

const AppContent = ({ children }: AppContentProps) => {
  const { settings } = useSpaceSettings();
  return (
    <>
      <CurrencyProvider currency={settings?.currency?.currencyTypes || ''}>
        <AuthControl />
        {children}
      </CurrencyProvider>
      <CssBaseline />
      <Toaster toastOptions={toasterOptions} />
    </>
  );
};

export const AppProvider = ({ children }: ChildrenProps) => {
  const { theme } = useSettings(); // App theme

  return (
    <QueryProvider>
      <ThemeProvider theme={theme}>
        <SecurityProvider>
          <SpaceSettingsProvider>
            <AppContent>{children}</AppContent>
          </SpaceSettingsProvider>
        </SecurityProvider>
      </ThemeProvider>
    </QueryProvider>
  );
};
