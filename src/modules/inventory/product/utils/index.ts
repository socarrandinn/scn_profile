import { IDistributionPrice, PriceType } from 'modules/inventory/product/interfaces/IProductPriceDetails';

export const getPercent = (all: number, percent: number) => {
  return (percent / 100) * all;
};

export const calculateFinalPrice = (distribution: IDistributionPrice) => {
  let finalPrice = Number(distribution.cost.value);

  Object.keys(distribution).forEach((key) => {
    if (key !== 'cost') {
      // @ts-ignore
      if (distribution[key].type === PriceType.FIXED) {
        // @ts-ignore
        finalPrice = finalPrice + Number(distribution[key].value);
      } else {
        // @ts-ignore
        finalPrice = finalPrice + getPercent(Number(distribution.cost.value), Number(distribution[key].value));
      }
    }
  });

  return finalPrice;
};
