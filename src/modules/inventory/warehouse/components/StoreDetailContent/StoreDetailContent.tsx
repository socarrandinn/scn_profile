import { memo } from 'react';
import { Box } from '@mui/material';
import { RouteLoader } from '@dfl/react-security';
import warehouseRoutes from 'modules/inventory/warehouse/routes/warehouse.router.';
import { useParams } from 'react-router-dom';

const StoreDetailContent = () => {
  const { id } = useParams();
  return (
    <Box>
      <RouteLoader routes={warehouseRoutes} notfoundRedirect={`/inventory/warehouses/${id as string}/general`} />
    </Box>
  );
};

export default memo(StoreDetailContent);
