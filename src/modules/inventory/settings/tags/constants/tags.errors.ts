export enum ERROR_TAGS {
  TAGS_ASSOCIATED_BY_PRODUCTS = 'ITP001',
  TAGS_ASSOCIATED_BY_PROVIDER = 'ITS002',
}

export const TAGS_ERRORS = {
  [ERROR_TAGS.TAGS_ASSOCIATED_BY_PROVIDER]: {
    description: 'tags:errors.TAGS_ASSOCIATED_BY_PROVIDER',
  },
  [ERROR_TAGS.TAGS_ASSOCIATED_BY_PRODUCTS]: {
    description: 'tags:errors.TAGS_ASSOCIATED_BY_PRODUCTS',
  },
};

export const TAG_DELETE_CONFIRM = {
  title: 'tags:deleteConfirm.title',
  description: 'tags:deleteConfirm.description',
};
