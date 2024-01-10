import { memo } from 'react';
import { Box } from '@mui/material';
import { RouteLoader } from '@dfl/react-security';
import { useParams } from 'react-router-dom';
import storetRoutes from 'modules/inventory/store/routes/store.router.';

const StoreDetailContent = () => {
  const { id } = useParams();
  return (
    <Box pt={1}>
      {/*  <TabsHeader>
        <RouterTab tabs={storeTabs} prefix={`/inventory/stores/${id as string}`} translationNs={'breadcrumb'} />
      </TabsHeader> */}
      <Box>
        <RouteLoader routes={storetRoutes} notfoundRedirect={`/inventory/stores/${id as string}/general`} />
      </Box>
    </Box>
  );
};

export default memo(StoreDetailContent);
