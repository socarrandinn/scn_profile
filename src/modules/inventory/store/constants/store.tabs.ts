import { TabRouteType } from '@dfl/react-security';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import { renderTabLabel } from 'modules/common/components/TabsWithSections/TabLabel/TabLabel';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';

const path = '/inventory/stores';

export const storeTabs: TabRouteType[] = [
  {
    path: `${path}/:id/general`,
    to: '/general',
    label: 'tabs.general',
    render: () =>
      renderTabLabel({
        locale: 'provider',
        label: 'tabs.general',
        Icon: PortraitOutlinedIcon,
      }),
    translate: true,
  },
  {
    path: `${path}/:id/users`,
    to: '/users',
    label: 'tabs.users',
    render: () =>
      renderTabLabel({
        locale: 'store',
        label: 'tabs.users',
        Icon: GroupOutlinedIcon,
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
        Icon: Inventory2OutlinedIcon,
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
        locale: 'store',
        label: 'tabs.supplier',
        Icon: Inventory2OutlinedIcon,
      }),
    translate: true,
    permissions: ['USER_ADMIN'],
  },
];
