export enum COLLECTION_CONTENT_TYPE {
  BANNER = 'BANNER',
  PRODUCT = 'PRODUCT',
  TESTIMONY = 'TESTIMONY',
  CATEGORY = 'CATEGORY',
}

export enum COLLECTION_BANNER_TYPE {
  MULTI_BANNER = 'MULTI_BANNER',
  SIMPLE_BANNER = 'SIMPLE_BANNER',
}

export const collectionContentTypeOptions = Object.entries(COLLECTION_CONTENT_TYPE);

export enum DYNAMIC_COLLECTION_TYPE {
  MOST_RECENT = 'MOST_RECENT',
}

export const dynamicTypeOptions = Object.entries(DYNAMIC_COLLECTION_TYPE);
