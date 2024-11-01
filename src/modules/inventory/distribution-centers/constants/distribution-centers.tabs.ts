import { TabRouteType } from '@dfl/react-security';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import { renderTabLabel } from 'modules/common/components/TabsWithSections/TabLabel/TabLabel';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import { InfoOutlined, ManageSearchOutlined } from '@mui/icons-material';

const path = '/inventory/distribution-centers';

export const distributionCentersTabs: TabRouteType[] = [
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
    render: () =>
      renderTabLabel({
        locale: 'provider',
        label: 'tabs.products',
        Icon: Inventory2OutlinedIcon,
      }),
    translate: true,
    permissions: ['USER_ADMIN'],
  },
  {
    path: `${path}/:id/warehouses`,
    to: '/warehouses',
    label: 'tabs.warehouses',
    render: () =>
      renderTabLabel({
        locale: 'distributionCenters',
        label: 'tabs.warehouses',
        Icon: StoreOutlinedIcon,
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
        locale: 'distributionCenters',
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
