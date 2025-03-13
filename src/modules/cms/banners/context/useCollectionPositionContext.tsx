// stores/bannerStore.js
import { create } from 'zustand';
import { IBanner } from '../interfaces';
import { COLLECTION_BANNER_TYPE } from 'modules/cms/collections/constants/collection-types';

type Position = Pick<IBanner, '_id' | 'position'> & { bannerType: COLLECTION_BANNER_TYPE };

type State = {
  onCheckPosition: (position: Position) => void;
  collection: Position | null;
  clearSelection: VoidFunction;
};

const useCollectionPositionContext = create<State>((set) => ({
  collection: null,

  onCheckPosition: (position) => {
    set({ collection: position });
  },

  clearSelection: () => {
    set({ collection: null });
  },
}));

export default useCollectionPositionContext;
