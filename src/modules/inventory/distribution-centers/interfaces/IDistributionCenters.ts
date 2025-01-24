import { IAddress } from 'modules/common/interfaces';
import { IContactInfo } from 'modules/common/interfaces/IContactInfo';
import { WarehouseLocation } from 'modules/inventory/warehouse/interfaces';

export interface IDistributionCenters {
  _id?: string;
  name: string;
  description?: string;
  visible: boolean;
  space?: string | null;
  contacts: IContactInfo;
  logistic: any | null;
  address: IAddress;
  locations: WarehouseLocation[] | undefined;
}

export interface IAddWarehouses {
  warehouses: string[];
  distributionCenter?: string;
}
