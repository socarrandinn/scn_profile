// stores/bannerStore.js
import { create } from 'zustand';
import { IBanner } from '../interfaces';

type Position = Pick<IBanner, '_id' | 'position'>;

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
