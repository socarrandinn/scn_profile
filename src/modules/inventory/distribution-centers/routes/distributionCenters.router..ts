import { RouteConfig } from '@dfl/react-security';
import { DistributionCentersGeneralPage, DistributionCenterUsers } from '../pages/tabs';
import DistributionCentersHistoryChangeContainer from '../containers/DistributionCentersHistoryChangeContainer';
import DistributionCentersWarehousePage from '../pages/tabs/DistributionCentersWarehousePage';
import { DistributionCenterProductsList } from 'modules/inventory/distribution-centers/components/DistributionCenterProductsList';
import { DISTRIBUTION_CENTER_PERMISSIONS } from '../constants';
import { PRODUCT_PERMISSIONS } from 'modules/inventory/product/constants';
import { WAREHOUSE_PERMISSIONS } from 'modules/inventory/warehouse/constants';
import { DistributionCenterDelivery } from '../components/DistributionCenterShippingSettings';

const distributionCentersRoutes: RouteConfig = {
  general: {
    path: '/general',
    component: DistributionCentersGeneralPage,
    permissions: [DISTRIBUTION_CENTER_PERMISSIONS.DISTRIBUTION_CENTER_VIEW],
  },
  security: {
    path: '/products',
    component: DistributionCenterProductsList,
    permissions: [PRODUCT_PERMISSIONS.PRODUCT_VIEW],
  },
  warehouses: {
    path: '/warehouses',
    component: DistributionCentersWarehousePage,
    permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
  },
  locations: {
    path: '/shipping-settings/*',
    component: DistributionCenterDelivery,
    permissions: [DISTRIBUTION_CENTER_PERMISSIONS.DISTRIBUTION_CENTER_VIEW],
  },
  users: {
    path: '/users/*',
    component: DistributionCenterUsers,
  },
  history_change: {
    path: '/history_change',
    component: DistributionCentersHistoryChangeContainer,
    permissions: ['ADMIN'],
  },
};

export default distributionCentersRoutes;
