import { IImageMedia } from 'modules/common/interfaces';

export interface IMedia extends IImageMedia {
  filename: string;
  originalName: string;
  mimetype: string;
  sizes: string[];
}
