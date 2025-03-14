import { COLLECTION_BANNER_TYPE } from 'modules/cms/collections/constants/collection-types';
import { IImageOption, ISizeOption } from 'modules/common/interfaces';

export enum BANNER_POSITION {
  BANNER_0 = 'BANNER_0',
  BANNER_1 = 'BANNER_1',
  BANNER_2 = 'BANNER_2',
  BANNER_3 = 'BANNER_3',
  BANNER_4 = 'BANNER_4',
  BANNER_5 = 'BANNER_5',
  BANNER_6 = 'BANNER_6',
}
export type MultiBannerSize = {
  BANNER_0: IImageOption;
  BANNER_1: IImageOption;
  BANNER_2: IImageOption;
  BANNER_3: IImageOption;
  BANNER_4: IImageOption;
  BANNER_5: IImageOption;
  BANNER_6: IImageOption;
};

export interface ImageSizeConfig {
  [COLLECTION_BANNER_TYPE.SIMPLE_BANNER]: IImageOption;
  [COLLECTION_BANNER_TYPE.SIDE_BY_SIDE_BANNER]: IImageOption;
  [COLLECTION_BANNER_TYPE.MULTI_BANNER]: MultiBannerSize;
}

export const DEFAULT_IMAGES_SIZES: ISizeOption[] = [
  {
    width: 5,
    quality: 10,
    blur: true,
  },
];

export const IMAGE_SIZE: ImageSizeConfig = {
  [COLLECTION_BANNER_TYPE.SIMPLE_BANNER]: {
    sizes: [
      {
        width: 5,
        quality: 10,
        blur: true,
      },
      {
        width: 361,
        height: 240,
        quality: 60,
      },
      {
        width: 380,
        quality: 60,
      },
      {
        width: 390,
        quality: 60,
      },

      {
        width: 1108,
        quality: 80,
      },
      {
        width: 1445,
        height: 300,
        quality: 80,
      },
    ],
    noExt: true,
    width: 0,
  },

  [COLLECTION_BANNER_TYPE.SIDE_BY_SIDE_BANNER]: {
    sizes: [
      { width: 5, quality: 10, blur: true },
      {
        width: 144,
        quality: 60,
        aspectRatio: '16/9',
      },
      {
        width: 218,
        quality: 60,
        aspectRatio: '16/9',
      },
      {
        width: 260,
        quality: 80,
        aspectRatio: '16/9',
      },
      {
        width: 262,
        quality: 80,
        aspectRatio: '16/9',
      },
      {
        width: 720,
        quality: 80,
        aspectRatio: '16/9',
      },
    ],
    noExt: true,
    width: 60,
  },

  [COLLECTION_BANNER_TYPE.MULTI_BANNER]: {
    BANNER_0: {
      sizes: [
        {
          width: 5,
          quality: 100,
          blur: true,
        },
        {
          width: 188,
          quality: 50,
          aspectRatio: '9/16',
        },
        {
          width: 300,
          quality: 60,
          aspectRatio: '9/16',
        },
        {
          width: 347,
          quality: 80,
          aspectRatio: '9/16',
        },
      ],
      noExt: true,
      width: 60,
    },
    BANNER_1: {
      sizes: [
        {
          width: 5,
          quality: 10,
          blur: true,
        },
        {
          width: 188,
          quality: 50,
          aspectRatio: '16/9',
        },
        {
          width: 288,
          quality: 60,
          aspectRatio: '16/9',
        },
        {
          width: 347,
          quality: 80,
          aspectRatio: '16/9',
        },
      ],
      noExt: true,
      width: 60,
    },

    BANNER_2: {
      sizes: [
        {
          width: 5,
          quality: 10,
          blur: true,
        },
        {
          width: 390,
          quality: 50,
          aspectRatio: '16/9',
        },
        {
          width: 592,
          quality: 60,
          aspectRatio: '16/9',
        },
        {
          width: 714,
          quality: 80,
          aspectRatio: '16/9',
        },
      ],
      noExt: true,
      width: 60,
    },

    BANNER_3: {
      sizes: [
        {
          width: 5,
          quality: 10,
          blur: true,
        },
        {
          width: 188,
          quality: 50,
          aspectRatio: '16/9',
        },
        {
          width: 288,
          quality: 60,
          aspectRatio: '16/9',
        },
        {
          width: 347,
          quality: 80,
          aspectRatio: '16/9',
        },
      ],
      noExt: true,
      width: 60,
    },

    BANNER_4: {
      sizes: [
        {
          width: 5,
          quality: 10,
          blur: true,
        },
        {
          width: 188,
          quality: 50,
          aspectRatio: '16/9',
        },
        {
          width: 288,
          quality: 60,
          aspectRatio: '16/9',
        },
        {
          width: 347,
          quality: 80,
          aspectRatio: '16/9',
        },
      ],
      noExt: true,
      width: 60,
    },

    BANNER_5: {
      sizes: [
        {
          width: 5,
          quality: 10,
          blur: true,
        },
        {
          width: 188,
          quality: 50,
          aspectRatio: '16/9',
        },
        {
          width: 288,
          quality: 60,
          aspectRatio: '16/9',
        },
        {
          width: 347,
          quality: 80,
          aspectRatio: '16/9',
        },
      ],
      noExt: true,
      width: 60,
    },
    BANNER_6: {
      sizes: [
        {
          width: 5,
          quality: 100,
          blur: true,
        },
        {
          width: 188,
          quality: 50,
          aspectRatio: '9/16',
        },
        {
          width: 300,
          quality: 60,
          aspectRatio: '9/16',
        },
        {
          width: 347,
          quality: 80,
          aspectRatio: '9/16',
        },
      ],
      noExt: true,
      width: 60,
    },
  },
};

