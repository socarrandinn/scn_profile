import { memo } from 'react';
import { RouteLoader } from '@dfl/react-security';
import { useParams } from 'react-router-dom';
import logisticRoutes from 'modules/inventory/provider/logistics/routes/router-tabs';

const LogisticsDetailContent = () => {
  const { id } = useParams();
  return (
    <RouteLoader routes={logisticRoutes} notfoundRedirect={`/inventory/settings/logistics/${id as string}/general`} />
  );
};
export default memo(LogisticsDetailContent);
