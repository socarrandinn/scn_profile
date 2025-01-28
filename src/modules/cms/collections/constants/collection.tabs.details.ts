import { TabRouteType } from '@dfl/react-security';
import { renderTabLabel } from 'modules/common/components/TabsWithSections/TabLabel/TabLabel';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import { COLLECTIONS_PERMISSIONS } from './collections.permissions';

const path = '/inventory/products';

export const collectionDetailsTabs: TabRouteType[] = [
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
    path: `${path}/:id/elements`,
    to: '/elements',
    label: 'tabs.elements',
    permissions: [COLLECTIONS_PERMISSIONS.COLLECTIONS_VIEW],
    translate: true,
    render: () =>
      renderTabLabel({
        locale: 'provider',
        label: 'tabs.elements',
        Icon: InventoryOutlinedIcon,
      }),
  },
];
