import { TabRouteType } from '@dfl/react-security';
import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';

import { renderTabLabel } from 'modules/common/components/TabsWithSections/TabLabel/TabLabel';
const path = '/inventory/settings/categories';

export const categoriesTabs: TabRouteType[] = [
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
    path: `${path}/:id/products`,
    to: '/products',
    label: 'tabs.products',
    translate: true,
    render: () =>
      renderTabLabel({
        locale: 'provider',
        label: 'tabs.products',
        Icon: Inventory2OutlinedIcon,
        disabled: true,
      }),
    disabled: true,
  },
  {
    path: `${path}/:id/report`,
    to: '/report',
    label: 'tabs.sale_report',
    translate: true,
    render: () =>
      renderTabLabel({
        locale: 'provider',
        label: 'tabs.report',
        Icon: AssessmentOutlinedIcon,
        disabled: true,
      }),
    disabled: true,
  },
];
