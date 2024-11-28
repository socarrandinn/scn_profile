import { create } from 'zustand';
import { ISummaryTags } from '../interfaces';

type State = {
  productTags: ISummaryTags | [];
  setProductTagRequired: (productTagRequired: ISummaryTags | []) => void;
  resetState: () => void;

  // other tags
  otherTags: ISummaryTags | [];
  addOtherTags: (otherTags: ISummaryTags | []) => void;
};

export const useProductTagContext = create<State>((set, get) => ({
  productTags: [],
  otherTags: [],
  setProductTagRequired: (productTags: ISummaryTags | []) => {
    set((state) => ({ ...state, productTags }));
  },

  addOtherTags: (otherTags: ISummaryTags | []) => {
    set((state) => ({ ...state, otherTags }));
  },

  resetState: () => {
    set((state) => ({ ...state, productTags: [] }));
  },
}));
