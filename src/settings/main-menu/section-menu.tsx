import {
  AccountTreeOutlined,
  CodeOutlined,
  DescriptionOutlined,
  ElectricRickshawOutlined,
  EventBusyOutlined,
  LocalShippingOutlined,
  PublishedWithChangesOutlined,
  ReportOutlined,
  ScreenSearchDesktopOutlined,
  StorefrontOutlined,
} from '@mui/icons-material';
import { ROOT_MENU_ENUM } from './menus.enum';
import { IMenu } from '@dfl/mui-react-common';
import { PRODUCT_PERMISSIONS } from 'modules/inventory/product/constants';
import { WAREHOUSE_PERMISSIONS } from 'modules/inventory/warehouse/constants';
import { ORDER_PERMISSIONS } from 'modules/sales/common/constants/order-permissions';
import { SupplierIcon } from 'modules/inventory/common/components/Icons/SupplierIcon';
import { LogisticIcon } from 'modules/inventory/common/components/Icons/LogisticIcon';
import { ManufactureIcon } from 'modules/inventory/common/components/Icons/ManufactureIcon';
import { LOGISTICS_PERMISSIONS } from 'modules/inventory/provider/logistics/constants';
import { MANUFACTURE_PERMISSIONS } from 'modules/inventory/provider/manufacture/constants';
import { SUPPLIER_PERMISSIONS } from 'modules/inventory/provider/supplier/constants';
import { CATEGORY_PERMISSIONS } from 'modules/inventory/settings/category/constants';
import { CategoryIcon } from 'modules/inventory/common/components/Icons/CategoryIcon';
import { WAREHOUSE_AREA_PERMISSIONS } from 'modules/inventory/settings/warehouse-area/constants';
import { TAGS_PERMISSIONS } from 'modules/inventory/settings/tags/constants';
import { STOCK_REDUCTION_CAUSE_PERMISSIONS } from 'modules/inventory/settings/stock-reduction-cause/constants';
import { WarehouseIcon } from 'modules/inventory/common/components/Icons/WarehouseIcon';
import {
  NotPaidOrderIcon,
  OfferIcon,
  OrderIcon,
  OrderIssuesIcon,
  RefundIcon,
  SubOrderIcon,
} from 'modules/sales/common/components/icons';
import { WAREHOUSE_PICKUP_PERMISSIONS } from 'modules/sales/settings/warehouse-pickup/constants';
import { HOME_DELIVERY_PERMISSIONS } from 'modules/sales/settings/home-delivery/constants';
import { CAUSES_INCIDENCE_PERMISSIONS } from 'modules/sales/settings/causes-incidence/constants';
import { ORDER_STATUS_PERMISSIONS } from 'modules/sales/settings/order-status/constants';
import { REPORT_CAUSE_PERMISSIONS } from 'modules/crm/settings/report-cause/constants';
import { DISALLOWED_WORD_PERMISSIONS } from 'modules/crm/settings/disallowed-word/constants';
import { AudiLogIcon, RoleIcon, UserIcon } from 'modules/security/common/components/icons';
import { DistributionCenterIcon } from 'modules/inventory/common/components/Icons/DistributionCenterIcon';
import { ClientIcon, ReviewIcon } from 'modules/crm/common/components/icons';
import { WarehouseAreaIcon } from 'modules/inventory/common/components/Icons/WarehouseAreaIcon';
import { ReductionCauseIcon } from 'modules/inventory/common/components/Icons/ReductionCauseIcon';
import { TagsIcon } from 'modules/inventory/common/components/Icons/TagsIcon';
import { SECTION_REPORTS_MENU } from './section-report-menu';
import { ProductIcon } from 'modules/inventory/common/components/Icons/ProductIcon';
import { HomeIcon } from 'modules/common/components/icons';
import { ProviderUserIcon } from 'modules/security/common/components/icons/ProviderUserIcon';
import { DISTRIBUTION_CENTER_PERMISSIONS } from 'modules/inventory/distribution-centers/constants';

