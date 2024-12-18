import { TabViews } from '@dfl/mui-admin-layout';
import { PRODUCT_FEATURE_TYPE_ENUM } from '../interfaces/IProductFeature';

export const productFeatureViewTabs: TabViews = {
  all: {
    title: 'all',
    filters: {},
  },

  [PRODUCT_FEATURE_TYPE_ENUM.COLOR]: {
    title: `FEATURE_TYPE.${PRODUCT_FEATURE_TYPE_ENUM.COLOR}`,
    filters: {
      type: 'TERM',
      field: 'type',
      value: PRODUCT_FEATURE_TYPE_ENUM.COLOR,
    },
  },
  [PRODUCT_FEATURE_TYPE_ENUM.STRING]: {
    title: `FEATURE_TYPE.${PRODUCT_FEATURE_TYPE_ENUM.STRING}`,
    filters: {
      type: 'TERM',
      field: 'type',
      value: PRODUCT_FEATURE_TYPE_ENUM.STRING,
    },
  },
  [PRODUCT_FEATURE_TYPE_ENUM.NUMBER]: {
    title: `FEATURE_TYPE.${PRODUCT_FEATURE_TYPE_ENUM.NUMBER}`,
    filters: {
      type: 'TERM',
      field: 'type',
      value: PRODUCT_FEATURE_TYPE_ENUM.NUMBER,
    },
  },
  [PRODUCT_FEATURE_TYPE_ENUM.BOOLEAN]: {
    title: `FEATURE_TYPE.${PRODUCT_FEATURE_TYPE_ENUM.BOOLEAN}`,
    filters: {
      type: 'TERM',
      field: 'type',
      value: PRODUCT_FEATURE_TYPE_ENUM.BOOLEAN,
    },
  },
  [PRODUCT_FEATURE_TYPE_ENUM.DATE]: {
    title: `FEATURE_TYPE.${PRODUCT_FEATURE_TYPE_ENUM.DATE}`,
    filters: {
      type: 'TERM',
      field: 'type',
      value: PRODUCT_FEATURE_TYPE_ENUM.DATE,
    },
  },
  [PRODUCT_FEATURE_TYPE_ENUM.ARRAY]: {
    title: `FEATURE_TYPE.${PRODUCT_FEATURE_TYPE_ENUM.ARRAY}`,
    filters: {
      type: 'TERM',
      field: 'type',
      value: PRODUCT_FEATURE_TYPE_ENUM.ARRAY,
    },
  },
};
