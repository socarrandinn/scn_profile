import { memo } from 'react';
import { ChildrenProps } from '@dfl/mui-react-common';
import { Box, BoxProps } from '@mui/material';

type PageLayoutProps = ChildrenProps & BoxProps;

const PageLayout = ({ children, ...boxProps }: PageLayoutProps) => {
  return (
    <Box mt={boxProps?.mt || 3} {...boxProps}>
      {children}
    </Box>
  );
};

export default memo(PageLayout);
