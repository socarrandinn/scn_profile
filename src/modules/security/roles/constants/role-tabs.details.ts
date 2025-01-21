import { TabRouteType } from '@dfl/react-security';
import { renderTabLabel } from 'modules/common/components/TabsWithSections/TabLabel/TabLabel';
import { ManageSearchOutlined, PeopleOutline, SecurityOutlined } from '@mui/icons-material';

export const roleDetailsTabs = (path: string | undefined = 'system'): TabRouteType[] => [
  {
    path: `/security/roles/${path}/:id/permissions`,
    to: '/permissions',
    label: 'tabs.permissions',
    translate: true,
    render: () =>
      renderTabLabel({
        locale: 'role',
        label: 'tabs.permissions',
        Icon: SecurityOutlined,
      }),
  },
  {
    path: `/security/roles/${path}/:id/users`,
    to: '/users',
    label: 'tabs.users',
    render: () =>
      renderTabLabel({
        locale: 'role',
        label: 'tabs.users',
        Icon: PeopleOutline,
      }),
    translate: true,
  },
  {
    path: `/security/roles/${path}/:id/history_change`,
    to: '/history_change',
    label: 'tabs.history_change',
    translate: true,
    render: () =>
      renderTabLabel({
        locale: 'role',
        label: 'tabs.historyChange',
        Icon: ManageSearchOutlined,
      }),
  },
];
