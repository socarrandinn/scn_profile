import { CollectionsRowActions } from 'modules/cms/collections/components/CollectionsRowActions';
import { CellAlign, HeadCell } from '@dfl/mui-admin-layout';
import { ICollection } from 'modules/cms/collections/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { COLLECTIONS_PERMISSIONS } from 'modules/cms/collections/constants/collections.permissions';
import { CollectionStatus } from '../components/CollectionStatus';
import CollectionNameCell from '../components/CollectionNameCell/CollectionNameCell';
import { CollectionBannerTypeChip } from 'modules/cms/collections/components/CollectionBannerTypeChip/CollectionBannerTypeChip';
import { COLLECTION_BANNER_TYPE, COLLECTION_CONTENT_TYPE } from './collection-types';
import { CollectionDynamicTypeStatus } from '../components/CollectionDynamicTypeStatus';

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

export const collectionDynamicTypeStatusColumn: HeadCell<ICollection> = {
  field: 'settings',
  headerName: 'collection:fields.settings.type',
  align: CellAlign.CENTER,
  renderCell: (settings: any, data: ICollection) => (
    <CollectionDynamicTypeStatus
      settings={settings}
      collectionId={data?._id || ''}
      contentType={data?.contentType as COLLECTION_CONTENT_TYPE.CATEGORY | COLLECTION_CONTENT_TYPE.PRODUCT}
      noBadge
      isStatus
      disabled
    />
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
  renderCell: (subType: COLLECTION_BANNER_TYPE) => <CollectionBannerTypeChip subType={subType} />,
};

export const collectionsBannerColumns: Array<HeadCell<any>> = [
  collectionsNameColumn,
  collectionsDescriptionColumn,
  subTypeBannerColumn,
  collectionStatusColumn,
  createdATColumn,
  collectionsActionsColumn,
];

export const collectionsDynamicColumns: Array<HeadCell<any>> = [
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
  [COLLECTION_CONTENT_TYPE.PRODUCT]: collectionsDynamicColumns,
  [COLLECTION_CONTENT_TYPE.CATEGORY]: collectionsDynamicColumns,
  [COLLECTION_CONTENT_TYPE.TESTIMONY]: collectionsColumns,
};
