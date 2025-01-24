import { IAddress } from 'modules/common/interfaces';
import { IContactInfo } from 'modules/common/interfaces/IContactInfo';
import { IDistributionCenters } from 'modules/inventory/distribution-centers/interfaces';

export interface IWarehouse {
  _id?: string;
  name: string;
  description?: string;
  visible: boolean;
  contacts: IContactInfo;
  logistic: any | null;
  address: IAddress;
  space?: string | null;
  distributionCenters?: IDistributionCenters[];
  // locations: WarehouseLocation[] | undefined;
}

export interface IWarehouseSummary {
  warehouseId: string;
  name: string;
}

export interface IWarehouseAddressList {
  label: string;
  value: any;
}

export interface WarehouseLocation {
  states: string[];
  country: string;
  state?: string;
  code?: string;
  region?: number;
  type?: string;
  acronym?: string;
}
