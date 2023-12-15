import { TabRouteType } from '@dfl/react-security';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import { renderTabLabel } from 'modules/common/components/TabsWithSections/TabLabel/TabLabel';

const path = '/inventory/stores'

export const storeTabs: TabRouteType[] = [
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
    path: `${path}/:id/products`,
    to: '/products',
    label: 'tabs.products',
    render: () =>
      renderTabLabel({
        locale: 'store',
        label: 'tabs.products',
        Icon: GroupOutlinedIcon,
      }),
    translate: true,
    permissions: ['USER_ADMIN'],
  }
];
