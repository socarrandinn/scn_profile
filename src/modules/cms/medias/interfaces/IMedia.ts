import { IImageMedia } from 'modules/common/interfaces';

export interface IMedia extends IImageMedia {
  filename: string;
  originalName: string;
  mimetype: string;
  url: string;
  thumb: string;
  width: number;
  height: number;
  sizes: any[];
  _id: string;
  createdAt: string;
  updatedAt: string;
}
