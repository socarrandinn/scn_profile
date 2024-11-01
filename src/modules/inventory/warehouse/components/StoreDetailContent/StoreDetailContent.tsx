import { memo } from 'react';
import { RouteLoader } from '@dfl/react-security';
import warehouseRoutes from 'modules/inventory/warehouse/routes/warehouse.router.';
import { useWarehouseDetail } from '../../context/WarehouseContext';
import { ConditionContainer, PageLoader } from '@dfl/mui-react-common';

const StoreDetailContent = () => {
  const { warehouseId, isLoading } = useWarehouseDetail();
  return (
    <ConditionContainer active={!isLoading} alternative={<PageLoader />}>
      <RouteLoader routes={warehouseRoutes} notfoundRedirect={`/inventory/warehouses/${warehouseId}/general`} />
    </ConditionContainer>
  );
};

export default memo(StoreDetailContent);
