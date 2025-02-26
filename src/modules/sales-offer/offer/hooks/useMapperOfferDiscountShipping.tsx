import { isEmpty } from 'lodash';
import { OFFER_TYPE } from '../interfaces/offer.type.enum';
import { IAddressRuleOffer, IExtendOffer } from '../interfaces/IExtendOffer';

export const useMapperOfferDiscountShipping = () => {
  const onProcessRules = (offer: IExtendOffer) => {
    const sections = offer?.section;
    const ruleProduct = sections?.product ? offer.rulesProducts : [];
    const ruleCategory = sections?.category ? offer.rulesCategories : [];
    const ruleAddress = sections?.address ? [offer.rulesAddress] : [];
    const ruleAmount = sections?.amount ? offer.rulesAmounts : [];
    const ruleUsage = sections?.usage ? offer.rulesUsages : [];
    const ruleQuantityOrder = sections?.quantityOrder ? offer.rulesQuantityOrders : [];
    const ruleAmountCategory = sections?.amountCategory ? offer?.rulesAmountsCategory : [];

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
