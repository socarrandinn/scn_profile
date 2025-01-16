import { TabRouteType } from '@dfl/react-security';
import { renderTabLabel } from 'modules/common/components/TabsWithSections/TabLabel/TabLabel';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import { InfoOutlined, InventoryOutlined, PeopleAltOutlined, StoreOutlined } from '@mui/icons-material';
import { PRODUCT_PERMISSIONS } from 'modules/inventory/product/constants';
import { STOCK_PERMISSIONS } from 'modules/inventory/product-stock/constants/stock.permissions';
import { WAREHOUSE_PERMISSIONS } from 'modules/inventory/warehouse/constants';
import { DISTRIBUTION_CENTER_PERMISSIONS } from 'modules/inventory/distribution-centers/constants';

export const providersTabs = (path: string): TabRouteType[] => {
  return [
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
      path: `${path}/:id/products`,
      to: '/products',
      label: 'tabs.products',
      translate: true,
      render: () =>
        renderTabLabel({
          locale: 'provider',
          label: 'tabs.products',
          Icon: Inventory2OutlinedIcon,
        }),

      permissions: [PRODUCT_PERMISSIONS.PRODUCT_VIEW],
    },
    {
      path: `${path}/:id/inventory`,
      to: '/inventory',
      label: 'tabs.inventory',
      translate: true,
      render: () =>
        renderTabLabel({
          locale: 'provider',
          label: 'tabs.inventory',
          Icon: InventoryOutlined,
        }),
      permissions: [STOCK_PERMISSIONS.VIEW],
    },
    {
      path: `${path}/:id/warehouses`,
      to: '/warehouses',
      label: 'tabs.warehouses',
      translate: true,
      render: () =>
        renderTabLabel({
          locale: 'provider',
          label: 'tabs.warehouses',
          Icon: StoreOutlined,
        }),
      permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
    },
    {
      path: `${path}/:id/distribution-centers`,
      to: '/distribution-centers',
      label: 'tabs.distributionCenters',
      translate: true,
      render: () =>
        renderTabLabel({
          locale: 'provider',
          label: 'tabs.distributionCenters',
          Icon: StorefrontOutlinedIcon,
        }),
      permissions: [DISTRIBUTION_CENTER_PERMISSIONS.DISTRIBUTION_CENTER_VIEW],
    },
    {
      path: `${path}/:id/users/*`,
      to: '/users',
      label: 'tabs.users',
      translate: true,
      render: () =>
        renderTabLabel({
          locale: 'provider',
          label: 'tabs.users',
          Icon: PeopleAltOutlined,
        }),
      permissions: ['ADMIN'],
    },
    {
      path: `${path}/:id/sale_report`,
      to: '/sale_report',
      label: 'tabs.sale_report',
      translate: true,
      disabled: true,
      render: () =>
        renderTabLabel({
          locale: 'provider',
          label: 'tabs.sale_report',
          Icon: AssessmentOutlinedIcon,
          disabled: true,
        }),
    },
    {
      path: `${path}/:id/conciliations`,
      to: '/conciliations',
      label: 'tabs.conciliations',
      translate: true,
      disabled: true,
      render: () =>
        renderTabLabel({
          locale: 'provider',
          label: 'tabs.conciliations',
          Icon: MonetizationOnOutlinedIcon,
          disabled: true,
        }),
    },
    {
      path: `${path}/:id/history_change`,
      to: '/history_change',
      label: 'tabs.history_change',
      translate: true,
      render: () =>
        renderTabLabel({
          locale: 'provider',
          label: 'tabs.history_change',
          Icon: ManageSearchOutlinedIcon,
        }),
      permissions: ['ADMIN'],
    },
  ];
};
