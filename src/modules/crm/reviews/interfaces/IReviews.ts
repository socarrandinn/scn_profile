import { IImageMedia } from 'modules/common/interfaces';

export interface IReviews {
  _id?: string;
  comment: string;
  createdAt: Date;
  deleted: boolean;
  deletedAt: Date;
  images: IImageMedia[];
  owner: string;
  report: {
    count: number;
  };
  title: string;
  updatedAt: Date;
  user: {
    _id: string;
    avatar: IImageMedia;
    fullName: string;
  };
  visible: boolean;
  vote: number;
}
