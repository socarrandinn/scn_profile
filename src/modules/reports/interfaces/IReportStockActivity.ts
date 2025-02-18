import { OPERATION_STOCK } from '../components/common/constants/enums';

export interface IReportStockActivity {
  _id: string;
  owner: string;
  space: string;
  device: Device;
  item: string;
  warehouse: string;
  quantity: number;
  user: User;
  createdAt: string;
  operation: OPERATION_STOCK;
}

export interface Device {
  client: Client;
  os: Os;
  device: Device2;
  bot: any;
  hash: string;
  ip: string;
}

export interface Client {
  type: string;
  name: string;
  version: string;
  engine: string;
  engineVersion: string;
}

export interface Os {
  name: string;
  version: string;
  platform: string;
}

export interface Device2 {
  type: string;
  brand: string;
  model: string;
}

export interface User {
  userId: string;
  fullName: string;
  email: string;
}

interface ICause {
  _id: string;
  name: string;
}
export interface IStockActivityReduction {
  reductionCauseCount: {
    cause: ICause;
    count: number;
  };
  reductionCauseTotal: {
    cause: ICause;
    total: number;
  };
}

export interface IStockActivityHistogram {
  _id: {
    year: number;
    month: number;
    day: number;
  };
  countAdded: number;
  countDiscounted: number;
  cumulativeAdded: number;
  cumulativeDiscounted: number;
}
