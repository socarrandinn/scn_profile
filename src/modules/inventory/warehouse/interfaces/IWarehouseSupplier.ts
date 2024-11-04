import { PriceType } from 'modules/inventory/product/interfaces/IProductPriceDetails';
import { ISupplier } from 'modules/inventory/provider/supplier/interfaces';
import { IWarehouse } from './IWarehouse';

export interface IWarehouseSupplier {
  warehouse: IWarehouse | null;
  supplier: ISupplier | null;
  priceConfig: IPriceConfig;
  visible?: boolean;
  isDefault?: boolean;
}

export interface IPriceConfig {
  type: PriceType;
  value: number;
}

export interface IPriceConfigUpdate {
  warehouse: string;
  supplier: string;
  priceConfig: IPriceConfig;
}
