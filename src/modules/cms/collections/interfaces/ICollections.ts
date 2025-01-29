import {
  COLLECTION_BANNER_TYPE,
  COLLECTION_BANNERS_POSITION,
  COLLECTION_CONTENT_TYPE,
  COLLECTION_PRODUCTS_POSITION,
  DYNAMIC_COLLECTION_TYPE,
} from '../constants/collection-types';

export interface ICollection {
  _id?: string;
  name: string;
  description?: string;
  contentType: COLLECTION_CONTENT_TYPE | string;
  subType?: COLLECTION_BANNER_TYPE;
  createdAt?: Date;
  active?: boolean;
  position: COLLECTION_BANNERS_POSITION | COLLECTION_PRODUCTS_POSITION | null;

  isDynamic?: boolean; // is dynamic collection by product, category
  dynamic?: DYNAMIC_COLLECTION_TYPE | null;
  elements?: any[];
}

export interface ICollectionElement {
  collectionId: string;
  elements: string[];
}
