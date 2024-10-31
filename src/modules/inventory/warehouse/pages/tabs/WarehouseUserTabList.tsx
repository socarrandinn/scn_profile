import { Suspense } from 'react';
import { PageTabPaperLayout } from 'layouts/index';
import { PageLoader } from '@dfl/mui-react-common';
import { RouteLoader } from '@dfl/react-security';
import { useWarehouseDetail } from '../../context/WarehouseContext';
import { commonUserInviteTabs } from 'modules/security/users-invite/constants/users-invite-tabs.details';
import warehouseUserTabRoutes from '../../routes/users-router-tabs';

const WarehouseUserTabList = () => {
  const { warehouseId } = useWarehouseDetail();
  return (
    <PageTabPaperLayout
      prefix={`/inventory/warehouses/${warehouseId}/users`}
      tabs={commonUserInviteTabs('/inventory/warehouses')}
    >
      <Suspense fallback={<PageLoader size={'screen'} />}>
        <RouteLoader
          routes={warehouseUserTabRoutes}
          notfoundRedirect={`/inventory/warehouses/${warehouseId}/users/users`}
        />
      </Suspense>
    </PageTabPaperLayout>
  );
};
export default WarehouseUserTabList;
