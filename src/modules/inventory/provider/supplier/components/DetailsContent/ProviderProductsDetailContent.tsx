import { memo } from 'react';
import { RouteLoader } from '@dfl/react-security';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import SupplierRoutes from 'modules/inventory/provider/supplier/routes/supplier-tabs.router';

const ProviderProductsDetailContent = () => {
  const { id } = useParams();
  return (
    <Box>
      <RouteLoader routes={SupplierRoutes} notfoundRedirect={`/inventory/settings/suppliers/${id as string}/general`} />
    </Box>
  );
};
export default memo(ProviderProductsDetailContent);
