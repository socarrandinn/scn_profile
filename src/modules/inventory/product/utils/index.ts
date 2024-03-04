import { IDistributionPrice, PriceType } from 'modules/inventory/product/interfaces/IProductPriceDetails';

export const getPercent = (all: number, percent: number) => {
  return (percent / 100) * all;
};

export const calculateFinalPrice = (distribution: IDistributionPrice, costo: number) => {
  let finalPrice = Number(distribution.cost.value) || costo;

  if (finalPrice <= 0 || finalPrice === undefined) return 0;

  const keysInOrder = ['logistic', 'shipping', 'commercial', 'otherCost'];

  keysInOrder.forEach((key) => {
    // @ts-ignore
    if (key !== 'cost' && distribution[key]) {
      // @ts-ignore
      if (distribution[key].type === PriceType.FIXED) {
        // @ts-ignore
        finalPrice = finalPrice + Number(distribution[key].value);
      } else {
        // @ts-ignore
        finalPrice = finalPrice + getPercent(Number(finalPrice), Number(distribution[key].value));
      }
    }
  });

  return finalPrice;
};
