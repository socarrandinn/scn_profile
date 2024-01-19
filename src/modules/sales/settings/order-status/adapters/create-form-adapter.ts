import { IOrderStatus } from '../interfaces';

export const createFormAdapter = (data: IOrderStatus): IOrderStatus => {
  if (!data.notification.enabled) {
    data.notification.audience = [];
  }

  return data;
};
