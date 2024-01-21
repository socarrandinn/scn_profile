import { TabRouteType } from '@dfl/react-security';
import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';
import { renderTabLabel } from 'modules/common/components/TabsWithSections/TabLabel/TabLabel';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined'

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
    path: `${path}/:id/inventory`,
    to: '/inventory',
    label: 'tabs.inventory',
    translate: true,
    render: () =>
      renderTabLabel({
        locale: 'provider',
        label: 'tabs.inventory',
        Icon: StorefrontOutlinedIcon,
        disabled: true,
      }),
  },
  {
    path: `${path}/:id/price`,
    to: '/price',
    label: 'tabs.price',
    translate: true,
    render: () =>
      renderTabLabel({
        locale: 'provider',
        label: 'tabs.price',
        Icon: WorkOutlineOutlinedIcon,
        disabled: true,
      }),
  },
  {
    path: `${path}/:id/seo`,
    to: '/seo',
    label: 'tabs.seo',
    translate: true,
    render: () =>
      renderTabLabel({
        locale: 'provider',
        label: 'tabs.seo',
        Icon: WorkOutlineOutlinedIcon,
        disabled: true,
      }),
  },
  {
    path: `${path}/:id/activity`,
    to: '/history_change',
    label: 'tabs.activity',
    translate: true,
    render: () =>
      renderTabLabel({
        locale: 'provider',
        label: 'tabs.activity',
        Icon: WorkOutlineOutlinedIcon,
        disabled: true,
      }),
    // disabled: true,
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
