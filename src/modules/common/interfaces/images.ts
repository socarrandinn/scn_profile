export interface IImageMedia {
  _id?: string;
  thumb: string;
  url: string;
  width?: number;
  height?: number;
}

export interface ISizeOption {
  width: number;
  quality: number;
  blur?: boolean;
  height?: number;
  aspectRatio?: '4/4' | '4/3' | '16/9' | '9/16';
}
export interface IImageOption {
  sizes: ISizeOption[];
  noExt: boolean;
  width: number; // quality images 0-100%
}

export type IImageOptions = {
  desktop: IImageOption;
  mobile: IImageOption;
};
