import { TabRouteType } from '@dfl/react-security';
import { renderTabLabel } from 'modules/common/components/TabsWithSections/TabLabel/TabLabel';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined'
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ScreenSearchDesktopOutlinedIcon from '@mui/icons-material/ScreenSearchDesktopOutlined';

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
        Icon: ManageSearchOutlinedIcon,
      }),
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
