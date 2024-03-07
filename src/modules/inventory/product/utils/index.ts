import { IDistributionPrice, PriceType } from 'modules/inventory/product/interfaces/IProductPriceDetails';

export const getPercent = (all: number, percent: number) => {
  const price = percent > 100 ? all : (percent / 100) * all;
  return price;
};

export const calculateFinalPrice = (distribution: IDistributionPrice, costo: number) => {
  let finalPrice = Number(distribution.cost.value) || costo;

  if (isNaN(finalPrice) || finalPrice <= 0) {
    return 0;
  }

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
