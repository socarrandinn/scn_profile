import { BANNER_ELEMENT_OPERATION } from 'modules/cms/banners/interfaces';
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
  type?: COLLECTION_BANNER_TYPE;
  createdAt?: Date;
  active?: boolean;

  elements?: any[];

  position: COLLECTION_BANNERS_POSITION | COLLECTION_PRODUCTS_POSITION | null; // position for banner, products
  settings: {
    type: DYNAMIC_COLLECTION_TYPE | null;
    size: number | null;
  };

  force?: boolean;
  forceType?: boolean;
}

export interface ICollectionElementRequest {
  collectionId: string;
  elements: string[];
  operation?: BANNER_ELEMENT_OPERATION;
}
