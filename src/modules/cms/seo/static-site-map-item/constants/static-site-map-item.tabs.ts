import { TabRouteType } from '@dfl/react-security';
import { renderTabLabel } from 'modules/common/components/TabsWithSections/TabLabel/TabLabel';
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const path = '/cms/seo/static_site_map_items';

export const staticSiteMapItemTabs: TabRouteType[] = [
  {
    path: `${path}/general`,
    to: '/general',
    label: 'tabs.general',
    render: () =>
      renderTabLabel({
        locale: 'provider',
        label: 'tabs.general',
        Icon: InfoOutlinedIcon,
      }),
    translate: true,
  },
  {
    path: `${path}/history_change`,
    to: '/history_change',
    label: 'tabs.activity',
    translate: true,
    render: () =>
      renderTabLabel({
        locale: 'product',
        label: 'section.historyChange.title',
        Icon: ManageSearchOutlinedIcon,
      }),
  },
];
