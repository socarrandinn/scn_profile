// stores/bannerStore.js
import { create } from 'zustand';
import { COLLECTION_BANNER_TYPE } from 'modules/cms/collections/constants/collection-types';
import { DEFAULT_IMAGES_SIZES, IMAGE_SIZE, MultiBannerSize } from '../constants/banner.sizes';
import { IImageOptions } from 'modules/common/interfaces';

type State = {
  setBannerImageOption: (bannerType: COLLECTION_BANNER_TYPE, position: keyof MultiBannerSize) => void;
  imageOption: IImageOptions;
  clearSize: VoidFunction;
};

const DEFAULT_IMAGE_OPTION = {
  desktop: {
    sizes: DEFAULT_IMAGES_SIZES,
    noExt: false,
    width: 0,
  },
  mobile: {
    sizes: DEFAULT_IMAGES_SIZES,
    noExt: false,
    width: 0,
  },
};

const useBannerSizeOptionContext = create<State>((set) => ({
  imageOption: DEFAULT_IMAGE_OPTION,
  setBannerImageOption: (bannerType, position) => {
    const bannerConfig = IMAGE_SIZE[bannerType];

    if (bannerType === COLLECTION_BANNER_TYPE.SIMPLE_BANNER) {
      set({ imageOption: bannerConfig as IImageOptions });
    } else if (bannerConfig && position in bannerConfig) {
      set({ imageOption: (bannerConfig as any)[position] });
    }
  },
  clearSize: () => {
    set({
      imageOption: DEFAULT_IMAGE_OPTION,
    });
  },
}));

export default useBannerSizeOptionContext;
