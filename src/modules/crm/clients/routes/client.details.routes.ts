import { RouteConfig } from '@dfl/react-security';

const clientDetailsRoutes: RouteConfig = {
  orders: {
    path: '/orders',
    component: () => 'orders',
  },
  offers: {
    path: '/offers',
    component: () => 'offers',
  },
  recipients: {
    path: '/recipients',
    component: () => 'recipients',
  },
  security: {
    path: '/security',
    component: () => 'security',
  },
  activity: {
    path: '/activity',
    component: () => 'activity',
  },
};

export default clientDetailsRoutes;
