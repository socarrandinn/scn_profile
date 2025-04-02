import { Filter, FilterType } from '@dfl/mui-admin-layout';
import { createdATFilter } from 'modules/common/constants';
import {
  COLLECTION_BANNER_TYPE,
  COLLECTION_BANNERS_POSITION,
  COLLECTION_CONTENT_TYPE,
  COLLECTION_PRODUCTS_POSITION,
  DYNAMIC_COLLECTION_TYPE,
} from './collection-types';
import { statusFilter } from 'modules/inventory/provider/common/constants';

export const getCollectionPositionFilter = (type: COLLECTION_CONTENT_TYPE, options?: any): Filter => ({
  filter: 'collection:fields.position',
  translate: true,
  key: 'position',
  field: 'position',
  type: FilterType.FIXED_LIST,
  options: Object.keys(options || COLLECTION_BANNERS_POSITION)?.map((position) => ({
    value: position,
    translate: true,
    label: `collection:position.${type}.${position}`,
  })),
});

export const getCollectionTypeFilter = (field?: string, options?: any, label?: string): Filter => ({
  filter: 'collection:fields.type',
  translate: true,
  key: 'type',
  field: field ?? 'type',
  type: FilterType.FIXED_LIST,
  options: Object.keys(options ?? COLLECTION_BANNER_TYPE)?.map((type) => ({
    value: type,
    translate: true,
    label: `collection:${label ?? 'type'}.${type}`,
  })),
});

export const collectionBannerPositionFilter: Filter = getCollectionPositionFilter(COLLECTION_CONTENT_TYPE.BANNER);
export const collectionProductPositionFilter: Filter = getCollectionPositionFilter(
  COLLECTION_CONTENT_TYPE.PRODUCT,
  COLLECTION_PRODUCTS_POSITION,
);

export const collectionBannerTypeFilter: Filter = getCollectionTypeFilter();
export const collectionProductTypeFilter: Filter = getCollectionTypeFilter(
  'settings.type',
  DYNAMIC_COLLECTION_TYPE,
  'dynamic.PRODUCT',
);

export const collectionsBannerFilters = [
  collectionBannerPositionFilter,
  collectionBannerTypeFilter,
  statusFilter,
  createdATFilter,
];

export const collectionsProductFilters = [
  collectionProductPositionFilter,
  collectionProductTypeFilter,
  statusFilter,
  createdATFilter,
];

export const collectionElementsFilters = [createdATFilter];
