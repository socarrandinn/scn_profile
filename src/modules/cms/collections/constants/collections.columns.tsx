import { CollectionsRowActions } from 'modules/cms/collections/components/CollectionsRowActions';
import { CellAlign, HeadCell } from '@dfl/mui-admin-layout';
import { ICollection } from 'modules/cms/collections/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { COLLECTIONS_PERMISSIONS } from 'modules/cms/collections/constants/collections.permissions';
import { CollectionStatus } from '../components/CollectionStatus';
import CollectionNameCell from '../components/CollectionNameCell/CollectionNameCell';
import { CollectionBannerTypeChip } from 'modules/cms/collections/components/CollectionBannerTypeChip/CollectionBannerTypeChip';
import { COLLECTION_BANNER_TYPE, COLLECTION_CONTENT_TYPE } from './collection-types';
import { CollectionTypeStatusChip } from '../components/CollectionDynamicTypeStatus/CollectionTypeStatusChip';
import { CollectionPositionStatus } from '../components/CollectionPositionStatus';

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

export const collectionPositionStatusColumn: HeadCell<ICollection> = {
  field: 'position',
  headerName: 'collection:fields.position',
  align: CellAlign.CENTER,
  renderCell: (position: any, data: ICollection) => (
    <CollectionPositionStatus
      collectionId={data?._id || ''}
      status={position}
      contentType={data?.contentType as any}
      noBadge
      readOnly
    />
  ),
};

export const collectionDynamicTypeStatusColumn: HeadCell<ICollection> = {
  field: 'settings',
  headerName: 'collection:fields.settings.type',
  align: CellAlign.CENTER,
  component: CollectionTypeStatusChip,
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

export const typeBannerColumn: HeadCell<any> = {
  field: 'type',
  align: CellAlign.CENTER,
  headerName: 'collection:fields.type',
  renderCell: (type: COLLECTION_BANNER_TYPE) => <CollectionBannerTypeChip type={type} />,
};

export const collectionsBannerColumns: Array<HeadCell<any>> = [
  collectionsNameColumn,
  collectionsDescriptionColumn,
  collectionPositionStatusColumn,
  typeBannerColumn,
  collectionStatusColumn,
  createdATColumn,
  collectionsActionsColumn,
];

export const collectionsProductColumns: Array<HeadCell<any>> = [
  collectionsNameColumn,
  collectionsDescriptionColumn,
  collectionPositionStatusColumn,
  collectionDynamicTypeStatusColumn,
  collectionStatusColumn,
  createdATColumn,
  collectionsActionsColumn,
];
export const collectionsCategoryColumns: Array<HeadCell<any>> = [
  collectionsNameColumn,
  collectionsDescriptionColumn,
  collectionDynamicTypeStatusColumn,
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

export const _CollectionColumns: Record<string, Array<HeadCell<any>>> = {
  [COLLECTION_CONTENT_TYPE.BANNER]: collectionsBannerColumns,
  [COLLECTION_CONTENT_TYPE.PRODUCT]: collectionsProductColumns,
  [COLLECTION_CONTENT_TYPE.CATEGORY]: collectionsCategoryColumns,
  [COLLECTION_CONTENT_TYPE.TESTIMONY]: collectionsColumns,
};
