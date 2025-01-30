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

  isDynamic?: boolean; // is dynamic collection by product, category
  elements?: any[];

  position: COLLECTION_BANNERS_POSITION | COLLECTION_PRODUCTS_POSITION | null; // position for banner, products
  dynamic?: DYNAMIC_COLLECTION_TYPE | null;
}

export interface ICollectionElement {
  collectionId: string;
  elements: string[];
}
