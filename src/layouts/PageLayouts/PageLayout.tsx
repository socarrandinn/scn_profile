import { memo } from 'react';
import { ChildrenProps } from '@dfl/mui-react-common';
import { Box, BoxProps } from '@mui/material';

export type PageLayoutProps = ChildrenProps & BoxProps;

const PageLayout = ({ children, ...boxProps }: PageLayoutProps) => {
  return (
    <Box mt={boxProps?.mt || 2} {...boxProps}>
      {children}
    </Box>
  );
};

export default memo(PageLayout);
