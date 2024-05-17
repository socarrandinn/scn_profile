import { ChildrenProps } from '@dfl/mui-react-common';
import { Drawer } from '@mui/material';
import Box from '@mui/material/Box';
import { Fragment } from 'react';

export const RobotTxtHistoryDrawer = ({
  open,
  onClose,
  children,
}: { open: boolean; onClose: () => void } & ChildrenProps) => {
  return (
    <Fragment>
      <Drawer anchor={'right'} open={open} onClose={onClose}>
        <Box
          sx={{
            padding: '20px 20px 40px 20px',
            height: '100%',
          }}
        >
          {children}
        </Box>
      </Drawer>
    </Fragment>
  );
};
