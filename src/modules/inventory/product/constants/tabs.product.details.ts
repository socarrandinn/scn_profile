import { TabRouteType } from '@dfl/react-security';
import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';
import { renderTabLabel } from 'modules/common/components/TabsWithSections/TabLabel/TabLabel';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
const path = '/inventory/products';

export const productDetailsTabs: TabRouteType[] = [
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
    path: `${path}/:id/work`,
    to: '/work',
    label: 'tabs.work',
    translate: true,
    render: () =>
      renderTabLabel({
        locale: 'provider',
        label: 'tabs.work',
        Icon: WorkOutlineOutlinedIcon,
        disabled: true,
      }),
    disabled: true,
  },
  {
    path: `${path}/:id/free_time`,
    to: '/free_time',
    label: 'tabs.free_time',
    translate: true,
    render: () =>
      renderTabLabel({
        locale: 'provider',
        label: 'tabs.free_time',
        Icon: AccessTimeOutlinedIcon,
        disabled: true,
      }),
    disabled: true,
  },
];
