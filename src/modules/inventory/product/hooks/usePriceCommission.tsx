import { useCallback } from 'react';
import { IProduct } from '../interfaces/IProduct';
import { IPriceValue, PriceType, WarehouseCostConfigDto } from '../interfaces/IProductPriceDetails';

export const usePriceCommission = () => {
  const checkGlobalPercent = ({
    commissionLogistic,
    valueLogistic,
    warehouse,
  }: {
    commissionLogistic: number;
    valueLogistic: number;
    warehouse: WarehouseCostConfigDto;
  }) => {
    const type = warehouse?.type;
    if (type === PriceType.PERCENT) {
      return warehouse?.value > commissionLogistic;
    }
    return warehouse?.value > valueLogistic;
  };

  const commissionError = useCallback(
    (product: IProduct) =>
      product?.priceDetails?.distribution?.warehouses
        ?.map((warehouse) =>
          checkGlobalPercent({
            warehouse,
            commissionLogistic: product?.priceDetails?.distribution?.logistic?.value || 0,
            valueLogistic: product?.priceDetails?.values?.logistic || 0,
          }),
        )
        .includes(true) || false,
    [],
  );

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

  return {
    commissionError,
    checkGlobalPercent,
    checkCommissionLogistic,
  };
};
