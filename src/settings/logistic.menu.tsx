import { IMenu } from '@dfl/mui-react-common';
import HomeIcon from '@mui/icons-material/Home';
import { LOGISTICS_PERMISSIONS } from 'modules/inventory/provider/logistics/constants';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import FeedbackIcon from '@mui/icons-material/Feedback';
import StoreIcon from '@mui/icons-material/Store';
import { PRODUCT_PERMISSIONS } from 'modules/inventory/product/constants';
import { WAREHOUSE_PERMISSIONS } from 'modules/inventory/warehouse/constants';
import { STORE_AREA_PERMISSIONS } from 'modules/inventory/settings/warehouse-area/constants';
import PaidIcon from '@mui/icons-material/Paid';

export const LOGISTIC_MENU: IMenu[] = [
  {
    title: 'main_menu.admin.section.general.title',
    items: [
      {
        title: 'main_menu.admin.section.general.home',
        path: '/',
        icon: <HomeIcon fontSize='small' />,
      },
    ],
  },
  {
    title: 'main_menu.admin.section.store.title',
    permissions: [LOGISTICS_PERMISSIONS.LOGISTICS_VIEW],
    items: [
      {
        title: 'main_menu.admin.section.logistic.products',
        path: '/logistic/products',
        icon: <Inventory2Icon fontSize='small' />,
        permissions: [PRODUCT_PERMISSIONS.PRODUCT_VIEW],
      },
      {
        title: 'main_menu.admin.section.logistic.stores',
        path: '/logistic/stores',
        icon: <StoreIcon fontSize='small' />,
        permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
      },
      {
        title: 'main_menu.admin.section.logistic.storeAreas',
        path: '/logistic/storeAreas',
        icon: <StoreIcon fontSize='small' />,
        permissions: [STORE_AREA_PERMISSIONS.STORE_AREA_VIEW],
      },
    ],
  },
  {
    title: 'main_menu.admin.section.sales.title',
    items: [
      {
        title: 'main_menu.admin.section.sales.orders',
        path: '/sales/sales',
        partialMatch: true,
        icon: <LocalMallIcon fontSize='small' />,
      },
      {
        title: 'main_menu.admin.section.sales.issues',
        path: '/sales/issues',
        partialMatch: true,
        icon: <FeedbackIcon fontSize='small' />,
      },
    ],
  },
  {
    title: 'main_menu.admin.section.reports.title',
    prefix: '/reports',
    items: [
      {
        title: 'main_menu.admin.section.reports.inventory',
        path: '/reports/finance',
        partialMatch: true,
        icon: <PaidIcon fontSize='small' />,
        children: [
          {
            title: 'main_menu.admin.section.reports.products',
            path: '/reports/finance',
            partialMatch: true,
          },
          {
            title: 'main_menu.admin.section.reports.inventoryItem',
            path: '/reports/inventory',
            partialMatch: true,
          },
          {
            title: 'main_menu.admin.section.reports.store',
            path: '/reports/finance',
            partialMatch: true,
          },
          {
            title: 'main_menu.admin.section.reports.categories',
            path: '/reports/finance',
            partialMatch: true,
          },
        ],
      },
      {
        title: 'main_menu.admin.section.reports.sales',
        path: '/reports/finance',
        partialMatch: true,
        icon: <PaidIcon fontSize='small' />,
        children: [
          {
            title: 'main_menu.admin.section.reports.finance',
            path: '/reports/finance',
            partialMatch: true,
          },
          {
            title: 'main_menu.admin.section.reports.sales',
            path: '/reports/sales',
            partialMatch: true,
          },
          {
            title: 'main_menu.admin.section.reports.offers',
            path: '/reports/offers',
            partialMatch: true,
          },
          {
            title: 'main_menu.admin.section.reports.issues',
            path: '/reports/issues',
            partialMatch: true,
          },
          {
            title: 'main_menu.admin.section.reports.refunds',
            path: '/reports/refunds',
            partialMatch: true,
          },
        ],
      },
    ],
  },
];
