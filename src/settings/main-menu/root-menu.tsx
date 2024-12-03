import { IMenuItem } from '@dfl/mui-react-common';
import {
  AssessmentOutlined,
  GppGoodOutlined,
  MonetizationOnOutlined,
  TravelExploreOutlined,
} from '@mui/icons-material';
import { PRODUCT_PERMISSIONS } from 'modules/inventory/product/constants';
import { WAREHOUSE_PERMISSIONS } from 'modules/inventory/warehouse/constants';
import { ORDER_PERMISSIONS } from 'modules/sales/common/constants/order-permissions';
import { ROOT_MENU_ENUM } from './menus.enum';
import { ClientIcon } from 'modules/crm/common/components/icons';
import { ProductIcon } from 'modules/inventory/common/components/Icons/ProductIcon';
import { HomeRootIcon } from 'modules/common/components/icons';

type MenuProps = IMenuItem & {
  menuType: ROOT_MENU_ENUM;
};
export const ROOT_MENU: MenuProps[] = [
  {
    title: 'main_menu.admin.section.general.home',
    path: '/',
    icon: <HomeRootIcon fontSize='small' />,
    menuType: ROOT_MENU_ENUM.HOME,
  },
  {
    title: 'main_menu.admin.section.inventory.title',
    path: '/inventory',
    partialMatch: true,
    icon: <ProductIcon fontSize='small' />,
    permissions: [PRODUCT_PERMISSIONS.PRODUCT_VIEW],
    menuType: ROOT_MENU_ENUM.INVENTORY,
  },
  {
    title: 'main_menu.admin.section.sales.title',
    path: '/sales',
    partialMatch: true,
    icon: <MonetizationOnOutlined fontSize='small' />,
    permissions: [ORDER_PERMISSIONS.ORDER_VIEW],
    menuType: ROOT_MENU_ENUM.SALES,
  },
  {
    title: 'main_menu.admin.section.clients.clients',
    path: '/crm',
    partialMatch: true,
    icon: <ClientIcon fontSize='small' />,
    menuType: ROOT_MENU_ENUM.CRM,
  },
  {
    title: 'main_menu.admin.section.cms.title',
    path: '/cms',
    partialMatch: true,
    icon: <TravelExploreOutlined fontSize='small' />,
    menuType: ROOT_MENU_ENUM.CMS,
  },
  {
    title: 'main_menu.admin.section.reports.title',
    path: '/reports/crm',
    permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
    atLessOne: true,
    icon: <AssessmentOutlined fontSize='small' />,
    menuType: ROOT_MENU_ENUM.REPORTS,
  },
  {
    title: 'main_menu.admin.section.security.title',
    permissions: ['ADMIN'],
    path: '/security/users',
    atLessOne: true,
    icon: <GppGoodOutlined fontSize='small' />,
    menuType: ROOT_MENU_ENUM.SECURITY,
  },
];
