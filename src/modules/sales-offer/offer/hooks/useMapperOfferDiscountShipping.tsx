import { isEmpty } from 'lodash';
import { OFFER_TYPE } from '../interfaces/offer.type.enum';
import { IAddressRuleOffer, IExtendOffer } from '../interfaces/IExtendOffer';
import { IRuleOffer } from '../interfaces';

export const useMapperOfferDiscountShipping = () => {
  const onProcessRules = (offer: Partial<IExtendOffer>) => {
    const sections = offer?.section;
    const ruleProduct = sections?.product ? offer.rulesProducts : {};
    const ruleAmount = sections?.amount ? offer.rulesAmounts : {};
    const ruleUsage = sections?.usage ? offer.rulesUsages : {};
    const ruleAddress = sections?.address ? [offer.rulesAddress] : [];
    const ruleQuantityOrder = sections?.quantityOrder ? offer.rulesQuantityOrders : [];
    const ruleAmountCategory = sections?.amountCategory ? offer?.rulesAmountsCategory : [];

    // client rules
    const ruleClientUsage = sections?.clientUsage ? offer.rulesClientUsage : {};
    const rulesOrderCountByTime = sections?.orderCountByTime ? [offer?.rulesOrderCountByTime] : [];
    const rulesAmountSpentByTime = sections?.amountSpentByTime ? [offer?.rulesAmountSpentByTime] : [];
    const rulesLongevity = sections?.longevity ? [offer?.rulesLongevity] : [];
    const rulesSpecificClientList = sections?.specificClientList ? [offer?.rulesSpecificClientList] : [];

    return [
      // client rules
      ruleClientUsage,
      ...rulesOrderCountByTime,
      ...rulesAmountSpentByTime,
      ...rulesLongevity,
      ...rulesSpecificClientList,

      // common rules
      ruleAmount,
      ruleUsage,
      ...MapperAddress(ruleAddress as any),
      ...(ruleQuantityOrder as IRuleOffer[]),
      ruleProduct,
      ruleAmountCategory,
    ].filter((rule) => {
      if (typeof rule === 'object' && rule !== null && !Array.isArray(rule)) {
        return Object.keys(rule).length > 0;
      }
      if (Array.isArray(rule)) return rule.length > 0;
      if (rule == null) return false;

      return true;
    });
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
