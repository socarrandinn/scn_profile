import { memo, useMemo } from 'react';
import Box from '@mui/material/Box';
import { Navbar as AdminNavbar, ThemeButton, DynamicBreadcrumbs } from '@dfl/mui-admin-layout';
import { useSettings } from 'contexts/SettingsProvider';
import Account from 'layouts/Navbar/Account';
import { useTranslation } from 'react-i18next';
import NotificationTooltipContent from 'modules/notification/components/NotificationList/NotificationTooltipContent';
import { Stack, SxProps } from '@mui/material';
import TranslationButton from 'components/TranslationButton';
import { LanguageButton } from 'components/LanguageButton';
import { useMediaQueryMenu } from 'layouts/Sidebar/MainSidebar/hooks/useRootMenu';
import { useMenuContext } from 'settings/main-menu/context/useMenuContext';
import { useMenuHome } from 'settings/main-menu/context/useMenuHome';

const display = { display: { xs: 'none', sm: 'block' } };

const adminNavbarSx: SxProps = {
  boxShadow: 'none',
  borderRadius: 0,
  paddingLeft: { lg: '280px' },
};

const Navbar = () => {
  const { toggleTheme, settings } = useSettings();
  const { onOpen, rootWidth } = useMenuContext();
  const { drawerWidth, open } = useMenuHome();
  const { t } = useTranslation('common');
  const { lgUp } = useMediaQueryMenu();
  const navbarSx = useMemo(
    () => ({
      ...adminNavbarSx,
      ...(!open ? { paddingLeft: lgUp ? `${rootWidth}px` : 0 } : { lg: `${drawerWidth}px` }),
      '& .MuiBreadcrumbs-ol': { marginLeft: open ? 3 : 0 },
    }),
    [drawerWidth, lgUp, open, rootWidth],
  );

  return (
    <AdminNavbar onOpenSidebar={onOpen} sx={navbarSx}>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, marginLeft: open ? 3 : 1 }}>
        <DynamicBreadcrumbs />
      </Box>
      <Box sx={display}>
        <ThemeButton toggle={toggleTheme} current={settings.theme} title={t('switchTheme')} />
      </Box>
      <Stack flexDirection='row' gap={1} sx={{ ...display, display: 'flex', mr: 1, py: 2 }}>
        <Box>
          <LanguageButton /> {/* custom component */}
        </Box>
        <Box>
          <TranslationButton />
        </Box>
      </Stack>
      <Box>
        <NotificationTooltipContent />
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

      <Account />
    </AdminNavbar>
  );
};

export default memo(Navbar);
