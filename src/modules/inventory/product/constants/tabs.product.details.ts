import { TabRouteType } from '@dfl/react-security';
import { renderTabLabel } from 'modules/common/components/TabsWithSections/TabLabel/TabLabel';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ScreenSearchDesktopOutlinedIcon from '@mui/icons-material/ScreenSearchDesktopOutlined';
// import AssessmentIcon from '@mui/icons-material/Assessment';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

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
    path: `${path}/:id/inventory-report`,
    to: '/inventory-report',
    label: 'tabs.inventoryReport',
    translate: true,
    render: () =>
      renderTabLabel({
        locale: 'provider',
        label: 'tabs.inventoryReport',
        Icon: MonetizationOnOutlinedIcon,
        disabled: true,
      }),
    disabled: true,
  },
  {
    path: `${path}/:id/related-product`,
    to: '/related-product',
    label: 'tabs.relatedProduct',
    translate: true,
    render: () =>
      renderTabLabel({
        locale: 'provider',
        label: 'tabs.relatedProduct',
        Icon: ScreenSearchDesktopOutlinedIcon,
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
    path: `${path}/:id/rate`,
    to: '/rate',
    label: 'tabs.rate',
    translate: true,
    render: () =>
      renderTabLabel({
        locale: 'product',
        label: 'section.rate.title',
        Icon: StarBorderOutlinedIcon,
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
  //   path: `${path}/:id/sales-report`,
  //   to: '/sales-report',
  //   label: 'tabs.sale_report',
  //   translate: true,
  //   render: () =>
  //     renderTabLabel({
  //       locale: 'provider',
  //       label: 'tabs.sale_report',
  //       Icon: AssessmentIcon,
  //       disabled: true,
  //     }),
  //   disabled: true,
  // },
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
