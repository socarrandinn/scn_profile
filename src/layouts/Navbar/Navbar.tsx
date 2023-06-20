import { memo } from 'react';
import Box from '@mui/material/Box';
import { ChildrenProps } from '@dfl/mui-react-common';
import { Navbar as AdminNavbar, ThemeButton, LanguageButton, DynamicBreadcrumbs } from '@dfl/mui-admin-layout';
import { useSettings } from 'contexts/SettingsProvider';
import Account from 'layouts/Navbar/Account';
import { useTranslation } from 'react-i18next';

declare type NavbarProps = ChildrenProps & {
  onOpenSidebar: () => void;
};

const display = { display: { xs: 'none', sm: 'block' } };

const Navbar = ({ onOpenSidebar }: NavbarProps) => {
  const { toggleTheme, settings } = useSettings();
  const { t } = useTranslation('common');
  // const { isOpen, onOpen, onClose } = useToggle(false);

  return (
        <AdminNavbar onOpenSidebar={onOpenSidebar}>
            <Box sx={{ flexGrow: 1 }}>
                 <DynamicBreadcrumbs />
            </Box>
            <Box sx={display}>
                <ThemeButton toggle={toggleTheme} current={settings.theme} title={t('switchTheme')}/>
            </Box>
            <Box sx={display}>
                <LanguageButton/>
            </Box>

            {/* <NotificationsButton */}
            {/*  tooltipTitle={t('notifications')} */}
            {/*  handleClick={onOpen} */}
            {/*  hideBadge={false} */}
            {/* /> */}

            {/* <NotificationDrawer */}
            {/*  headerText={t('notifications')} */}
            {/*  headerActionText={t('deleteAll')} */}
            {/*  handleActionText={handleActionText} */}
            {/*  open={isOpen} */}
            {/*  onClose={onClose} */}
            {/*  notifications={NotificationsMock} */}
            {/*  isLoading={false} */}
            {/* /> */}

            <Account/>
        </AdminNavbar>
  );
};

export default memo(Navbar);
