import { COLLECTION_BANNER_TYPE } from 'modules/cms/collections/constants/collection-types';

export type ImageSize = {
  width: number;
  height: number;
  quality: number;
  blur?: boolean;
};

export type ImageSizes = {
  desktop: ImageSize[];
  mobile: ImageSize[];
};

type SideBySideBannerSize = {
  BANNER_0: ImageSizes;
  BANNER_1: ImageSizes;
};

export type MultiBannerSize = {
  BANNER_0: ImageSizes;
  BANNER_1: ImageSizes;
  BANNER_2: ImageSizes;
  BANNER_3: ImageSizes;
  BANNER_4: ImageSizes;
  BANNER_5: ImageSizes;
  BANNER_6: ImageSizes;
};

export interface ImageSizeConfig {
  [COLLECTION_BANNER_TYPE.SIMPLE_BANNER]: ImageSizes;
  [COLLECTION_BANNER_TYPE.SIDE_BY_SIDE_BANNER]: SideBySideBannerSize;
  [COLLECTION_BANNER_TYPE.MULTI_BANNER]: MultiBannerSize;
}

export const IMAGE_SIZE: ImageSizeConfig = {
  [COLLECTION_BANNER_TYPE.SIMPLE_BANNER]: {
    desktop: [{ width: 1448, height: 302, quality: 100 }],
    mobile: [{ width: 794, height: 530, quality: 100 }],
  },

  [COLLECTION_BANNER_TYPE.SIDE_BY_SIDE_BANNER]: {
    BANNER_0: {
      desktop: [{ width: 709, height: 262, quality: 100 }],
      mobile: [{ width: 709, height: 262, quality: 100 }],
    },
    BANNER_1: {
      desktop: [{ width: 709, height: 262, quality: 100 }],
      mobile: [{ width: 709, height: 262, quality: 100 }],
    },
  },

  [COLLECTION_BANNER_TYPE.MULTI_BANNER]: {
    BANNER_0: {
      desktop: [{ width: 347, height: 447, quality: 100 }],
      mobile: [{ width: 385, height: 497, quality: 100 }],
    },
    BANNER_1: {
      desktop: [{ width: 347, height: 191, quality: 100 }],
      mobile: [{ width: 385, height: 212, quality: 100 }],
    },

    BANNER_2: {
      desktop: [{ width: 714, height: 402, quality: 100 }],
      mobile: [{ width: 794, height: 447, quality: 100 }],
    },

    BANNER_3: {
      desktop: [{ width: 347, height: 231, quality: 100 }],
      mobile: [{ width: 385, height: 256, quality: 100 }],
    },

    BANNER_4: {
      desktop: [{ width: 347, height: 231, quality: 100 }],
      mobile: [{ width: 385, height: 497, quality: 100 }],
    },

    BANNER_5: {
      desktop: [{ width: 347, height: 191, quality: 100 }],
      mobile: [{ width: 385, height: 256, quality: 100 }],
    },

    BANNER_6: {
      desktop: [{ width: 347, height: 447, quality: 100 }],
      mobile: [{ width: 385, height: 212, quality: 100 }],
    },
  },
};
