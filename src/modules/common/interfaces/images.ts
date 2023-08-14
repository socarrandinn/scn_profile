export interface IImageMedia {
  _id?: string;
  thumb: string;
  url: string;
  width?: number;
}

export type IUploadImage = IImageMedia & { isLoading?: boolean, isError?: boolean }
