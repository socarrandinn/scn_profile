import { TabRouteType } from '@dfl/react-security';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import { renderTabLabel } from 'modules/common/components/TabsWithSections/TabLabel/TabLabel';
import { InfoOutlined, InventoryOutlined, ManageSearchOutlined } from '@mui/icons-material';
import { SupplierIcon } from 'modules/inventory/common/components/Icons/SupplierIcon';

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
    permissions: ['USER_ADMIN'],
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
    permissions: ['USER_ADMIN'],
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
  },
];
