import { SidebarSection } from '@dfl/mui-admin-layout';
import { useMenu } from '@dfl/mui-react-common';
import { Box, Stack } from '@mui/material';
import { memo } from 'react';
import { useLocation } from 'react-router';
import { useMenuContext } from 'settings/main-menu/context/useMenuContext';
import { MAIN_MENU } from 'settings/main.menu';

const MenuSection = () => {
  const menu = useMenuContext((state) => state.menu);
  const { pathname } = useLocation();
  const sections = useMenu(MAIN_MENU);

  console.log('menu', menu);
  return (
    <Stack sx={{ flexGrow: 1 }}>
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
    </Stack>
  );
};

export default memo(MenuSection);
