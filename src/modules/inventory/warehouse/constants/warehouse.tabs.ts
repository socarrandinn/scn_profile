import { TabRouteType } from '@dfl/react-security';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import { renderTabLabel } from 'modules/common/components/TabsWithSections/TabLabel/TabLabel';
import { InfoOutlined, InventoryOutlined, ManageSearchOutlined } from '@mui/icons-material';
import { SupplierIcon } from 'modules/inventory/common/components/Icons/SupplierIcon';
import { STOCK_PERMISSIONS } from 'modules/inventory/product-stock/constants/stock.permissions';
import { WAREHOUSE_PERMISSIONS } from './warehouse.permissions';
import { PRODUCT_PERMISSIONS } from 'modules/inventory/product/constants';
import { USER_PERMISSIONS } from 'modules/security/users/constants/warehouse.permissions';
import { DistributionCenterIcon } from 'modules/inventory/common/components/Icons/DistributionCenterIcon';

const path = '/inventory/warehouses';

export const warehouseTabs: TabRouteType[] = [
  {
    path: `${path}/:id/general`,
    to: '/general',
    label: 'tabs.general',
    render: () =>
      renderTabLabel({
        locale: 'provider',
        label: 'tabs.general',
        Icon: InfoOutlined,
      }),
    translate: true,
  },
  {
    path: `${path}/:id/inventory`,
    to: '/inventory',
    label: 'tabs.inventory',
    render: () =>
      renderTabLabel({
        locale: 'provider',
        label: 'tabs.inventory',
        Icon: InventoryOutlined,
      }),
    translate: true,
    permissions: [STOCK_PERMISSIONS.VIEW, PRODUCT_PERMISSIONS.PRODUCT_VIEW],
  },
  {
    path: `${path}/:id/distribution-centers`,
    to: '/distribution-centers',
    label: 'fields.distributionCenters',
    render: () =>
      renderTabLabel({
        locale: 'warehouse',
        label: 'fields.distributionCenters',
        Icon: DistributionCenterIcon,
      }),
    translate: true,
  },
  {
    path: `${path}/:id/supplier`,
    to: '/supplier',
    label: 'tabs.supplier',
    render: () =>
      renderTabLabel({
        locale: 'warehouse',
        label: 'tabs.supplier',
        Icon: SupplierIcon,
      }),
    translate: true,
    permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_SUPPLIER_PROVIDER_VIEW],
  },
  {
    path: `${path}/:id/users/*`,
    to: '/users',
    label: 'tabs.users',
    render: () =>
      renderTabLabel({
        locale: 'warehouse',
        label: 'tabs.users',
        Icon: GroupOutlinedIcon,
      }),
    translate: true,
    permissions: [USER_PERMISSIONS.USER_VIEW],
  },
  {
    path: `${path}/:id/history_change`,
    to: '/history_change',
    label: 'tabs.activity',
    translate: true,
    render: () =>
      renderTabLabel({
        locale: 'product',
        label: 'section.historyChange.title',
        Icon: ManageSearchOutlined,
      }),
    permissions: ['ADMIN'],
  },
];
