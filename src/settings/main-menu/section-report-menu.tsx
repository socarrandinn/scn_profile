import { ROOT_MENU_ENUM } from './menus.enum';
import { IMenu } from '@dfl/mui-react-common';
import { PRODUCT_PERMISSIONS } from 'modules/inventory/product/constants';
import { WAREHOUSE_PERMISSIONS } from 'modules/inventory/warehouse/constants';
import { ORDER_PERMISSIONS } from 'modules/sales/common/constants/order-permissions';

import { WarehouseIcon } from 'modules/inventory/common/components/Icons/WarehouseIcon';
import {
  NotPaidOrderIcon,
  OfferIcon,
  OrderIcon,
  OrderIssuesIcon,
  RefundIcon,
  SubOrderIcon,
} from 'modules/sales/common/components/icons';

import { ClientIcon } from 'modules/crm/common/components/icons';
import { CategoryIcon } from 'modules/inventory/common/components/Icons/CategoryIcon';
import { CATEGORY_PERMISSIONS } from 'modules/inventory/settings/category/constants';
import { ProductIcon } from 'modules/inventory/common/components/Icons/ProductIcon';
import { DistributionCenterIcon } from 'modules/inventory/common/components/Icons/DistributionCenterIcon';

type ROOT_MENU_WITHOUT_REPORTS = Exclude<ROOT_MENU_ENUM, ROOT_MENU_ENUM.REPORTS | ROOT_MENU_ENUM.HOME>;

export const SECTION_REPORTS_MENU: Record<ROOT_MENU_WITHOUT_REPORTS, IMenu[]> = {
  [ROOT_MENU_ENUM.INVENTORY]: [
    {
      title: 'main_menu.admin.section.reports.title',
      prefix: '/reports/inventory',
      permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW, PRODUCT_PERMISSIONS.PRODUCT_VIEW],
      atLessOne: true,
      items: [
        {
          title: 'main_menu.admin.section.inventory.products',
          path: '/reports/inventory/products',
          partialMatch: true,
          icon: <ProductIcon fontSize='small' />,
          permissions: [PRODUCT_PERMISSIONS.PRODUCT_VIEW],
        },
        {
          title: 'main_menu.admin.section.inventory.warehouses',
          path: '/reports/inventory/warehouses',
          partialMatch: true,
          icon: <WarehouseIcon fontSize='small' />,
          permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
        },
        {
          title: 'main_menu.admin.section.inventory.distribution-centers',
          path: '/reports/inventory/distribution-centers',
          partialMatch: true,
          icon: <DistributionCenterIcon fontSize='small' />,
          permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
        },
        {
          title: 'category:list',
          path: '/reports/inventory/settings/categories',
          partialMatch: true,
          icon: <CategoryIcon fontSize='small' />,
          permissions: [CATEGORY_PERMISSIONS.CATEGORY_VIEW],
        },
      ],
    },
  ],
  [ROOT_MENU_ENUM.SALES]: [
    {
      title: 'main_menu.admin.section.general.reports',
      prefix: '/reports/sales',
      permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
      atLessOne: true,
      items: [
        {
          title: 'main_menu.admin.section.sales.paid-orders',
          path: '/reports/sales/orders',
          partialMatch: true,
          icon: <OrderIcon fontSize='small' />,
          permissions: [ORDER_PERMISSIONS.ORDER_VIEW],
        },
        {
          title: 'main_menu.admin.section.sales.suborders',
          path: '/reports/sales/sub-orders',
          partialMatch: true,
          icon: <SubOrderIcon fontSize='small' />,
          permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
        },

        {
          title: 'main_menu.admin.section.sales.issues',
          path: '/reports/sales/issues',
          partialMatch: true,
          icon: <OrderIssuesIcon fontSize='small' />,
          permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
        },
        {
          title: 'main_menu.admin.section.sales.refunds',
          path: '/reports/sales/refunds',
          partialMatch: true,
          icon: <RefundIcon fontSize='small' />,
          permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
        },
        {
          title: 'main_menu.admin.section.sales.offers',
          path: '/reports/sales/offers',
          partialMatch: true,
          icon: <OfferIcon fontSize='small' />,
          permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
        },
        {
          title: 'main_menu.admin.section.sales.pre-orders',
          path: '/reports/sales/pre-orders',
          partialMatch: true,
          icon: <NotPaidOrderIcon fontSize='small' />,
          permissions: [ORDER_PERMISSIONS.ORDER_VIEW],
        },
      ],
    },
  ],
  [ROOT_MENU_ENUM.CRM]: [
    {
      title: 'main_menu.admin.section.general.reports',
      prefix: 'reports/crm',
      atLessOne: true,
      items: [
        {
          title: 'main_menu.admin.section.clients.clients',
          path: '/reports/crm/clients',
          partialMatch: true,
          icon: <ClientIcon fontSize='small' />,
        },
      ],
    },
  ],
  [ROOT_MENU_ENUM.CMS]: [],

  [ROOT_MENU_ENUM.SECURITY]: [],
};
