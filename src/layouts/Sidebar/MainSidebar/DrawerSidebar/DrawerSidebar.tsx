import { Box, Stack, Theme } from '@mui/material';
import { ChildrenProps } from '@dfl/mui-react-common';
import { CustomDrawer } from './styled';
import { Scrollbar } from '@dfl/mui-admin-layout';
import { useMediaQueryMenu } from '../hooks/useRootMenu';
import { ReactNode } from 'react';
import { useMenuContext } from 'settings/main-menu/context/useMenuContext';
import { useMenuHome } from 'settings/main-menu/context/useMenuHome';

type DrawerSidebarProps = ChildrenProps & {
  rootMenu: ReactNode;
};

export const DrawerSidebar = ({ children, rootMenu }: DrawerSidebarProps) => {
  const { drawerWidth, isHome } = useMenuHome();
  const { onClose, isOpen } = useMenuContext((state) => state);
  const { lgUp } = useMediaQueryMenu();

  const content = (
    <Stack
      flexDirection={'row'}
      sx={{
        maxHeight: '100vh',
        '& .simplebar-content': {
          maxHeight: '100vh',
        },
      }}
    >
      <Scroll>{rootMenu}</Scroll>

      {!isHome && isOpen && <Scroll sx={{ flex: 1 }}>{children}</Scroll>}
    </Stack>
  );

  if (lgUp) {
    return (
      <>
        <CustomDrawer
          anchor='left'
          open
          PaperProps={{
            sx: {
              // @ts-ignore
              backgroundColor: (theme: Theme) => theme.palette.sidebar.background,
              borderRightColor: 'divider',
              borderRightStyle: 'solid',
              borderRightWidth: 1,
              width: drawerWidth,
            },
          }}
          variant='permanent'
        >
          {content}
        </CustomDrawer>
      </>
    );
  }

  return (
    <CustomDrawer
      anchor='left'
      onClose={onClose}
      open={isOpen}
      PaperProps={{
        sx: {
          // @ts-ignore
          backgroundColor: (theme: Theme) => theme.palette.sidebar.background,
          width: drawerWidth,
        },
      }}
      sx={{ zIndex: (theme: Theme) => theme.zIndex.appBar + 100 }}
      variant='temporary'
    >
      {content}
    </CustomDrawer>
  );
};

const Scroll = ({ children, sx }: ChildrenProps & { sx?: any }) => {
  return (
    <Scrollbar
      sx={{
        ...sx,
        maxHeight: '100vh',
        '& .simplebar-content': {
          maxHeight: '100vh',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          position: 'relative',
        }}
      >
        {children}
      </Box>
    </Scrollbar>
  );
};
