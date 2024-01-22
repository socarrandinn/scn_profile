import { memo } from 'react';
import { Box } from '@mui/material';
import { RouteLoader } from '@dfl/react-security';
import storesRoutes from 'modules/inventory/store/routes/store.router.';
import { useParams } from 'react-router-dom';

const StoreDetailContent = () => {
  const { id } = useParams();
  return (
    <Box>
      <RouteLoader routes={storesRoutes} notfoundRedirect={`/inventory/stores/${id as string}/general`} />
    </Box>
  );
};

export default memo(StoreDetailContent);
