import { IImageMedia } from 'modules/common/interfaces';

export interface IBanner {
  _id?: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  active: boolean;
  position: string; // definir posiciones
  linkUrl: string;
  desktopImage?: ImageMedia | null;
  mobileImage?: ImageMedia | null;
  withText: boolean;
}

export interface ImageMedia extends IImageMedia {
  sizes: string[];
}

export interface IBannerCollectionCreate {
  banner: IBanner;
  collectionId: string;
}
