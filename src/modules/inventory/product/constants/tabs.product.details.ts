import { TabRouteType } from '@dfl/react-security';
import { renderTabLabel } from 'modules/common/components/TabsWithSections/TabLabel/TabLabel';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined'
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ScreenSearchDesktopOutlinedIcon from '@mui/icons-material/ScreenSearchDesktopOutlined';
// import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';
// import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
// import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

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
        Icon: InfoOutlinedIcon,
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
        Icon: MonetizationOnOutlinedIcon,
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
        Icon: ScreenSearchDesktopOutlinedIcon,
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
        locale: 'product',
        label: 'section.historyChange.tab',
        Icon: ManageSearchOutlinedIcon,
        disabled: true,
      }),
    // disabled: true,
  },
  // {
  //   path: `${path}/:id/work`,
  //   to: '/work',
  //   label: 'tabs.work',
  //   translate: true,
  //   render: () =>
  //     renderTabLabel({
  //       locale: 'provider',
  //       label: 'tabs.work',
  //       Icon: WorkOutlineOutlinedIcon,
  //       disabled: true,
  //     }),
  //   disabled: true,
  // },
  // {
  //   path: `${path}/:id/free_time`,
  //   to: '/free_time',
  //   label: 'tabs.free_time',
  //   translate: true,
  //   render: () =>
  //     renderTabLabel({
  //       locale: 'provider',
  //       label: 'tabs.free_time',
  //       Icon: AccessTimeOutlinedIcon,
  //       disabled: true,
  //     }),
  //   disabled: true,
  // },
];
