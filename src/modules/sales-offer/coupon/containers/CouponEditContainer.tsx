import { memo } from 'react';
import { useToggle } from '@dfl/hook-utils';
import { useBreadcrumbName } from '@dfl/mui-admin-layout';
import { PageLoader } from '@dfl/mui-react-common';
import { isEmpty } from 'lodash';
import { IRuleOffer } from 'modules/sales-offer/offer/interfaces';
import { useOfferContext } from 'modules/sales-offer/offer/contexts/OfferContext';
import { initOfferValues } from '../hooks/useCouponCreateForm';
import { RULE_OFFER_FACT_TYPE } from 'modules/sales-offer/offer/interfaces/offer.type.enum';
import CouponContainer from './CouponContainer';
import OfferDetailContainer from 'modules/sales-offer/offer/containers/OfferDetailContainer';
import { initRuleClient } from 'modules/sales-offer/common/constants/offer.initValues';

const CouponEditContainer = () => {
  const editAction = useToggle(false);
  const { offer, isLoading, error } = useOfferContext();
  useBreadcrumbName(offer?._id || '', offer?.name, isLoading);

  let _offer = initOfferValues;

  if (isLoading || error) return <PageLoader size={'screen'} />;

  if (offer) {
    const rulesAmounts = offer?.rules?.find((rule: IRuleOffer) => rule?.fact === RULE_OFFER_FACT_TYPE.AMOUNT);
    const rulesUsages = offer?.rules?.find((rule: IRuleOffer) => rule?.fact === RULE_OFFER_FACT_TYPE.USAGE);
    const rulesAddress = offer?.rules?.find((rule: IRuleOffer) => rule?.fact === RULE_OFFER_FACT_TYPE.ADDRESS);
    const rulesProducts = offer?.rules?.find((rule: IRuleOffer) => rule?.fact === RULE_OFFER_FACT_TYPE.PRODUCT);
    const rulesAmountsCategory = offer?.rules?.find(
      (rule: IRuleOffer) => rule?.fact === RULE_OFFER_FACT_TYPE.CATEGORY_PRICE,
    );

    const rulesQuantityOrders = offer?.rules?.filter(
      (rule: IRuleOffer) => rule?.fact === RULE_OFFER_FACT_TYPE.QUANTITY_ORDERS,
    );

    // client rules
    const rulesClientUsage = offer?.rules?.find(
      (rule: IRuleOffer) => rule?.fact === RULE_OFFER_FACT_TYPE.CLIENT_USAGES,
    );
    const rulesOrderCountByTime = offer?.rules?.find(
      (rule: IRuleOffer) => RULE_OFFER_FACT_TYPE.ORDER_COUNT_BY_TIME === rule?.fact,
    );
    const rulesAmountSpentByTime = offer?.rules?.find(
      (rule: IRuleOffer) => RULE_OFFER_FACT_TYPE.AMOUNT_SPENT_BY_TIME === rule?.fact,
    );
    const rulesLongevity = offer?.rules?.find((rule: IRuleOffer) => RULE_OFFER_FACT_TYPE.LONGEVITY === rule?.fact);
    const rulesSpecificClientList = offer?.rules?.find(
      (rule: IRuleOffer) => RULE_OFFER_FACT_TYPE.SPECIFIC_CLIENT_LIST === rule?.fact,
    );

    _offer = {
      ...offer,
      // client rules
      rulesClientUsage,
      rulesOrderCountByTime: rulesOrderCountByTime || initRuleClient.rulesOrderCountByTime,
      rulesAmountSpentByTime: rulesAmountSpentByTime || initRuleClient.rulesAmountSpentByTime,
      rulesLongevity: rulesLongevity || initRuleClient.rulesLongevity,
      rulesSpecificClientList: rulesSpecificClientList || initRuleClient.rulesSpecificClientList,

      // other rules
      rules: [],
      rulesUsages,
      rulesQuantityOrders,
      // @ts-ignore
      rulesAddress: {
        ...offer.rulesAddress,
        ...rulesAddress,
      },

      rulesAmounts,
      rulesProducts,
      rulesAmountsCategory,

      // boolean
      section: {
        product: !isEmpty(rulesProducts),
        amount: !isEmpty(rulesAmounts),
        address: !isEmpty(rulesAddress),
        usage: !isEmpty(rulesUsages),
        quantityOrder: !isEmpty(rulesQuantityOrders),
        amountCategory: !isEmpty(rulesAmountsCategory),

        // client section
        clientUsage: !isEmpty(rulesClientUsage),
        orderCountByTime: !isEmpty(rulesOrderCountByTime),
        amountSpentByTime: !isEmpty(rulesAmountSpentByTime),
        longevity: !isEmpty(rulesLongevity),
        specificClientList: !isEmpty(rulesSpecificClientList),
      },
    };
  }

  if (isLoading || error) return <PageLoader size={'screen'} />;

  if (editAction.isOpen) return <CouponContainer offer={_offer} onClose={editAction.onClose} />;

  return <OfferDetailContainer onEdit={editAction.onOpen} />;
};

export default memo(CouponEditContainer);
