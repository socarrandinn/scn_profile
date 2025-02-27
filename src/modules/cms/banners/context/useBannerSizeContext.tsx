// stores/bannerStore.js
import { create } from 'zustand';
import { COLLECTION_BANNER_TYPE } from 'modules/cms/collections/constants/collection-types';
import { IMAGE_SIZE, ImageSizes, MultiBannerSize } from '../constants/banner.sizes';

type State = {
  getBannerSizes: (position: keyof MultiBannerSize, bannerType: COLLECTION_BANNER_TYPE) => void;
  sizes: ImageSizes;
  clearSize: VoidFunction;
};

const useBannerSizeContext = create<State>((set) => ({
  sizes: {
    desktop: [],
    mobile: [],
  },
  getBannerSizes: (position, bannerType) => {
    const bannerConfig = IMAGE_SIZE[bannerType];

    if (bannerConfig && bannerType === COLLECTION_BANNER_TYPE.SIMPLE_BANNER) {
      set({ sizes: bannerConfig as ImageSizes });
    } else if (bannerConfig && position in bannerConfig) {
      set({ sizes: (bannerConfig as any)[position] || [] });
    }
  },
  clearSize: () => {
    set({
      sizes: {
        desktop: [],
        mobile: [],
      },
    });
  },
}));

export default useBannerSizeContext;
