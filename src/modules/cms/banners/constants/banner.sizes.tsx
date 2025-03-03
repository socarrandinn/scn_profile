import { COLLECTION_BANNER_TYPE } from 'modules/cms/collections/constants/collection-types';
import { IImageOptions, ISizeOption } from 'modules/common/interfaces';

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
  BANNER_0: IImageOptions;
  BANNER_1: IImageOptions;
  BANNER_2: IImageOptions;
  BANNER_3: IImageOptions;
  BANNER_4: IImageOptions;
  BANNER_5: IImageOptions;
  BANNER_6: IImageOptions;
};

export interface ImageSizeConfig {
  [COLLECTION_BANNER_TYPE.SIMPLE_BANNER]: IImageOptions;
  [COLLECTION_BANNER_TYPE.SIDE_BY_SIDE_BANNER]: IImageOptions;
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
    desktop: {
      sizes: [
        {
          width: 5,
          quality: 10,
          blur: true,
        },
        {
          width: 1108,
          quality: 60,
          aspectRatio: '16/9',
        },
        {
          width: 1445,
          quality: 80,
          aspectRatio: '16/9',
        },
      ],
      noExt: true,
      width: 0,
    },
    mobile: {
      sizes: [
        {
          width: 5,
          quality: 10,
          blur: true,
        },
        {
          width: 390,
          quality: 100,
          aspectRatio: '4/4',
        },
      ],
      noExt: true,
      width: 60,
    },
  },

  [COLLECTION_BANNER_TYPE.SIDE_BY_SIDE_BANNER]: {
    desktop: {
      sizes: [
        { width: 5, quality: 10, blur: true },
        {
          width: 218,
          quality: 60,
          aspectRatio: '16/9',
        },
        {
          width: 262,
          quality: 80,
          aspectRatio: '16/9',
        },
      ],
      noExt: true,
      width: 60,
    },
    mobile: {
      sizes: [
        { width: 5, quality: 10, blur: true },
        {
          width: 144,
          quality: 60,
          aspectRatio: '16/9',
        },
      ],
      noExt: true,
      width: 60,
    },
  },

  [COLLECTION_BANNER_TYPE.MULTI_BANNER]: {
    BANNER_0: {
      desktop: {
        sizes: [
          {
            width: 5,
            quality: 100,
            blur: true,
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
      mobile: {
        sizes: [
          {
            width: 5,
            quality: 100,
            blur: true,
          },
          {
            width: 190,
            quality: 50,
            aspectRatio: '9/16',
          },
        ],
        noExt: true,
        width: 60,
      },
    },
    BANNER_1: {
      desktop: {
        sizes: [
          {
            width: 5,
            quality: 10,
            blur: true,
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
      mobile: {
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
        ],
        noExt: true,
        width: 60,
      },
    },

    BANNER_2: {
      desktop: {
        sizes: [
          {
            width: 5,
            quality: 10,
            blur: true,
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
      mobile: {
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
        ],
        noExt: true,
        width: 60,
      },
    },

    BANNER_3: {
      desktop: {
        sizes: [
          {
            width: 5,
            quality: 10,
            blur: true,
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
      mobile: {
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
        ],
        noExt: true,
        width: 60,
      },
    },

    BANNER_4: {
      desktop: {
        sizes: [
          {
            width: 5,
            quality: 10,
            blur: true,
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
      mobile: {
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
        ],
        noExt: true,
        width: 60,
      },
    },

    BANNER_5: {
      desktop: {
        sizes: [
          {
            width: 5,
            quality: 10,
            blur: true,
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
      mobile: {
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
        ],
        noExt: true,
        width: 60,
      },
    },

    BANNER_6: {
      desktop: {
        sizes: [
          {
            width: 5,
            quality: 100,
            blur: true,
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
      mobile: {
        sizes: [
          {
            width: 5,
            quality: 100,
            blur: true,
          },
          {
            width: 190,
            quality: 50,
            aspectRatio: '9/16',
          },
        ],
        noExt: true,
        width: 60,
      },
    },
  },
};
