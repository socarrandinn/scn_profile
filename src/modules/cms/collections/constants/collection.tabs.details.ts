import { TabRouteType } from '@dfl/react-security';
import { renderTabLabel } from 'modules/common/components/TabsWithSections/TabLabel/TabLabel';

import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import { COLLECTIONS_PERMISSIONS } from './collections.permissions';
import { COLLECTION_CONTENT_TYPE } from './collection-types';

const path = '/cms/collections';

export const collectionDetailsTabs = (contentType: COLLECTION_CONTENT_TYPE): TabRouteType[] => [
  /* {
    path: `${path}/:id/${contentType}/general`,
    to: '/general',
    label: 'tabs.general',
    render: () =>
      renderTabLabel({
        locale: 'collection',
        label: 'tabs.general',
        Icon: InfoOutlinedIcon,
      }),
    translate: true,
  }, */
  {
    path: `${path}/:id/${contentType}/elements`,
    to: '/elements',
    label: 'tabs.elements',
    permissions: [COLLECTIONS_PERMISSIONS.COLLECTIONS_VIEW],
    translate: true,
    render: () =>
      renderTabLabel({
        locale: 'collection',
        label: 'tabs.elements',
        Icon: InventoryOutlinedIcon,
      }),
  },
];
