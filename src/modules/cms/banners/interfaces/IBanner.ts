import { IImageMedia } from 'modules/common/interfaces';

export interface IBanner {
  _id?: string;
  title: string;
  description: string;
  withText: boolean;
  startDate: string;
  endDate: string;
  active: boolean;
  position: string;
  linkUrl: string;
  desktopImage: string; // ImageMedia;
  mobileImage: string; // ImageMedia;
}

export interface ImageMedia extends IImageMedia {
  sizes: string[];
}
