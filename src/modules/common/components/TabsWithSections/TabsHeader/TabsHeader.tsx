import { memo } from 'react';
import { Paper } from '@mui/material';
import { ChildrenProps } from '@dfl/mui-react-common';

const TabsHeader = ({ children }: ChildrenProps) => {
  return (
    <Paper
      sx={{
        borderBottom: 1,
        borderColor: 'divider',
        paddingX: { xs: 2, md: 4 },
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
      }}
    >
      {children}
    </Paper>
  );
};

export default memo(TabsHeader);
