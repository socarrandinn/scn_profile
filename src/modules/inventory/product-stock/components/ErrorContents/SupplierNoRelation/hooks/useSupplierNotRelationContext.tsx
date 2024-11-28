import { IWarehouseSupplierNoExist } from 'modules/inventory/product-stock/interfaces/IStockSummary';
import { create } from 'zustand';

type IRelation = {
  supplier: string;
  warehouse: string;
};

type State = {
  flag: boolean;
  removeRelationSupplier: (item: IRelation) => void;
  // hazRelationSupplier: (item: IWarehouseSupplierNoExist) => boolean;
  relationList: IWarehouseSupplierNoExist[];
  setRelationList: (selected: IWarehouseSupplierNoExist[]) => void;
  resetState: () => void;
};

export const useSupplierRelationContext = create<State>((set, get) => ({
  relationList: [],
  flag: false,
  setRelationList: (items: IWarehouseSupplierNoExist[]) => {
    set({ relationList: items, flag: true });
  },
  removeRelationSupplier: (item: IRelation) => {
    const { relationList } = get();
    const restItems = relationList?.filter(
      (rel) => !(rel.supplier.supplierId === item.supplier && rel.warehouse.warehouseId === item.warehouse),
    );
    set({ relationList: restItems });
  },

  resetState: () => {
    set({ relationList: [], flag: false }); // Restablece los valores predeterminados
  },
}));
