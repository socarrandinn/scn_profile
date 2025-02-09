import { TabRouteType } from '@dfl/react-security';
import LanOutlined from '@mui/icons-material/LanOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';
import { renderTabLabel } from 'modules/common/components/TabsWithSections/TabLabel/TabLabel';
import { ManageSearchOutlined } from '@mui/icons-material';

const path = '/crm/clients';

export const clientTabs: TabRouteType[] = [
  {
    path: `${path}/:id/general`,
    to: '/general',
    label: 'tabs.general',
    translate: true,
    render: () =>
      renderTabLabel({
        locale: 'provider',
        label: 'tabs.general',
        Icon: PortraitOutlinedIcon,
      }),
  },
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
        disabled: true,
      }),
    disabled: true,
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
