import { CellAlign, HeadCell } from '@dfl/mui-admin-layout';
import { COLLECTIONS_PERMISSIONS } from './collections.permissions';
import CollectionsElementRowActions from '../components/CollectionsRowActions/CollectionsElementRowActions';

export const collectionElementActionsColumn: HeadCell = {
  field: 'actions',
  headerName: 'common:actions',
  width: 150,
  align: CellAlign.CENTER,
  sortable: false,
  component: CollectionsElementRowActions,
  permissions: [COLLECTIONS_PERMISSIONS.COLLECTIONS_WRITE],
};