type Props = Record<COLLECTION_BANNER_TYPE, any>;
export const UPLOAD_COMPONENT_SIZE: Props = {
  [COLLECTION_BANNER_TYPE.SIMPLE_BANNER]: {
    desktop: { width: 1445, height: 300 },
    mobile: { width: 390, height: 390 },
  },

  [COLLECTION_BANNER_TYPE.SIDE_BY_SIDE_BANNER]: {
    desktop: { width: 708, height: 262 },
    mobile: { width: 390, height: 144 },
  },

  [COLLECTION_BANNER_TYPE.MULTI_BANNER]: {
    BANNER_0: {
      desktop: { width: 347, height: 447 },
      mobile: { width: 188, height: 242 },
    },
    BANNER_1: {
      desktop: { width: 347, height: 191 },
      mobile: { width: 188, height: 103 },
    },

    BANNER_2: {
      desktop: { width: 714, height: 402 },
      mobile: { width: 390, height: 219 },
    },

    BANNER_3: {
      desktop: { width: 347, height: 231 },
      mobile: { width: 188, height: 125 },
    },

    BANNER_4: {
      desktop: { width: 347, height: 231 },
      mobile: { width: 188, height: 127 },
    },

    BANNER_5: {
      desktop: { width: 347, height: 191 },
      mobile: { width: 188, height: 105 },
    },
    BANNER_6: {
      desktop: { width: 347, height: 447 },
      mobile: { width: 188, height: 242 },
    },
  },
};

export const getComponentSize = (type: COLLECTION_BANNER_TYPE, position?: string) => {
  switch (type) {
    case COLLECTION_BANNER_TYPE.SIDE_BY_SIDE_BANNER:
      return UPLOAD_COMPONENT_SIZE[type];

    case COLLECTION_BANNER_TYPE.MULTI_BANNER:
      return position && UPLOAD_COMPONENT_SIZE[type][position];

    default:
      return UPLOAD_COMPONENT_SIZE[COLLECTION_BANNER_TYPE.SIMPLE_BANNER];
  }
};
