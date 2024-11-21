import { useCallback } from 'react';
import { IProduct } from '../interfaces/IProduct';
import { IPriceValue, PriceType, WarehouseCostConfigDto } from '../interfaces/IProductPriceDetails';

export const usePriceCommission = () => {
  const calcPercent = (cost: number, value: number) => (value * 100) / cost;
  const calcValue = (cost: number, value: number) => (cost * value) / 100;

  const checkCommissionLogistic = useCallback(
    (warehouse: WarehouseCostConfigDto, commissionLogistic: IPriceValue, totalCost: number) => {
      if (warehouse?.type === PriceType.PERCENT) {
        if (commissionLogistic?.type === PriceType.PERCENT) {
          return warehouse?.value > commissionLogistic?.value;
        } else {
          const percent = calcPercent(totalCost, commissionLogistic?.value);
          return warehouse?.value > percent;
        }
      } else {
        if (commissionLogistic?.type === PriceType.FIXED) {
          return warehouse?.value > commissionLogistic?.value;
        } else {
          const value = calcValue(totalCost, commissionLogistic?.value);
          return warehouse?.value > value;
        }
      }
    },
    [],
  );

  const commissionError = useCallback(
    (product: IProduct) =>
      product?.priceDetails?.distribution?.warehouses
        ?.map((warehouse) =>
          checkCommissionLogistic(
            warehouse,
            product?.priceDetails?.distribution?.logistic as IPriceValue,
            product?.priceDetails?.values?.totalCost || 0,
          ),
        )
        .includes(true) || false,
    [checkCommissionLogistic],
  );

  return {
    commissionError,
    checkCommissionLogistic,
  };
};
