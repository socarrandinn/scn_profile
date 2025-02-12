// stores/bannerStore.js
import { create } from 'zustand';

type State = {
  toggleElement: (bannerId: string) => void;
  elements: string[];
  clearSelection: VoidFunction;
};

const useSelectBannerContext = create<State>((set) => ({
  elements: [],

  toggleElement: (bannerId) => {
    set((state) => {
      if (state.elements.includes(bannerId)) {
        return {
          elements: state.elements.filter((id) => id !== bannerId),
        };
      }
      return {
        elements: [...state.elements, bannerId],
      };
    });
  },

  clearSelection: () => {
    set({ elements: [] });
  },
}));

export default useSelectBannerContext;
