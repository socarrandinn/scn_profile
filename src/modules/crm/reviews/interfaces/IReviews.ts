import { IImageMedia } from 'modules/common/interfaces';

export enum ADMIN_REVIEW_STATUS_ENUM {
  PENDING = 'PENDING',
  NEED_REVIEW = 'NEED_REVIEW',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
}

export enum ADMIN_REVIEW_ENTITY_ENUM {
  PRODUCT = 'product',
}

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
  status: ADMIN_REVIEW_STATUS_ENUM;
  typo: ADMIN_REVIEW_ENTITY_ENUM;
  entity: string;
  entityData: {
    name: string;
    code: string;
    media?: IImageMedia[];
  };
}

export type IReportUser = {
  _id?: string;
  rate: string;
  type: string;
};

export type IReviewSummary = {
  pending: number;
  reported: number;
};
