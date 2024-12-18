import { Filter, FilterType } from '@dfl/mui-admin-layout';
import { TermFilter } from '@dofleini/query-builder';
import { createdATFilter } from 'modules/common/constants';
import { PRODUCT_FEATURE_TYPE_ENUM } from '../interfaces/IProductFeature';
import { PRODUCT_FEATURE_TYPES } from './product-feature-status';

export const typeFilter: Filter = {
  filter: 'productFeatures:fields.type',
  type: FilterType.FIXED_LIST,
  translate: true,
  key: 'feature_type',
  field: 'type',
  transform: (value: PRODUCT_FEATURE_TYPE_ENUM) => {
    return new TermFilter({ field: 'type', value });
  },
  options: Object.keys(PRODUCT_FEATURE_TYPE_ENUM).map((key) => ({
    value: PRODUCT_FEATURE_TYPES[key],
    translate: true,
    label: `productFeatures:FEATURE_TYPE.${key}`,
  })),
};

export const productFeatureFilters = [typeFilter, createdATFilter];
