import { create } from 'zustand';

interface State {
  view: 'desktop' | 'module';
  setView: (view: 'desktop' | 'module') => void;
}
export const useBannerContext = create<State>((set) => ({
  view: 'desktop',
  setView: (view: 'desktop' | 'module') => {
    set({ view });
  },
}));
