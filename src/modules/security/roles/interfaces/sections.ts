import { INCIDENCE_PERMISSIONS } from 'modules/sales/incidence/constants';
import { IModule, Permission } from './IRole';
import {
  ClientDisallowedWordPermissions,
  ClientReportCausePermissions,
  ClientReviewPermissions,
  ClientUsersPermissions,
  ContentBannerPermissions,
  ContentCollectionPermissions,
  ContentMediaPermissions,
  ContentNavigationPermissions,
  ContentTestimonialPermissions,
  InventoryDistributionCenterPermissions,
  InventoryProductPermissions,
  InventoryProvidersPermissions,
  InventoryStockPermissions,
  InventoryWarehousePermissions,
  ReportPermissions,
  SalesOfferPermissions,
  SalesOrderPermissions,
  SalesShippingPermissions,
  SalesStatusPermissions,
  SalesSubOrderPermissions,
  SalesUnPaidOrderPermissions,
  SecurityRolePermissions,
  SecurityUserPermissions,
} from './permissions';
import { CAUSES_INCIDENCE_PERMISSIONS } from 'modules/sales/settings/causes-incidence/constants';
import { PAGE_PERMISSIONS } from 'modules/cms/page/constants';

export const permissionSection: Record<string, IModule[]> = {
  security: [
    { label: 'users', permissions: Object.values(SecurityUserPermissions) as unknown as Permission[] },
    { label: 'roles', permissions: Object.values(SecurityRolePermissions) as unknown as Permission[] },
  ],
  inventory: [
    { label: 'products', permissions: Object.values(InventoryProductPermissions) as unknown as Permission[] },
    { label: 'warehouses', permissions: Object.values(InventoryWarehousePermissions) as unknown as Permission[] },
    { label: 'stock', permissions: Object.values(InventoryStockPermissions) as unknown as Permission[] },
    {
      label: 'distribution_centers',
      permissions: Object.values(InventoryDistributionCenterPermissions) as unknown as Permission[],
    },
    { label: 'providers', permissions: Object.values(InventoryProvidersPermissions) as unknown as Permission[] },
  ],
  sales: [
    { label: 'orders', permissions: Object.values(SalesOrderPermissions) as unknown as Permission[] },
    { label: 'suborders', permissions: Object.values(SalesSubOrderPermissions) as unknown as Permission[] },
    { label: 'unpaid_orders', permissions: Object.values(SalesUnPaidOrderPermissions) as unknown as Permission[] },
    { label: 'status_orders', permissions: Object.values(SalesStatusPermissions) as unknown as Permission[] },
    {
      label: 'incidence',
      permissions: Object.values({
        ...INCIDENCE_PERMISSIONS,
        ...CAUSES_INCIDENCE_PERMISSIONS,
      }) as unknown as Permission[],
    },
    { label: 'offers_coupon', permissions: Object.values(SalesOfferPermissions) as unknown as Permission[] },
    { label: 'shipping', permissions: Object.values(SalesShippingPermissions) as unknown as Permission[] },
  ],
  clients: [
    { label: 'users', permissions: Object.values(ClientUsersPermissions) as unknown as Permission[] },
    { label: 'review', permissions: Object.values(ClientReviewPermissions) as unknown as Permission[] },
    { label: 'report_causes', permissions: Object.values(ClientReportCausePermissions) as unknown as Permission[] },
    {
      label: 'disallowed_word',
      permissions: Object.values(ClientDisallowedWordPermissions) as unknown as Permission[],
    },
  ],
  content: [
    { label: 'collections', permissions: Object.values(ContentCollectionPermissions) as unknown as Permission[] },
    { label: 'banners', permissions: Object.values(ContentBannerPermissions) as unknown as Permission[] },
    { label: 'pages', permissions: Object.values(PAGE_PERMISSIONS) as unknown as Permission[] },
    { label: 'media', permissions: Object.values(ContentMediaPermissions) as unknown as Permission[] },
    { label: 'navigation', permissions: Object.values(ContentNavigationPermissions) as unknown as Permission[] },
    { label: 'testimonial', permissions: Object.values(ContentTestimonialPermissions) as unknown as Permission[] },
  ],
  reports: [{ label: 'reports', permissions: Object.values(ReportPermissions) as unknown as Permission[] }],
};
