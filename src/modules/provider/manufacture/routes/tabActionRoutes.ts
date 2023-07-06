
import { RouteConfig } from '@dfl/react-security';
import ManufactureListUser from 'modules/provider/manufacture/components/ManufactureListUser/ManufactureListUser';
import ManufactureListProduct
  from 'modules/provider/manufacture/components/ManufactureListProduct/ManufactureListProduct';

const accountRoutes: RouteConfig = {
  general: {
    path: '/general',
    component: ManufactureListUser,
  },
  product: {
    path: '/product',
    component: ManufactureListProduct,
  },
};

export default accountRoutes;
