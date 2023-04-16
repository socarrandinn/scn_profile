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
  return (
    <>
      <AuthControl />
      {children}

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
          <AppContent>{children}</AppContent>
        </SecurityProvider>
      </ThemeProvider>
    </QueryProvider>
  );
};
