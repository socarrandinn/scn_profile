import { create } from 'zustand';
import { IItemUpdateStockError } from 'modules/inventory/product-stock/interfaces/IStockSummary';

interface State {
  items: IItemUpdateStockError[];
  setItems: (items: IItemUpdateStockError[]) => void;
  setQuantity: (quantity: number, itemId: string) => void;
}

export const useUpdateStockContext = create<State>((set, get) => ({
  items: [],
  setItems: (items: IItemUpdateStockError[]) => {
    set((state) => ({ ...state, items }));
  },
  setQuantity: (quantity: number, itemId: string) => {
    const { items } = get();
    const _q = Number(quantity);
    const updatedItems = items.map((item) => (item.item?._id === itemId ? { ...item, quantity: _q } : item));
    set((state) => ({ ...state, items: updatedItems }));
  },
}));
