import { CollectionsRowActions } from 'modules/cms/collections/components/CollectionsRowActions';
import { CellAlign, EditLink, HeadCell } from '@dfl/mui-admin-layout';
import { ICollection } from 'modules/cms/collections/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { COLLECTIONS_PERMISSIONS } from 'modules/cms/collections/constants/collections.permissions';
import { CollectionContentTypeCell } from '../components/CollectionContentTypeCell';
import { CollectionStatus } from '../components/CollectionStatus';

export const collectionsNameColumn: HeadCell<ICollection> = {
  field: 'name',
  headerName: 'collection:fields.name',
  disablePadding: false,
  renderCell: (name: string, data?: ICollection) => (<EditLink entityId={data?._id as string}>{name}</EditLink>),
};

export const collectionsDescriptionColumn: HeadCell<ICollection> = {
  field: 'description',
  headerName: 'collection:fields.description',
};

export const collectionContentTypeColumn: HeadCell<ICollection> = {
  field: 'type',
  headerName: 'collection:fields.type',
  align: CellAlign.CENTER,
  component: CollectionContentTypeCell
};

export const collectionStatusColumn: HeadCell<ICollection> = {
  field: 'active',
  headerName: 'collection:fields.status',
  align: CellAlign.CENTER,
  renderCell: (value: boolean, data: ICollection) => (
    <CollectionStatus status={value || false} collectionId={data?._id || ''} />
  )
};

export const collectionsActionsColumn: HeadCell<ICollection> = {
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
  collectionContentTypeColumn,
  collectionStatusColumn,
  createdATColumn,
  collectionsActionsColumn
];
