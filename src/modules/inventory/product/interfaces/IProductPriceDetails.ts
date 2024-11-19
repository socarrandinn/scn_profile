import { OTHER_COST_OWNERSHIP_TYPE } from '../constants/product-other-cost.enum';

export enum PriceType {
  PERCENT = 'PERCENT',
  FIXED = 'FIXED',
}

export interface IPriceValue {
  type: PriceType;
  value: number;
}

export interface IDistributionPrice {
  cost: IPriceValue; // costo
  otherCost?: IOtherCost[]; // otros costos
  logistic: IPriceValue; // comisión logistica
  shipping: IPriceValue; // costo de envío
  commercial: IPriceValue; // margen comercial
  offer?: IPriceValue; // oferta
  platform?: IPriceValue; // costo de la plataforma;
  warehouses?: WarehouseCostConfigDto[];
}

export interface WarehouseCostConfigDto extends IPriceValue {
  warehouse: string;
  warehouseName: string;
}

export interface IOtherCost extends IPriceValue {
  ownershipType: OTHER_COST_OWNERSHIP_TYPE;
  ownership: string;
  ownershipName: string;
  value: number;
  type: PriceType;
}

export interface IValuesPrice {
  cost: number;
  otherCost?: OtherPriceValue[];
  logistic: number;
  shipping: number;
  commercial: number;
  offer: number;
  platform: number;
  total: number;
  warehouses?: IWarehouseValue[];
}

export interface IWarehouseValue {
  warehouse: string;
  cost: number;
}

export interface OtherPriceValue {
  ownershipType: OTHER_COST_OWNERSHIP_TYPE;
  ownership: string;
  cost: number;
}

export interface IProductPriceDetails {
  distribution?: IDistributionPrice;
  values?: IValuesPrice;
}
