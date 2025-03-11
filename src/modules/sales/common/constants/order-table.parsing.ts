import { SearchResponseType } from '@dfl/react-security';
import { IOrder } from '../interfaces/IOrder';
import { DELIVERY_STATUS_ENUM } from './order.enum';

const parser = (order: IOrder & { dflRowClass: string }) => {
  const deliveryStatus = order?.shipping?.deliveryStatus;

  if (!deliveryStatus) return order;
  if ([DELIVERY_STATUS_ENUM.AT_RISK].includes(deliveryStatus)) return (order.dflRowClass = 'row-warning');
  if ([DELIVERY_STATUS_ENUM.DELAYED, DELIVERY_STATUS_ENUM.SEVERELY_DELAYED].includes(deliveryStatus)) {
    return (order.dflRowClass = 'row-error');
  }
  return order;
};

export const parserManyOrders = (data: SearchResponseType<any>): SearchResponseType<any> => {
  data.data = data.data.map(parser);
  return data;
};
