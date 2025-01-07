import { CollectionsRowActions } from 'modules/cms/collections/components/CollectionsRowActions';
import { EditLink, HeadCell } from '@dfl/mui-admin-layout';
import { ICollections } from 'modules/cms/collections/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { COLLECTIONS_PERMISSIONS } from 'modules/cms/collections/constants/collections.permissions';

export const collectionsNameColumn: HeadCell<ICollections> = {
  field: 'name',
  headerName: 'collections:fields.name',
  disablePadding: false,
  renderCell: (name: string, data?: ICollections) => (<EditLink entityId={data?._id as string}>{name}</EditLink>),
};

export const collectionsDescriptionColumn: HeadCell<ICollections> = {
  field: 'description',
  headerName: 'collections:fields.description',
};

export const collectionsActionsColumn: HeadCell<ICollections> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: COLLECTIONS_PERMISSIONS.COLLECTIONS_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: CollectionsRowActions,
};

export const collectionsColumns: Array<HeadCell<any>> = [
  collectionsNameColumn,
  collectionsDescriptionColumn,
  createdATColumn,
  collectionsActionsColumn
];
