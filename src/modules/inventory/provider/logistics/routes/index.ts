import { LogisticsDetail, LogisticsList } from 'modules/inventory/provider/logistics/pages';
import { RouteConfig } from '@dfl/react-security';
import { LOGISTICS_PERMISSIONS } from 'modules/inventory/provider/logistics/constants/logistics.permissions';
import CreateLogistcs from 'modules/inventory/provider/logistics/pages/CreateLogistics';
import EditLogistics from 'modules/inventory/provider/logistics/pages/EditLogistics';
import { WAREHOUSE_PERMISSIONS } from 'modules/inventory/warehouse/constants';
import CreateStore from 'modules/inventory/warehouse/pages/CreateStore';

const routes: RouteConfig = {
  LogisticsList: {
    path: '/',
    permissions: LOGISTICS_PERMISSIONS.LOGISTICS_VIEW,
    component: LogisticsList,
  },
  CreateLogistics: {
    path: '/create',
    permissions: LOGISTICS_PERMISSIONS.LOGISTICS_WRITE,
    component: CreateLogistcs,
  },
  LogisticStoreCreate: {
    path: '/:id/warehouses/create',
    permissions: WAREHOUSE_PERMISSIONS.WAREHOUSE_WRITE,
    component: CreateStore,
  },
  DetailLogistics: {
    path: '/:id/*',
    permissions: LOGISTICS_PERMISSIONS.LOGISTICS_VIEW,
    component: LogisticsDetail,
  },
  EditLogistics: {
    path: '/:id/edit',
    permissions: LOGISTICS_PERMISSIONS.LOGISTICS_WRITE,
    component: EditLogistics,
  },
};

export default routes;
