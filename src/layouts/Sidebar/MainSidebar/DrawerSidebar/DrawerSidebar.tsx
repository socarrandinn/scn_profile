import { Box, Theme } from '@mui/material';
import { ChildrenProps } from '@dfl/mui-react-common';
import { CustomDrawer } from './styled';
import { Scrollbar } from '@dfl/mui-admin-layout';
import { useDrawerMenu } from '../hooks/useRootMenu';

type DrawerSidebarProps = ChildrenProps & {
  onClose: () => void;
  onToggle: () => void;
  open: boolean;
};

export const DrawerSidebar = ({ children, ...props }: DrawerSidebarProps) => {
  const { open, onClose } = props;
  const { _drawerWidth, lgUp } = useDrawerMenu(open);

  const content = (
    <Scrollbar
      sx={{
        maxHeight: '100%',
        '& .simplebar-content': {
          maxHeight: '100%',
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
              width: _drawerWidth,
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
      open={open}
      PaperProps={{
        sx: {
          // @ts-ignore
          backgroundColor: (theme: Theme) => theme.palette.sidebar.background,
          width: _drawerWidth,
        },
      }}
      sx={{ zIndex: (theme: Theme) => theme.zIndex.appBar + 100 }}
      variant='temporary'
    >
      {content}
    </CustomDrawer>
  );
};
