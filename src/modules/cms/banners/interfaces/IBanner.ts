import { IImageMedia } from 'modules/common/interfaces';

export interface IBanner {
  _id?: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  active: boolean;
  // position: string; // definir posiciones
  // linkUrl: string;
  desktopImage?: ImageMedia | null;
  mobileImage?: ImageMedia | null;
  withText: boolean;
}

export interface ImageMedia extends IImageMedia {
  sizes: string[];
}

export enum BANNER_ELEMENT_OPERATION {
  NEW_ELEMENT = 'NEW_ELEMENT',
  EXISTS_ELEMENT = 'EXISTS_ELEMENT',
}

export interface IBannerCreateElementRequest {
  banner: IBanner;
  collection: string; // objectid
  operation: BANNER_ELEMENT_OPERATION;
}
