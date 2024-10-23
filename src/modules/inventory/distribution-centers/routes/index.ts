import { DistributionCentersList } from 'modules/inventory/distribution-centers/pages';
import { RouteConfig } from '@dfl/react-security';
import { DISTRIBUTION_CENTERS_PERMISSIONS } from 'modules/inventory/distribution-centers/constants/distribution-centers.permissions';
import CreateDistributionCenter from '../pages/CreateDistributionCenter';
import DistributionCenterDetail from '../pages/DistributionCenterDetail';

const routes: RouteConfig = {
  DistributionCentersList: {
    path: '/',
    permissions: DISTRIBUTION_CENTERS_PERMISSIONS.DISTRIBUTION_CENTERS_VIEW,
    component: DistributionCentersList,
  },
  CreateDistributionCenter: {
    path: '/create',
    permissions: DISTRIBUTION_CENTERS_PERMISSIONS.DISTRIBUTION_CENTERS_WRITE,
    component: CreateDistributionCenter,
  },
  DetailDistributionCenter: {
    path: '/:id/*',
    permissions: DISTRIBUTION_CENTERS_PERMISSIONS.DISTRIBUTION_CENTERS_WRITE,
    component: DistributionCenterDetail,
  },
};

export default routes;
