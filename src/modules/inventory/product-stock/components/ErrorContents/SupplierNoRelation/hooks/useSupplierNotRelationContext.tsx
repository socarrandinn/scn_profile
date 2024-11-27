import { create } from 'zustand';

type IRelation = {
  warehouse: string;
  supplier: string;
};

type State = {
  setRelationSupplier: (item: IRelation) => void;
  removeRelationSupplier: (item: IRelation) => void;
  hasRelationSupplier: (item: IRelation) => boolean;
  selected: Set<IRelation>;
};

export const useSupplierRelationContext = create<State>((set, get) => ({
  selected: new Set<IRelation>(),

  setRelationSupplier: (item: IRelation) => {
    const { selected } = get();
    const newSelected = new Set(selected);
    newSelected.add(item);
    set({ selected: newSelected });
  },

  removeRelationSupplier: (item: IRelation) => {
    const { selected } = get();
    const newSelected = new Set(
      [...selected].filter((rel) => rel.supplier !== item.supplier || rel.warehouse !== item.warehouse),
    );
    set({ selected: newSelected });
  },

  hasRelationSupplier: (item: IRelation) => {
    const { selected } = get();
    return [...selected].some((rel) => rel.supplier === item.supplier && rel.warehouse === item.warehouse);
  },
}));
