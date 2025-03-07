import { RouteConfig } from '@dfl/react-security';
import SubOrderGeneralDetails from '../containers/tabs/SubOrderGeneralDetails';
import { OrderActivitiesInfo } from 'modules/sales/common/components/OrderDetails/OrderActivitiesInfo';

const subOrderRouters: RouteConfig = {
  general: {
    path: '/general',
    component: SubOrderGeneralDetails,
  },
  activity: {
    path: '/activity',
    component: OrderActivitiesInfo
  },
};

export default subOrderRouters;
