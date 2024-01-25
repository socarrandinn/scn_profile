import { TabRouteType } from '@dfl/react-security';
import LanOutlined from '@mui/icons-material/LanOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';

import { renderTabLabel } from 'modules/common/components/TabsWithSections/TabLabel/TabLabel';
const path = '/inventory/settings/categories';

export const categoriesTabs: TabRouteType[] = [
  {
    path: `${path}/:id/subcategories`,
    to: '/subcategories',
    label: 'tabs.subcategories',
    render: () =>
      renderTabLabel({
        locale: 'category',
        label: 'tabs.subcategories',
        Icon: LanOutlined,
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
      }),
  },
  {
    path: `${path}/:id/history_change`,
    to: '/history_change',
    label: 'tabs.history_change',
    translate: true,
    render: () =>
      renderTabLabel({
        locale: 'provider',
        label: 'tabs.history_change',
        Icon: ManageSearchOutlinedIcon,
      }),
  },
  {
    path: `${path}/:id/report`,
    to: '/report',
    label: 'tabs.sale_report',
    translate: true,
    render: () =>
      renderTabLabel({
        locale: 'provider',
        label: 'tabs.sale_report',
        Icon: AssessmentOutlinedIcon,
        disabled: true,
      }),
    disabled: true,
  },
];
