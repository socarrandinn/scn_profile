import { memo } from 'react';
import { RouteConfig, RouteLoader } from '@dfl/react-security';
import { Box, BoxProps } from '@mui/material';

const CategoryChildren = ({
  tabActionsRoutes,
  notfoundRedirect,
  props,
}: {
  tabActionsRoutes: RouteConfig;
  notfoundRedirect: string;
  props?: BoxProps;
}) => {
  return (
    <Box {...props}>
      <RouteLoader routes={tabActionsRoutes} notfoundRedirect={notfoundRedirect} />
    </Box>
  );
};

export default memo(CategoryChildren);
