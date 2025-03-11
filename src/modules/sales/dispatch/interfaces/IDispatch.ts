import { DISPATCH_STATUS_ENUM } from '../constants/dispatch.enum';

export interface IDispatch {
  _id?: string;
  owner: string;
  space: string;
  name: string;
  status: DISPATCH_STATUS_ENUM;
  createdAt: Date;
  updatedAt: Date;
  metrics: {
    suborderCount: number;
    totalUniqueProducts: number;
    totalProducts: number;
    totalWeight: number;
    totalVolume: number;
    subordersByRegion: [
      {
        state: string;
        totalSuborders: number;
      },
    ];
  };
}
