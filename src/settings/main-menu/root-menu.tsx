import { IMenuItem } from '@dfl/mui-react-common';
import {
  AssessmentOutlined,
  GppGoodOutlined,
  GridViewOutlined,
  Inventory2Outlined,
  MonetizationOnOutlined,
  PersonAddAltOutlined,
  TravelExploreOutlined,
} from '@mui/icons-material';
import { PRODUCT_PERMISSIONS } from 'modules/inventory/product/constants';
import { WAREHOUSE_PERMISSIONS } from 'modules/inventory/warehouse/constants';
import { ORDER_PERMISSIONS } from 'modules/sales/common/constants/order-permissions';

export const ROOT_MENU: IMenuItem[] = [
  {
    title: 'main_menu.admin.section.general.home',
    path: '/',
    icon: <GridViewOutlined fontSize='small' />,
  },
  {
    title: 'main_menu.admin.section.warehouse.products',
    path: '/inventory',
    partialMatch: true,
    icon: <Inventory2Outlined fontSize='small' />,
    permissions: [PRODUCT_PERMISSIONS.PRODUCT_VIEW],
  },
  {
    title: 'main_menu.admin.section.sales.paid-orders',
    path: '/sales/orders',
    partialMatch: true,
    icon: <MonetizationOnOutlined fontSize='small' />,
    permissions: [ORDER_PERMISSIONS.ORDER_VIEW],
  },
  {
    title: 'main_menu.admin.section.clients.clients',
    path: '/crm/clients',
    partialMatch: true,
    icon: <PersonAddAltOutlined fontSize='small' />,
  },
  {
    title: 'main_menu.admin.section.cms.seo',
    path: '/cms',
    partialMatch: true,
    icon: <TravelExploreOutlined fontSize='small' />,
  },
  {
    title: 'main_menu.admin.section.reports.title',
    path: '/reports',
    permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
    atLessOne: true,
    icon: <AssessmentOutlined fontSize='small' />,
  },
  {
    title: 'main_menu.admin.section.security.title',
    permissions: ['ADMIN'],
    path: '/security/users',
    atLessOne: true,
    icon: <GppGoodOutlined fontSize='small' />,
  },
];