export const SECTION_MENUS: Record<ROOT_MENU_ENUM, IMenu[]> = {
  [ROOT_MENU_ENUM.HOME]: [
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
  ],
  [ROOT_MENU_ENUM.INVENTORY]: [
    {
      title: 'main_menu.admin.section.inventory.title',
      prefix: '/inventory',
      atLessOne: true,
      items: [
        {
          title: 'main_menu.admin.section.inventory.products',
          path: '/inventory/products',
          partialMatch: true,
          icon: <ProductIcon fontSize='small' />,
          permissions: [PRODUCT_PERMISSIONS.PRODUCT_VIEW],
        },
        {
          title: 'main_menu.admin.section.inventory.warehouses',
          path: '/inventory/warehouses',
          partialMatch: true,
          icon: <WarehouseIcon fontSize='small' />,
          permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
        },
        {
          title: 'main_menu.admin.section.inventory.distribution-centers',
          path: '/inventory/distribution-centers',
          partialMatch: true,
          icon: <DistributionCenterIcon fontSize='small' />,
          permissions: [DISTRIBUTION_CENTER_PERMISSIONS.DISTRIBUTION_CENTER_VIEW],
        },
      ],
    },
    {
      title: 'main_menu.admin.section.general.providers',
      prefix: '/inventory/settings',
      atLessOne: true,
      items: [
        {
          title: 'supplier:list',
          path: '/inventory/settings/suppliers',
          partialMatch: true,
          icon: <SupplierIcon fontSize='small' />,
          permissions: [SUPPLIER_PERMISSIONS.SUPPLIER_VIEW],
        },
        {
          title: 'logistics:list',
          path: '/inventory/settings/logistics',
          partialMatch: true,
          icon: <LogisticIcon fontSize='small' />,
          permissions: [LOGISTICS_PERMISSIONS.LOGISTICS_VIEW],
        },
        {
          title: 'manufacture:list',
          path: '/inventory/settings/manufactures',
          partialMatch: true,
          icon: <ManufactureIcon fontSize='small' />,
          permissions: [MANUFACTURE_PERMISSIONS.MANUFACTURE_VIEW],
        },
      ],
    },

    ...SECTION_REPORTS_MENU[ROOT_MENU_ENUM.INVENTORY],

    {
      title: 'main_menu.admin.section.inventory.settings',
      prefix: '/inventory/settings',
      permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW, PRODUCT_PERMISSIONS.PRODUCT_VIEW],
      atLessOne: true,
      items: [
        {
          title: 'category:list',
          path: '/inventory/settings/categories',
          partialMatch: true,
          icon: <CategoryIcon fontSize='small' />,
          permissions: [CATEGORY_PERMISSIONS.CATEGORY_VIEW],
        },
        {
          title: 'warehouseArea:list',
          path: '/inventory/settings/warehouse-areas',
          partialMatch: true,
          icon: <WarehouseAreaIcon fontSize='small' />,
          permissions: [WAREHOUSE_AREA_PERMISSIONS.WAREHOUSE_AREA_VIEW],
        },
        {
          title: 'tags:list',
          path: '/inventory/settings/tags',
          partialMatch: true,
          icon: <TagsIcon fontSize='small' />,
          permissions: [TAGS_PERMISSIONS.TAGS_VIEW],
        },
        {
          title: 'stockReductionCause:list',
          path: '/inventory/settings/stock-reduction-causes',
          partialMatch: true,
          icon: <ReductionCauseIcon fontSize='small' />,
          permissions: [STOCK_REDUCTION_CAUSE_PERMISSIONS.STOCK_REDUCTION_CAUSE_VIEW],
        },
      ],
    },
  ],
  [ROOT_MENU_ENUM.SALES]: [
    {
      title: 'main_menu.admin.section.sales.title',
      prefix: '/sales',
      permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
      atLessOne: true,
      items: [
        {
          title: 'main_menu.admin.section.sales.paid-orders',
          path: '/sales/orders',
          partialMatch: true,
          icon: <OrderIcon fontSize='small' />,
          permissions: [ORDER_PERMISSIONS.ORDER_VIEW],
        },
        {
          title: 'main_menu.admin.section.sales.suborders',
          path: '/sales/suborders',
          partialMatch: true,
          icon: <SubOrderIcon fontSize='small' />,
          permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
        },

        {
          title: 'main_menu.admin.section.sales.issues',
          path: '/sales/issues',
          partialMatch: true,
          icon: <OrderIssuesIcon fontSize='small' />,
          permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
        },
        {
          title: 'main_menu.admin.section.sales.refunds',
          path: '/sales/refunds',
          partialMatch: true,
          icon: <RefundIcon fontSize='small' />,
          permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
        },
        {
          title: 'main_menu.admin.section.sales.offers',
          path: '/sales/offers',
          partialMatch: true,
          icon: <OfferIcon fontSize='small' />,
          permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
        },
        {
          title: 'main_menu.admin.section.sales.pre-orders',
          path: '/sales/pre-orders',
          partialMatch: true,
          icon: <NotPaidOrderIcon fontSize='small' />,
          permissions: [ORDER_PERMISSIONS.ORDER_VIEW],
        },
        /* {
          title: 'main_menu.admin.section.sales.settings',
          path: '/sales/settings',
          partialMatch: true,
          icon: <SettingsOutlined fontSize='small' />,
          permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
        }, */
      ],
    },

    /* {
      title: 'main_menu.admin.section.sales.offers',
      prefix: '/sales/settings',
      permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
      atLessOne: true,
      items: [
        {
          title: 'offers:product_discounts:title',
          path: '/sales/offers/settings/product_discounts',
          partialMatch: true,
          icon: <Inventory2Outlined fontSize='small' />,
          permissions: [PRODUCT_DISCOUNT_PERMISSIONS.PRODUCT_DISCOUNT_VIEW],
        },
        {
          title: 'offers:offer_orders:title',
          path: '/sales/offers/settings/offer_orders',
          partialMatch: true,
          icon: <OfferOrderIcon fontSize='small' />,
          permissions: [],
        },
        {
          title: 'offers:discount_coupons:title',
          path: '/sales/offers/settings/coupons',
          partialMatch: true,
          icon: <CouponIcon fontSize='small' />,
          permissions: [PRODUCT_DISCOUNT_PERMISSIONS.PRODUCT_DISCOUNT_VIEW],
        },
        {
          title: 'offers:offers_to_clients:title',
          path: '/sales/offers/settings/offers_to_clients',
          partialMatch: true,
          icon: <VolunteerActivismOutlined fontSize='small' />,
          permissions: [],
        },
      ],
    }, */
    ...SECTION_REPORTS_MENU[ROOT_MENU_ENUM.SALES],
    {
      title: 'main_menu.admin.section.general.settings',
      prefix: '/sales/settings',
      permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
      atLessOne: true,
      items: [
        {
          title: 'warehousePickup:list',
          path: '/sales/settings/warehouse-pickup',
          partialMatch: true,
          icon: <StorefrontOutlined fontSize='small' />,
          permissions: [WAREHOUSE_PICKUP_PERMISSIONS.WAREHOUSE_PICKUP_VIEW],
        },
        {
          title: 'homeDelivery:list',
          path: '/sales/settings/home-deliveries',
          partialMatch: true,
          icon: <LocalShippingOutlined fontSize='small' />,
          permissions: [HOME_DELIVERY_PERMISSIONS.HOME_DELIVERY_VIEW],
        },
        {
          title: 'expressDelivery:list',
          path: '/sales/settings/express-deliveries',
          partialMatch: true,
          icon: <ElectricRickshawOutlined fontSize='small' />,
          permissions: [WAREHOUSE_PICKUP_PERMISSIONS.WAREHOUSE_PICKUP_VIEW],
        },

        {
          title: 'orderStatus:list',
          path: '/sales/settings/order-status',
          partialMatch: true,
          icon: <PublishedWithChangesOutlined fontSize='small' />,
          permissions: [ORDER_STATUS_PERMISSIONS.ORDER_STATUS_VIEW],
        },
        {
          title: 'causesIncidence:list',
          path: '/sales/settings/causes-incidence',
          partialMatch: true,
          icon: <EventBusyOutlined fontSize='small' />,
          permissions: [CAUSES_INCIDENCE_PERMISSIONS.CAUSES_INCIDENCE_VIEW],
        },
      ],
    },
  ],
  [ROOT_MENU_ENUM.CRM]: [
    {
      title: 'main_menu.admin.section.clients.title',
      prefix: '/crm',
      atLessOne: true,
      items: [
        {
          title: 'main_menu.admin.section.clients.clients',
          path: '/crm/clients',
          partialMatch: true,
          icon: <ClientIcon fontSize='small' />,
        },
        {
          title: 'main_menu.admin.section.clients.reviews',
          path: '/crm/reviews',
          partialMatch: true,
          icon: <ReviewIcon fontSize='small' />,
          // chip: <ReviewPendingChip />,
        },
      ],
    },
    ...SECTION_REPORTS_MENU[ROOT_MENU_ENUM.CRM],
    {
      title: 'main_menu.admin.section.general.settings',
      prefix: '/crm/settings',
      atLessOne: true,
      items: [
        {
          title: 'reportCause:list',
          path: '/crm/settings/report-causes',
          partialMatch: true,
          icon: <ReportOutlined fontSize='small' />,
          permissions: [REPORT_CAUSE_PERMISSIONS.REPORT_CAUSE_VIEW],
        },
        {
          title: 'disallowedWord:list',
          path: '/crm/settings/disallowed-words',
          partialMatch: true,
          icon: <DescriptionOutlined fontSize='small' />,
          permissions: [DISALLOWED_WORD_PERMISSIONS.DISALLOWED_WORD_VIEW],
        },
      ],
    },
  ],
  [ROOT_MENU_ENUM.CMS]: [
    {
      title: 'main_menu.admin.section.cms.seo',
      prefix: '/cms/seo',
      atLessOne: true,
      items: [
        {
          title: 'seo:settings:robot_txt:title',
          path: '/cms/seo/robot_txt',
          partialMatch: true,
          icon: <CodeOutlined fontSize='small' />,
        },
        {
          title: 'seo:settings:static_site_map_item:title',
          path: '/cms/seo/static_site_map_items/general',
          partialMatch: true,
          icon: <ScreenSearchDesktopOutlined fontSize='small' />,
        },
        {
          title: 'seo:settings:sitemap:title',
          path: '/cms/seo/sitemap',
          partialMatch: true,
          icon: <AccountTreeOutlined fontSize='small' />,
        },
      ],
    },
  ],
  [ROOT_MENU_ENUM.REPORTS]: [
    {
      ...SECTION_REPORTS_MENU[ROOT_MENU_ENUM.INVENTORY][0],
      title: 'main_menu.admin.section.reports.inventory',
    },
    {
      ...SECTION_REPORTS_MENU[ROOT_MENU_ENUM.SALES][0],
      title: 'main_menu.admin.section.reports.sales',
    },
    {
      ...SECTION_REPORTS_MENU[ROOT_MENU_ENUM.CRM][0],
      title: 'main_menu.admin.section.reports.clients',
    },
  ],
  [ROOT_MENU_ENUM.SECURITY]: [
    {
      title: 'main_menu.admin.section.security.title',
      permissions: ['ADMIN'],
      prefix: '/security',
      atLessOne: true,
      items: [
        {
          title: 'main_menu.admin.section.security.users',
          path: '/security/users',
          icon: <UserIcon fontSize='small' />,
          permissions: ['ADMIN'],
          partialMatch: true,
        },
        {
          title: 'main_menu.admin.section.security.usersProviders',
          path: '/security/providers-users',
          icon: <ProviderUserIcon fontSize='small' />,
          permissions: ['ADMIN'],
          partialMatch: true,
        },
        {
          title: 'main_menu.admin.section.security.roles',
          path: '/security/roles',
          partialMatch: true,
          icon: <RoleIcon fontSize='small' />,
          permissions: ['ADMIN'],
        },
        {
          title: 'main_menu.admin.section.security.auditLogs',
          path: '/security/audit-logs',
          partialMatch: true,
          icon: <AudiLogIcon fontSize='small' />,
          permissions: ['ADMIN'],
        },
      ],
    },
  ],
};
