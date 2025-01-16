import { COLLECTION_BANNER_TYPE, COLLECTION_CONTENT_TYPE } from '../constants/collection-types';

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
}

export interface ICollectionElement {
  collectionId: string;
  elements: string[];
}
