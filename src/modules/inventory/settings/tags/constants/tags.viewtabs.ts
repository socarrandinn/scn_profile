import { TabViews } from '@dfl/mui-admin-layout';
import { TAG_TYPE_ENUM } from '../interfaces';

export const tagsViewTabs: TabViews = {
  all: {
    title: 'all',
    filters: {},
  },

  [TAG_TYPE_ENUM.STRING]: {
    title: `TAG_TYPE.${TAG_TYPE_ENUM.STRING}`,
    filters: {
      type: 'TERM',
      field: 'type',
      value: TAG_TYPE_ENUM.STRING,
    },
  },
  [TAG_TYPE_ENUM.NUMBER]: {
    title: `TAG_TYPE.${TAG_TYPE_ENUM.NUMBER}`,
    filters: {
      type: 'TERM',
      field: 'type',
      value: TAG_TYPE_ENUM.NUMBER,
    },
  },
  [TAG_TYPE_ENUM.BOOLEAN]: {
    title: `TAG_TYPE.${TAG_TYPE_ENUM.BOOLEAN}`,
    filters: {
      type: 'TERM',
      field: 'type',
      value: TAG_TYPE_ENUM.BOOLEAN,
    },
  },
  [TAG_TYPE_ENUM.DATE]: {
    title: `TAG_TYPE.${TAG_TYPE_ENUM.DATE}`,
    filters: {
      type: 'TERM',
      field: 'type',
      value: TAG_TYPE_ENUM.DATE,
    },
  },
  [TAG_TYPE_ENUM.ARRAY]: {
    title: `TAG_TYPE.${TAG_TYPE_ENUM.ARRAY}`,
    filters: {
      type: 'TERM',
      field: 'type',
      value: TAG_TYPE_ENUM.ARRAY,
    },
  },
};
