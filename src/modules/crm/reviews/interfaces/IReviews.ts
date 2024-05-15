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
}

export type IReportUser = {
  _id?: string;
  rate: string;
  type: string;
};

// TODO
export const temporalData: IReportUser[] = [
  {
    _id: 'opinion_id',
    rate: 'opinion_id' || '',
    type: 'Contenido obsceno o inapropiado',
  },
  {
    _id: 'opinion_id',
    rate: 'opinion_id' || '',
    type: 'Lenguaje ofensivo o discriminatorio',
  },
  {
    _id: 'opinion_id',
    rate: 'opinion_id' || '',
    type: 'Spam o contenido promocional no deseado',
  },
  {
    _id: 'opinion_id',
    rate: 'opinion_id' || '',
    type: 'Acoso o bullying',
  },
  {
    _id: 'opinion_id',
    rate: 'opinion_id' || '',
    type: 'Contenido fraudulento o engañoso',
  },
  {
    _id: 'opinion_id',
    rate: 'opinion_id' || '',
    type: 'Amenazas o violencia',
  },
  {
    _id: 'opinion_id',
    rate: 'opinion_id' || '',
    type: 'Discurso de odio o incitación al odio',
  },
  {
    _id: 'opinion_id',
    rate: 'opinion_id' || '',
    type: 'Información sensible o confidencial',
  },
  {
    _id: 'opinion_id',
    rate: 'opinion_id' || '',
    type: 'Contenido que viola los términos de uso o políticas del sitio web',
  },
];
