import { RouteConfig } from '@dfl/react-security';
import PreOrderGeneralDetails from '../containers/tabs/PreOrderGeneralDetails';
import { OrderActivitiesInfo } from 'modules/sales/common/components/OrderDetails/OrderActivitiesInfo';

const preOrderRouters: RouteConfig = {
  general: {
    path: '/general',
    component: PreOrderGeneralDetails,
  },
  activity: {
    path: '/activity',
    component: OrderActivitiesInfo,
  },
};

export default preOrderRouters;
