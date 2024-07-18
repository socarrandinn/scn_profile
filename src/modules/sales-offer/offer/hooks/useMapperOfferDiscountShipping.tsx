import { isEmpty } from 'lodash';
import { OFFER_TYPE } from '../interfaces/offer.type.enum';
import { IAddressRuleOffer, IExtendOffer } from '../interfaces/IExtendOffer';

export const useMapperOfferDiscountShipping = () => {
  const onProcessRules = (offer: IExtendOffer) => {
    const ruleProduct = offer?.productSection ? offer.rulesProducts : [];
    const ruleCategory = offer?.categorySection ? offer.rulesCategories : [];
    const ruleAddress = offer?.addressSection ? [offer.rulesAddress] : [];
    const ruleAmount = offer?.amountSection ? offer.rulesAmounts : [];
    const ruleUsage = offer?.usageSection ? offer.rulesUsages : [];
    const ruleQuantityOrder = offer?.quantityOrderSection ? offer.rulesQuantityOrders : [];
    const ruleAmountCategory = offer?.amountCategorySection ? offer?.rulesAmountsCategory : [];

    // @ts-ignore
    return [
      // @ts-ignore
      ...ruleProduct,
      // @ts-ignore
      ...ruleCategory,
      // @ts-ignore
      ...MapperAddress(ruleAddress),
      // @ts-ignore
      ...ruleAmount,
      // @ts-ignore
      ...ruleUsage,
      // @ts-ignore
      ...ruleQuantityOrder,
      ruleAmountCategory,
    ].filter((a) => a.length !== 0);
  };

  const MapperAddress = (ruleAddress: IAddressRuleOffer[]) => {
    if (isEmpty(ruleAddress)) return [];
    return ruleAddress?.map((rule: IAddressRuleOffer) => ({
      operator: rule.operator,
      fact: rule.fact,
      value: (rule.value as IAddressRuleOffer[])?.map((e) => {
        return {
          municipality: e?.municipality ? `${e?.municipality as unknown as string}` : null,
          state: e?.state ? `${e?.state as unknown as string}` : null,
        };
      }),
    }));
  };

  // mapper valueDiscount
  const onMapperValue = (valueDiscount: any, typeOffer: OFFER_TYPE) => {
    const { value, type } = valueDiscount;
    if (typeOffer === OFFER_TYPE.INCLUDE_PRODUCT) {
      return {
        type,
        value: Number(0),
      };
    }
    return {
      type,
      value: Number(value),
    };
  };

  return {
    onProcessRules,
    onMapperValue,
  };
};
