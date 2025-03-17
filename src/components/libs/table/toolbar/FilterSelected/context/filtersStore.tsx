import { Filter } from '@dfl/mui-admin-layout';
import { create, StateCreator } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface State {
  filters: Filter[];
  excludeFiltersMap: Record<string, string[]>;
  allFilterMap: Record<string, boolean>;
  setFilter: (filters: Filter[], tableId: string, defaultFilterKeys?: string[]) => void;
  updateExcludeFilter: (key: string, tableId: string) => void;
  clearStore: (tableId: string) => void;
  reset: (tableId: string) => void;
  defaultFilterKeys: string[];
}

const filterStoreCreator: StateCreator<State> = (set, get) => ({
  filters: [],
  defaultFilterKeys: [],
  excludeFiltersMap: {},
  allFilterMap: {},
  updateExcludeFilter: (key: string, tableId: string) => {
    const { excludeFiltersMap, allFilterMap } = get();
    const currentExcludes = excludeFiltersMap[tableId] || [];
    allFilterMap[tableId] = false;

    if (currentExcludes.includes(key)) {
      excludeFiltersMap[tableId] = currentExcludes.filter((item) => item !== key);
    } else {
      excludeFiltersMap[tableId] = [...currentExcludes, key];
    }

    if (currentExcludes.length === 0) {
      allFilterMap[tableId] = false;
    }

    set((state: State) => ({
      ...state,
      excludeFiltersMap: { ...excludeFiltersMap },
    }));
  },
  setFilter: async (filters, tableId, defaultFilterKeys) => {
    const { excludeFiltersMap, allFilterMap } = get();
    const currentExcludes = excludeFiltersMap[tableId] || [];
    const isAllFilter = allFilterMap[tableId] || false;

    const newExcludesForTable =
      defaultFilterKeys?.length === 0
        ? []
        : filters.filter((filter) => !defaultFilterKeys?.includes(filter.key)).map((filter) => filter.key);

    if (isAllFilter || currentExcludes.length > 0) {
      set((state: State) => ({
        ...state,
        defaultFilterKeys: newExcludesForTable,
        filters,
      }));
      return;
    }

    excludeFiltersMap[tableId] = newExcludesForTable;

    set((state: State) => ({
      ...state,
      filters,
      defaultFilterKeys: newExcludesForTable,
      excludeFiltersMap: { ...excludeFiltersMap },
    }));
  },
  clearStore: (tableId: string) => {
    const { allFilterMap } = get();
    const newAllFilterMap = { ...allFilterMap, [tableId]: true };

    set((state: State) => ({
      ...state,
      allFilterMap: newAllFilterMap,
      excludeFiltersMap: { ...state.excludeFiltersMap, [tableId]: [] },
    }));
  },

  reset: (tableId: string) => {
    const { defaultFilterKeys } = get();
    if (defaultFilterKeys.length > 0) {
      set((state: State) => ({
        ...state,
        excludeFiltersMap: { ...state.excludeFiltersMap, [tableId]: defaultFilterKeys || [] },
      }));
    }
  },
});

export const useFilterStore = create(
  persist<State>(filterStoreCreator, {
    name: 'filter-selected',
    storage: createJSONStorage(() => localStorage),
    // @ts-ignore
    partialize: (state: State) => ({ excludeFiltersMap: state.excludeFiltersMap, allFilterMap: state.allFilterMap }),
  }),
);
