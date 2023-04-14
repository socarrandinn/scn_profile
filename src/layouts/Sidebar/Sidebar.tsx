import { memo } from 'react';
import { AdminSidebar, SidebarSection } from '@dfl/mui-admin-layout';
import { ChildrenProps, useMenu } from '@dfl/mui-react-common';
import { Box } from '@mui/material';
import { useLocation } from 'react-router';
import { MAIN_MENU } from 'settings/main.menu';
import { SpaceSelector } from 'modules/security/spaces/components/SpaceSelector';

declare type AdminSidebarProps = ChildrenProps & {
  onClose: () => void;
  open: boolean;
};

const Sidebar = (props: AdminSidebarProps) => {
  const sections = useMenu(MAIN_MENU);
  const { pathname } = useLocation();

  return (
    <AdminSidebar {...props}>
      <SpaceSelector />

      <Box sx={{ flexGrow: 1, mt: -2 }} className={'cursor-pointer'}>
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
