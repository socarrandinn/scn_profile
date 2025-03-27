import { TabRouteType } from '@dfl/react-security';
import { renderTabLabel } from 'modules/common/components/TabsWithSections/TabLabel/TabLabel';
import { InfoOutlined, ManageSearchOutlined } from '@mui/icons-material';

const path = '/sales/incidences';

export const incidenceTabs: TabRouteType[] = [
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
