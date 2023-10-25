
import { RouteConfig } from '@dfl/react-security';
import ManufactureListUser from 'modules/inventory/provider/manufacture/components/ManufactureListUser/ManufactureListUser';
import ManufactureListProduct
  from 'modules/inventory/provider/manufacture/components/ManufactureListProduct/ManufactureListProduct';

const manufactureDetailRoutes: RouteConfig = {
  general: {
    path: '/general',
    component: ManufactureListUser,
  },
  product: {
    path: '/product',
    component: ManufactureListProduct,
  },
};

export default manufactureDetailRoutes;
