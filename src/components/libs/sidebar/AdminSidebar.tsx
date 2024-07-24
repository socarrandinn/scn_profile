import { useEffect } from 'react';
import { Box, Drawer, Theme, useMediaQuery } from '@mui/material';
import { ChildrenProps } from '@dfl/mui-react-common';
import { Scrollbar } from '@dfl/mui-admin-layout';

type AdminSidebarProps = ChildrenProps & {
  onClose: () => void;
  open: boolean;
};

export const AdminSidebar = ({ onClose, open, children }: AdminSidebarProps) => {
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'), {
    noSsr: true,
  });

  useEffect(() => {
    if (open) {
      onClose?.();
    }
  }, [onClose, open]);

  const content = (
    <>
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
          }}
        >
          {children}
        </Box>
      </Scrollbar>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor='left'
        open
        PaperProps={{
          sx: {
            // @ts-ignore
            backgroundColor: (theme: Theme) => theme.palette.sidebar.background,
            borderRightColor: 'divider',
            borderRightStyle: 'solid',
            borderRightWidth: 1,
            width: 280,
          },
        }}
        variant='permanent'
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor='left'
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          // @ts-ignore
          backgroundColor: (theme: Theme) => theme.palette.sidebar.background,
          width: 280,
        },
      }}
      sx={{ zIndex: (theme: Theme) => theme.zIndex.appBar + 100 }}
      variant='temporary'
    >
      {content}
    </Drawer>
  );
};
