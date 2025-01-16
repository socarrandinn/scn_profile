import { IMedia } from 'modules/cms/medias/interfaces/IMedia';
import { create } from 'zustand';

type MediaProps = {
  desktop: IMedia | null;
  mobile: IMedia | null;
};
interface State {
  view: 'desktop' | 'mobile';
  setView: (view: 'desktop' | 'mobile') => void;
  media: MediaProps;
  setMedia: ({ desktop, mobile }: MediaProps) => void;
  toggleMedia: (mediaItem: IMedia) => void;
  removeMedia: () => void;
  reset: () => void;
}

export const useBannerContext = create<State>((set) => ({
  view: 'desktop',
  setView: (view: 'desktop' | 'mobile') => {
    set({ view });
  },
  media: {
    desktop: null,
    mobile: null,
  },
  toggleMedia: (mediaItem: IMedia) => {
    set((state) => {
      const newMedia = { ...state.media };
      const currentImageKey = state.view;

      if (newMedia[currentImageKey] && newMedia[currentImageKey]?._id === mediaItem._id) {
        newMedia[currentImageKey] = null;
      } else {
        newMedia[currentImageKey] = mediaItem;
      }

      return { media: newMedia };
    });
  },
  removeMedia: () => {
    set((state) => {
      const currentImageKey = state.view;
      const newMedia = { ...state.media };
      newMedia[currentImageKey] = null;
      return { media: newMedia };
    });
  },
  setMedia: ({ desktop, mobile }: MediaProps) => {
    set({ media: { desktop, mobile } });
  },
  reset: () => {
    set(() => ({
      view: 'desktop',
      media: {
        desktop: null,
        mobile: null,
      },
    }));
  },
}));
