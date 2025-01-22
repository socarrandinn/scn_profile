import { Suspense } from 'react';
import { PageTabPaperLayout } from 'layouts/index';
import { PageLoader } from '@dfl/mui-react-common';
import { RouteLoader } from '@dfl/react-security';
import { warehouseUserTabs } from '../../constants/warehouse-user-tabs.details';
import warehouseUserTabRoutes from '../../routes/users-router-tabs';
import { useWarehouseDetail } from '../../context/WarehouseContext';

const WarehouseUsersTabList = () => {
  const { warehouse } = useWarehouseDetail();

  return (
    <PageTabPaperLayout prefix={`/inventory/warehouses/${warehouse?._id as string}/users`} tabs={warehouseUserTabs}>
      <Suspense fallback={<PageLoader size={'screen'} />}>
        <RouteLoader routes={warehouseUserTabRoutes} notfoundRedirect={`/inventory/warehouses/${warehouse?._id as string}/users/system-users`} />
      </Suspense>
    </PageTabPaperLayout>
  );
};
export default WarehouseUsersTabList;
