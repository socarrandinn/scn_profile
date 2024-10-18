import { IDeliveryTaxes } from 'modules/sales/common/interfaces/IOrderInvoice';

export const getDeliveryTaxes = (taxes: IDeliveryTaxes): number => {
  const keys = Object.keys(taxes) as Array<keyof IDeliveryTaxes>;
  let total = 0;

  keys.forEach((key) => {
    if (key !== '_id') {
      total += taxes[key] || 0;
    }
  });

  return total;
};
