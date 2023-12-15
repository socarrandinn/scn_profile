import { TabRouteType } from '@dfl/react-security';
import { renderTabLabel } from 'modules/common/components/TabsWithSections/TabLabel/TabLabel';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';

export const supplierTabs: TabRouteType[] = [
  {
    path: '/inventory/settings/suppliers/:id/general',
    to: '/general',
    label: 'General',
    render: () =>
      renderTabLabel({
        label: 'General',
        Icon: PortraitOutlinedIcon,
      }),
    translate: true,
  },
  {
    path: '/inventory/settings/suppliers/:id/products',
    to: '/products',
    label: 'Productos',
    translate: true,
    render: () =>
      renderTabLabel({
        label: 'Productos',
        Icon: Inventory2OutlinedIcon,
      }),
  },
  {
    path: '/inventory/settings/suppliers/:id/stores',
    to: '/stores',
    label: 'Almacenes',
    translate: true,
    render: () =>
      renderTabLabel({
        label: 'Almacenes',
        Icon: StorefrontOutlinedIcon,
      }),
  },
  {
    path: '/inventory/settings/suppliers/:id/sale_report',
    to: '/sale_report',
    label: 'Reporte de Ventas',
    translate: true,
    render: () =>
      renderTabLabel({
        label: 'Reporte de Ventas',
        Icon: AssessmentOutlinedIcon,
      }),
  },
  {
    path: '/inventory/settings/suppliers/:id/conciliations',
    to: '/conciliations',
    label: 'Conciliaciones',
    translate: true,
    render: () =>
      renderTabLabel({
        label: 'Conciliaciones',
        Icon: MonetizationOnOutlinedIcon,
      }),
  },
  {
    path: '/inventory/settings/suppliers/:id/history_change',
    to: '/history_change',
    label: 'Historial de cambios',
    translate: true,
    render: () =>
      renderTabLabel({
        label: 'Historial de cambios',
        Icon: ManageSearchOutlinedIcon,
      }),
  },
  {
    path: '/inventory/settings/suppliers/:id/settings',
    to: '/settings',
    label: 'Configuración',
    translate: true,
    render: () =>
      renderTabLabel({
        label: 'Configuración',
        Icon: SettingsApplicationsOutlinedIcon,
      }),
  },
];
