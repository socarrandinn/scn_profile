import { TabRouteType } from '@dfl/react-security';
import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';
import { renderTabLabel } from 'modules/common/components/TabsWithSections/TabLabel/TabLabel';
import { PAGE_PERMISSIONS } from './page.permissions';

const path = '/cms/pages';

export const pageTabs: TabRouteType[] = [
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
    permissions: [PAGE_PERMISSIONS.PAGE_VIEW],
  },
];
