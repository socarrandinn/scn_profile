import { useCallback } from 'react';
import { IProduct } from '../interfaces/IProduct';
import { PriceType, WarehouseCostConfigDto } from '../interfaces/IProductPriceDetails';

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
    console.log(commissionLogistic, valueLogistic, warehouse);
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

  return {
    commissionError,
    checkGlobalPercent
  };
};
