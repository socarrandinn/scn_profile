import { IAddress } from 'modules/common/interfaces';
import { IContactInfo } from 'modules/common/interfaces/IContactInfo';
import { PRICE_TYPE } from 'modules/inventory/common/constants/price-type.enum';
import { WarehouseLocation } from 'modules/inventory/warehouse/interfaces';

export interface IDistributionCenters {
  _id?: string;
  name: string;
  description?: string;
  visible: boolean;
  space?: string | null;
  contacts: IContactInfo;
  handlingCost: IAmountConfig;
  logistic: any | null;
  address: IAddress;
}

export interface IAddWarehouses {
  warehouses: string[];
  distributionCenter?: string | null;
}

export interface IAmountConfig {
  type: PRICE_TYPE;
  value: number;
}
