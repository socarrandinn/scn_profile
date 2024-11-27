import { create } from 'zustand';

type IRelation = {
  warehouse: string;
  supplier: string;
};
type State = {
  setRelationSupplier: (item: IRelation) => void;
  selected: IRelation[];
};

export const useSupplierRelationContext = create<State>((set, get) => ({
  selected: [],

  setRelationSupplier: (item: IRelation) => {
    const { selected } = get();
    set({ selected: [...selected, item] });
  },

  removeRelationSupplier: (item: IRelation) => {
    const { selected } = get();
    set({
      selected: selected.filter((rel) => rel.supplier !== item.supplier || rel.warehouse !== item.warehouse),
    });
  },
}));
