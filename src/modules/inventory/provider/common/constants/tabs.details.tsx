import { TabRouteType } from '@dfl/react-security';
import { renderTabLabel } from 'modules/common/components/TabsWithSections/TabLabel/TabLabel';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';
// import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import { PeopleAltOutlined } from '@mui/icons-material';

export const providersTabs = (path: string): TabRouteType[] => {
  return [
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
        }),
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
      path: `${path}/:id/users`,
      to: '/users',
      label: 'tabs.users',
      translate: true,
      render: () =>
        renderTabLabel({
          locale: 'provider',
          label: 'tabs.users',
          Icon: PeopleAltOutlined,
        }),
    },
    {
      path: `${path}/:id/sale_report`,
      to: '/sale_report',
      label: 'tabs.sale_report',
      translate: true,
      disabled: true,
      render: () =>
        renderTabLabel({
          locale: 'provider',
          label: 'tabs.sale_report',
          Icon: AssessmentOutlinedIcon,
          disabled: true,
        }),
    },
    {
      path: `${path}/:id/conciliations`,
      to: '/conciliations',
      label: 'tabs.conciliations',
      translate: true,
      disabled: true,
      render: () =>
        renderTabLabel({
          locale: 'provider',
          label: 'tabs.conciliations',
          Icon: MonetizationOnOutlinedIcon,
          disabled: true,
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
    // {
    //   path: `${path}/:id/settings`,
    //   to: '/settings',
    //   label: 'tabs.settings',
    //   translate: true,
    //   render: () =>
    //     renderTabLabel({
    //       locale: 'provider',
    //       label: 'tabs.settings',
    //       Icon: SettingsApplicationsOutlinedIcon,
    //     }),
    // },
  ];
};
