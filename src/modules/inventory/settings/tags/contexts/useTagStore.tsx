import { create } from 'zustand';

type State = {
  hazTotalTag: boolean;
  setTotalTag: (hazTotalTag: boolean) => void;
};

export const useTagStore = create<State>((set, get) => ({
  hazTotalTag: false,
  setTotalTag: (hazTotalTag: boolean) => {
    set({ hazTotalTag });
  },
}));
