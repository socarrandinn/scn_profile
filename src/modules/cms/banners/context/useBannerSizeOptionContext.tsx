// stores/bannerStore.js
import { create } from 'zustand';
import { COLLECTION_BANNER_TYPE } from 'modules/cms/collections/constants/collection-types';
import { DEFAULT_IMAGES_SIZES, IMAGE_SIZE, MultiBannerSize } from '../constants/banner.sizes';
import { IImageOption } from 'modules/common/interfaces';

type State = {
  setBannerImageOption: (bannerType: COLLECTION_BANNER_TYPE, position: keyof MultiBannerSize) => void;
  imageOption: IImageOption;
  clearSize: VoidFunction;
};

const DEFAULT_IMAGE_OPTION = {
  sizes: DEFAULT_IMAGES_SIZES,
  noExt: false,
  width: 0,
};

const useBannerSizeOptionContext = create<State>((set) => ({
  imageOption: DEFAULT_IMAGE_OPTION,
  setBannerImageOption: (bannerType, position) => {
    const bannerConfig = IMAGE_SIZE[bannerType];

    if (bannerType === COLLECTION_BANNER_TYPE.MULTI_BANNER && position) {
      set({ imageOption: (bannerConfig as any)[position] });
    } else if (bannerConfig) {
      set({ imageOption: bannerConfig as IImageOption });
    }
  },
  clearSize: () => {
    set({
      imageOption: DEFAULT_IMAGE_OPTION,
    });
  },
}));

export default useBannerSizeOptionContext;
