import { IMenuItem } from '@dfl/mui-react-common';
import {
  AssessmentOutlined,
  GppGoodOutlined,
  MonetizationOnOutlined,
  TravelExploreOutlined,
} from '@mui/icons-material';
import { WAREHOUSE_PERMISSIONS } from 'modules/inventory/warehouse/constants';
import { ORDER_PERMISSIONS } from 'modules/sales/common/constants/order-permissions';
import { ROOT_MENU_ENUM } from './menus.enum';
import { ClientIcon } from 'modules/crm/common/components/icons';
import { ProductIcon } from 'modules/inventory/common/components/Icons/ProductIcon';
import { HomeRootIcon } from 'modules/common/components/icons';

type MenuProps = IMenuItem & {
  menuType: ROOT_MENU_ENUM;
  stepTour: string;
};
export const ROOT_MENU: MenuProps[] = [
  {
    title: 'main_menu.admin.section.general.home',
    path: '/',
    icon: <HomeRootIcon fontSize='small' />,
    menuType: ROOT_MENU_ENUM.HOME,
    stepTour: '1',
  },
  {
    title: 'main_menu.admin.section.inventory.title',
    path: '/inventory',
    partialMatch: true,
    icon: <ProductIcon fontSize='small' />,
    menuType: ROOT_MENU_ENUM.INVENTORY,
    stepTour: '2',
  },
  {
    title: 'main_menu.admin.section.sales.title',
    path: '/sales',
    partialMatch: true,
    icon: <MonetizationOnOutlined fontSize='small' />,
    permissions: [ORDER_PERMISSIONS.ORDER_VIEW],
    menuType: ROOT_MENU_ENUM.SALES,
    stepTour: '3',
  },
  {
    title: 'main_menu.admin.section.clients.clients',
    path: '/crm',
    partialMatch: true,
    icon: <ClientIcon fontSize='small' />,
    menuType: ROOT_MENU_ENUM.CRM,
    stepTour: '4',
  },
  {
    title: 'main_menu.admin.section.cms.title',
    path: '/cms',
    partialMatch: true,
    icon: <TravelExploreOutlined fontSize='small' />,
    menuType: ROOT_MENU_ENUM.CMS,
    stepTour: '5',
  },
  {
    title: 'main_menu.admin.section.reports.title',
    path: '/reports/crm',
    permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
    atLessOne: true,
    icon: <AssessmentOutlined fontSize='small' />,
    menuType: ROOT_MENU_ENUM.REPORTS,
    stepTour: '6',
  },
  {
    title: 'main_menu.admin.section.security.title',
    permissions: ['ADMIN'],
    path: '/security/system-users/all',
    atLessOne: true,
    icon: <GppGoodOutlined fontSize='small' />,
    menuType: ROOT_MENU_ENUM.SECURITY,
    stepTour: '7',
  },
];
