import { TabRouteType } from '@dfl/react-security';
import LanOutlined from '@mui/icons-material/LanOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';

import { renderTabLabel } from 'modules/common/components/TabsWithSections/TabLabel/TabLabel';
const path = '/crm/clients';

export const clientTabs: TabRouteType[] = [
  {
    path: `${path}/:id/orders`,
    to: '/orders',
    label: 'tabs.orders',
    translate: true,
    render: () =>
      renderTabLabel({
        locale: 'clients',
        label: 'tabs.orders',
        Icon: LanOutlined,
      }),
  },
  {
    path: `${path}/:id/offers`,
    to: '/offers',
    label: 'tabs.offers',
    translate: true,
    render: () =>
      renderTabLabel({
        locale: 'clients',
        label: 'tabs.offers',
        Icon: Inventory2OutlinedIcon,
      }),
  },
  {
    path: `${path}/:id/recipients`,
    to: '/recipients',
    label: 'tabs.recipients',
    translate: true,
    render: () =>
      renderTabLabel({
        locale: 'clients',
        label: 'tabs.recipients',
        Icon: ManageSearchOutlinedIcon,
      }),
  },
  {
    path: `${path}/:id/security`,
    to: '/security',
    label: 'tabs.security',
    translate: true,
    render: () =>
      renderTabLabel({
        locale: 'clients',
        label: 'tabs.security',
        Icon: AssessmentOutlinedIcon,
      }),
  },
  {
    path: `${path}/:id/activity`,
    to: '/activity',
    label: 'tabs.activity',
    translate: true,
    render: () =>
      renderTabLabel({
        locale: 'clients',
        label: 'tabs.activity',
        Icon: AssessmentOutlinedIcon,
      }),
  },
];
