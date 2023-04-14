import { ChildrenProps } from '@dfl/mui-react-common';
import { Box } from '@mui/material';
import { memo } from 'react';

type ScrollPaperLayoutProps = ChildrenProps & {
  restMaxHeight?: number;
};

const ScrollPaperLayout = ({ restMaxHeight = 200, children }: ScrollPaperLayoutProps) => {
  return (
    <Box
      sx={(theme) => ({
        overflowY: 'auto',
        display: 'flex',
        scrollbarColor: theme.palette.primary.main,
        flexGrow: 1,
        flexDirection: 'column',
        maxHeight: `calc(100vh - ${restMaxHeight}px)`,
      })}
    >
      {children}
    </Box>
  );
};

export default memo(ScrollPaperLayout);
