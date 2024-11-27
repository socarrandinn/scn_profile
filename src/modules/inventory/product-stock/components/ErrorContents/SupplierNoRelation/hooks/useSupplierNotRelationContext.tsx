import { IWarehouseSupplierNoExist } from 'modules/inventory/product-stock/interfaces/IStockSummary';
import { create } from 'zustand';

type IRelation = {
  warehouse: string;
  supplier: string;
};
type State = {
  setRelationSupplier: (item: IRelation) => void;
  hazRelationSupplier: (item: IWarehouseSupplierNoExist) => boolean;
  selected: IRelation[];
};

export const useSupplierRelationContext = create<State>((set, get) => ({
  selected: [],

  setRelationSupplier: (item: IRelation) => {
    const { selected } = get();
    set({ selected: [...selected, item] });
  },
  hazRelationSupplier: (item: IWarehouseSupplierNoExist) => {
    const { selected } = get();
    return selected.some((rel) => rel.supplier === item.supplier.supplierId && rel.warehouse === item.warehouse.warehouseId);
  },
}));
