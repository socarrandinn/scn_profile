import { Toaster } from 'react-hot-toast';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ChildrenProps, toasterOptions } from '@dfl/mui-react-common';
import { useSettings } from 'contexts/SettingsProvider';
import QueryProvider from 'contexts/QueryContext';
import { AuthControl, SecurityProvider, useSecurity, useUser } from '@dfl/react-security';

type AppContentProps = {
  children: any;
};

const AppContent = ({ children }: AppContentProps) => {
  const { isAuthenticated } = useSecurity()
  const { user } = useUser()
  return (
        <>
            <AuthControl/>
            {children}

            <CssBaseline/>
            <Toaster toastOptions={toasterOptions}/>
            <div style={{ position: 'fixed', right: 50, bottom: 10 }}>
                auth: {JSON.stringify(isAuthenticated)}<br/>
                hasUser: {JSON.stringify(!!user)}
            </div>
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
