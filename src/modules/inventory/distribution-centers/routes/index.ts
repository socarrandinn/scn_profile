import { DistributionCentersList } from 'modules/inventory/distribution-centers/pages';
import { RouteConfig } from '@dfl/react-security';
import { DISTRIBUTION_CENTER_PERMISSIONS } from 'modules/inventory/distribution-centers/constants/distribution-centers.permissions';
import CreateDistributionCenter from '../pages/CreateDistributionCenter';
import DistributionCenterDetail from '../pages/DistributionCenterDetail';

const routes: RouteConfig = {
  DistributionCentersList: {
    path: '/',
    permissions: DISTRIBUTION_CENTER_PERMISSIONS.DISTRIBUTION_CENTER_VIEW,
    component: DistributionCentersList,
  },
  CreateDistributionCenter: {
    path: '/create',
    permissions: DISTRIBUTION_CENTER_PERMISSIONS.DISTRIBUTION_CENTER_WRITE,
    component: CreateDistributionCenter,
  },
  DetailDistributionCenter: {
    path: '/:id/*',
    permissions: DISTRIBUTION_CENTER_PERMISSIONS.DISTRIBUTION_CENTER_VIEW,
    component: DistributionCenterDetail,
  },
};

export default routes;
