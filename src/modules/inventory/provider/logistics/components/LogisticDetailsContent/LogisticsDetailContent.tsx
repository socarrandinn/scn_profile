import { memo } from 'react';
import { RouteLoader } from '@dfl/react-security';
import logisticRoutes from 'modules/inventory/provider/logistics/routes/router-tabs';
import { ConditionContainer, PageLoader } from '@dfl/mui-react-common';
import { useLogisticsDetailContext } from '../../context/LogisticDetail';

const LogisticsDetailContent = () => {
  const { logisticId, isLoading } = useLogisticsDetailContext();
  return (
    <ConditionContainer active={!isLoading} alternative={<PageLoader />}>
      <RouteLoader
        routes={logisticRoutes}
        notfoundRedirect={`/inventory/settings/logistics/${logisticId as string}/general`}
      />
    </ConditionContainer>
  );
};
export default memo(LogisticsDetailContent);
