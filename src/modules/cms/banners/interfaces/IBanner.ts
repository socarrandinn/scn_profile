import { IImageMedia, ISizeOption } from 'modules/common/interfaces';

export interface IBanner {
  _id?: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  active: boolean;
  link: string;
  desktopImage?: ImageMedia | null;
  mobileImage?: ImageMedia | null;
  withText: boolean;
  position?: string;
  items?: IBanner[];
}

export interface ImageMedia extends IImageMedia {
  sizes: ISizeOption[];
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
