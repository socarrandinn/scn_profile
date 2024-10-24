import { PriceType } from 'modules/inventory/product/interfaces/IProductPriceDetails';

export interface IWarehouseSupplier {
  warehouse: string | null;
  supplier: string | null;
  priceConfig: {
    type: PriceType;
    value: number;
  };
  visible?: boolean;
}
