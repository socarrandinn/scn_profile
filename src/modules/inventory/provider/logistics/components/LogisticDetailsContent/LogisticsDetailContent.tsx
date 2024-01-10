import { memo } from 'react';
import { RouteLoader } from '@dfl/react-security';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import logisticRoutes from 'modules/inventory/provider/logistics/routes/tabLogisticsRouter';

const LogisticsDetailContent = () => {
  const { id } = useParams();
  return (
    <Box pt={1}>
      <Box>
        <RouteLoader routes={logisticRoutes} notfoundRedirect={`/inventory/settings/logistics/${id as string}/general`} />
      </Box>
    </Box>
  );
};
export default memo(LogisticsDetailContent);
