import { Filter } from '@dfl/mui-admin-layout';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface State {
  filters: Filter[];
  excludeFiltersKey: string[];
  setFilter: (filters: Filter[]) => void;
  updateExcludeFilter: (key: string) => void;
  clearStore: (tableId: string) => void;
}

export const useFilterStore = create(
  persist<State>(
    (set, get) => ({
      filters: [],
      excludeFiltersKey: [],
      updateExcludeFilter: (key: string) => {
        const { excludeFiltersKey } = get();
        const isExist = excludeFiltersKey.includes(key);
        if (isExist) {
          set((state) => ({
            ...state,
            excludeFiltersKey: excludeFiltersKey?.filter((ex) => ex !== key),
          }));
        } else {
          const excludes = [...excludeFiltersKey, key];
          set((state) => ({
            ...state,
            excludeFiltersKey: excludes,
          }));
        }
      },
      setFilter: async (filters) => {
        set((state) => ({
          ...state,
          filters,
        }));
      },
      clearStore: (tableId: string) => {
        set((state) => ({
          ...state,
          excludeFiltersKey: state.excludeFiltersKey.filter((key) => !key.includes(tableId)),
        }));
      },
    }),
    {
      name: 'filter-selected',
      // @ts-ignore
      partialize: (state) => ({ excludeFiltersKey: state.excludeFiltersKey }),
    },
  ),
);
