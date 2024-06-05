import { memo } from 'react';
import { AdminSidebar, SidebarSection } from '@dfl/mui-admin-layout';
import { ChildrenProps, useMenu } from '@dfl/mui-react-common';
import { Box } from '@mui/material';
import { useLocation } from 'react-router';
import { MAIN_MENU } from 'settings/main.menu';
import { LogoSidebar } from 'components/Logo/Logo';
import { useProvider } from 'hooks/useProvider';
import { LOGISTIC_MENU } from 'settings/logistic.menu';
import { useSettings } from 'contexts/SettingsProvider';

declare type AdminSidebarProps = ChildrenProps & {
  onClose: () => void;
  open: boolean;
};

const Sidebar = (props: AdminSidebarProps) => {
  const { pathname } = useLocation();
  const { isDark } = useSettings()
  const { providerId } = useProvider();
  const sections = useMenu(providerId ? LOGISTIC_MENU : MAIN_MENU);

  return (
    <AdminSidebar {...props}>
      <LogoSidebar {...(isDark ? { primary: '#FFF', secondary: '#bdbdbd' } : {})} />

      <Box sx={{ flexGrow: 1 }} className={'cursor-pointer dfl-sidebar-menu'}>
        {sections.map((section) => (
          <SidebarSection
            key={section.title}
            path={pathname}
            sx={{
              mt: 2,
              '& + &': {
                mt: 2,
              },
            }}
            {...section}
          />
        ))}
      </Box>
    </AdminSidebar>
  );
};

export default memo(Sidebar);
