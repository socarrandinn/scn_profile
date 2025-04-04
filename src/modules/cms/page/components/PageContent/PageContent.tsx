import { memo } from 'react';
import { RouteLoader } from '@dfl/react-security';
import { Box, BoxProps } from '@mui/material';
import { usePageDetails } from '../../context/PageDetailsContext';
import pageDetailsRoutes from '../../routes/page.details.routes';

const PageContent = (props: BoxProps) => {
  const { page } = usePageDetails();

  return (
    <Box {...props}>
      <RouteLoader routes={pageDetailsRoutes} notfoundRedirect={`/cms/pages/${page?._id as string}/general`} />
    </Box>
  );
};

export default memo(PageContent);
