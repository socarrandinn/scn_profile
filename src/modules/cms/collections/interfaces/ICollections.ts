import { COLLECTION_CONTENT_TYPE } from '../constants/collection-types';

export interface ICollection {
  _id?: string;
  name: string;
  description?: string;
  contentType?: COLLECTION_CONTENT_TYPE | string;
  createdAt?: Date;
  active?: boolean;
}
