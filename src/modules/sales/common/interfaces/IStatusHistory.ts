import { IOrderStatus } from 'modules/sales/settings/order-status/interfaces';
import { IUser } from 'modules/security/users/interfaces/IUser';

export interface IStatusHistory {
  system: boolean;
  status: IOrderStatus;
  date: string;
  user: IUser;
  ref: string;
}
