import { memo } from 'react';
import { AdminSidebar, SidebarSection } from '@dfl/mui-admin-layout';
import { ChildrenProps, useMenu } from '@dfl/mui-react-common';
import { Box } from '@mui/material';
import { useLocation } from 'react-router';
import { MOCKUP_MENU } from 'modules/demos/layouts/components/SidebarMockup/menu-data';

declare type AdminSidebarProps = ChildrenProps & {
  onClose: () => void;
  open: boolean;
};

const SidebarMockup = (props: AdminSidebarProps) => {
  const sections = useMenu(MOCKUP_MENU);
  const { pathname } = useLocation();

  return (
    <AdminSidebar {...props}>
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

export default memo(SidebarMockup);
