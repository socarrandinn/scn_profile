import { Filter } from '@dfl/mui-admin-layout';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface State {
  filters: Filter[];
  excludeFiltersMap: Record<string, string[]>;
  setFilter: (filters: Filter[], tableId: string, defaultFilterKeys?: string[]) => void;
  updateExcludeFilter: (key: string, tableId: string) => void;
  clearStore: (tableId: string) => void;
}

export const useFilterStore = create(
  persist<State>(
    (set, get) => ({
      filters: [],
      excludeFiltersMap: {},
      updateExcludeFilter: (key: string, tableId: string) => {
        const { excludeFiltersMap } = get();
        const currentExcludes = excludeFiltersMap[tableId] || [];

        if (currentExcludes.includes(key)) {
          excludeFiltersMap[tableId] = currentExcludes.filter((item) => item !== key);
        } else {
          excludeFiltersMap[tableId] = [...currentExcludes, key];
        }

        set((state) => ({
          ...state,
          excludeFiltersMap: { ...excludeFiltersMap },
        }));
      },
      setFilter: async (filters, tableId, defaultFilterKeys) => {
        const { excludeFiltersMap } = get();
        const currentExcludes = excludeFiltersMap[tableId] || [];

        if (currentExcludes.length > 0) {
          set((state) => ({
            ...state,
            filters,
          }));
          return;
        }

        const newExcludesForTable = defaultFilterKeys
          ? filters.filter((filter) => !defaultFilterKeys.includes(filter.key)).map((filter) => filter.key)
          : [];

        excludeFiltersMap[tableId] = newExcludesForTable;

        set((state) => ({
          ...state,
          filters,
          excludeFiltersMap: { ...excludeFiltersMap },
        }));
      },
      clearStore: (tableId: string) => {
        const { excludeFiltersMap } = get();
        const newExcludeFiltersMap = { ...excludeFiltersMap };
        delete newExcludeFiltersMap?.[tableId];

        set((state) => ({
          ...state,
          excludeFiltersMap: newExcludeFiltersMap,
        }));
      },
    }),
    {
      name: 'filter-selected',
      storage: createJSONStorage(() => localStorage),
      // @ts-ignore
      partialize: (state) => ({ excludeFiltersMap: state.excludeFiltersMap }),
    },
  ),
);
