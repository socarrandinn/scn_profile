import { CollectionsRowActions } from 'modules/cms/collections/components/CollectionsRowActions';
import { CellAlign, HeadCell } from '@dfl/mui-admin-layout';
import { ICollection } from 'modules/cms/collections/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { COLLECTIONS_PERMISSIONS } from 'modules/cms/collections/constants/collections.permissions';
import { CollectionStatus } from '../components/CollectionStatus';
import CollectionNameCell from '../components/CollectionNameCell/CollectionNameCell';
import { BannerTypeChip } from 'modules/cms/collections/components/CollectionBannerTypeChip/CollectionBannerTypeChip';
import { COLLECTION_BANNER_TYPE } from './collection-types';

export const collectionsNameColumn: HeadCell<ICollection> = {
  field: 'name',
  headerName: 'collection:fields.name',
  disablePadding: false,
  component: CollectionNameCell,
};

export const collectionsDescriptionColumn: HeadCell<ICollection> = {
  field: 'description',
  headerName: 'collection:fields.description',
};

export const collectionStatusColumn: HeadCell<ICollection> = {
  field: 'active',
  headerName: 'collection:fields.status',
  align: CellAlign.CENTER,
  renderCell: (active: boolean, data: ICollection) => (
    <CollectionStatus status={active || false} collectionId={data?._id || ''} />
  ),
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

export const subTypeBannerColumn: HeadCell<any> = {
  field: 'subType',
  align: CellAlign.CENTER,
  headerName: 'collection:fields.subType',
  renderCell: (subType: COLLECTION_BANNER_TYPE) => <BannerTypeChip subType={subType} />,
};

export const collectionsBannerColumns: Array<HeadCell<any>> = [
  collectionsNameColumn,
  collectionsDescriptionColumn,
  subTypeBannerColumn,
  collectionStatusColumn,
  createdATColumn,
  collectionsActionsColumn,
];
export const collectionsColumns: Array<HeadCell<any>> = [
  collectionsNameColumn,
  collectionsDescriptionColumn,
  collectionStatusColumn,
  createdATColumn,
  collectionsActionsColumn,
];
