import { SearchResponseType } from '@dfl/react-security';

const laborDay = (startDate: Date, endDate: Date) => {
  const differenceTime = endDate.getTime() - startDate.getTime();
  const differenceDay = Math.floor(differenceTime / (1000 * 24 * 60 * 60)) + 1;

  let accumulated = 0;
  let startDiscount = 0;
  if (startDate.getDay() > 0) {
    startDiscount = 7 - startDate.getDay();
    if (differenceDay >= startDiscount) accumulated++;
  }

  let endDiscount = 0;

  if (endDate.getDay() < 6) endDiscount = endDate.getDay();

  const days = differenceDay - startDiscount - endDiscount;
  const restDays = Math.max((Math.floor(days / 7) + (days % 7 > 0 ? 0.5 : 0)) * 2 + accumulated, 0);

  return differenceDay - restDays;
};

const COMPLETED_STATUS = '6300dc754b231f77a255fc11';
const CANCEL_STATUS = '6300dc754b231ff54655fc12';
const ERROR_STATUS = '6300dc754b231f46bf55fc13';
const END_STATUS = [COMPLETED_STATUS, CANCEL_STATUS, ERROR_STATUS];

const parser = (order: any) => {
  if (END_STATUS.includes(order.status?._id || order.status) || order.ended || !order.payment?.payedDate) {
    return order;
  }

  let start = order.payment.payedDate;
  if (typeof start === 'string') start = new Date(start);
  order.laborDay = laborDay(start, new Date());
  if (order.laborDay >= 5) order.dflRowClass = 'row-warning';
  if (order.laborDay >= 10) order.dflRowClass = 'row-error';
  return order;
};

export const parserManyOrders = (data: SearchResponseType<any>): SearchResponseType<any> => {
  data.data = data.data.map(parser);
  return data;
};
