import { Filter, FilterType } from '@dfl/mui-admin-layout';
import { createdATFilter } from 'modules/common/constants';
import { COLLECTION_BANNER_TYPE, COLLECTION_BANNERS_POSITION } from './collection-types';
import { statusFilter } from 'modules/inventory/provider/common/constants';

export const collectionPositionFilter: Filter = {
  filter: 'collection:fields.position',
  translate: true,
  key: 'position',
  field: 'position',
  type: FilterType.FIXED_LIST,
  options: Object.keys(COLLECTION_BANNERS_POSITION)?.map((position) => ({
    value: position,
    translate: true,
    label: `collection:position.BANNER.${position}`,
  })),
};

export const collectionTypeFilter: Filter = {
  filter: 'collection:fields.type',
  translate: true,
  key: 'type',
  field: 'type',
  type: FilterType.FIXED_LIST,
  options: Object.keys(COLLECTION_BANNER_TYPE)?.map((type) => ({
    value: type,
    translate: true,
    label: `collection:type.${type}`,
  })),
};

export const collectionsBannerFilters = [collectionPositionFilter, collectionTypeFilter, statusFilter, createdATFilter];
export const collectionsFilters = [createdATFilter];

export const collectionElementsFilters = [createdATFilter];
