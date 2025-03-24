import { SearchResponseType } from '@dfl/react-security';
import { IOrder } from '../interfaces/IOrder';
import { subDays, isAfter, parseISO } from 'date-fns';

const parser = (order: IOrder & { dflRowClass: string }) => {
  const now = new Date();
  const deliveryDueDate = order?.shipping.deliveryDueDate;

  const deliveryDueDateParsed = deliveryDueDate ? parseISO(deliveryDueDate) : null;

  if (!deliveryDueDateParsed) return order;

  if (isAfter(now, deliveryDueDateParsed)) order.dflRowClass = 'row-error';
  else if (isAfter(now, subDays(deliveryDueDateParsed, 2))) order.dflRowClass = 'row-warning';

  return order;
};

export const parserManyOrders = (data: SearchResponseType<any>): SearchResponseType<any> => {
  data.data = data.data.map(parser);
  return data;
};
