import { RouteConfig } from '@dfl/react-security';
import { Portal } from '@mui/material';

const productDetailsRoutes: RouteConfig = {
  general: {
    path: '/general',
    component: Portal,
  },
  address: {
    path: '/work',
    component: Portal,
  },
  contacts: {
    path: '/free-time',
    component: Portal,
  },
};

export default productDetailsRoutes;
