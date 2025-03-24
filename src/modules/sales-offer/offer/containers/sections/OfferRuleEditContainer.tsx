import { useBreadcrumbName } from '@dfl/mui-admin-layout';
import { PageLoader } from '@dfl/mui-react-common';
import { isEmpty } from 'lodash';
import { initRuleClient, initRuleCommonOffer } from 'modules/sales-offer/common/constants/offer.initValues';
import { memo } from 'react';
import { useOfferContext } from '../../contexts/OfferContext';
import { IRuleOffer } from '../../interfaces';
import { RULE_OFFER_FACT_TYPE } from '../../interfaces/offer.type.enum';
import OfferRuleForm from '../../components/OfferRuleForm/OfferRuleForm';

type Props = {
  onClose: () => void;
};
const OfferRuleEditContainer = ({ onClose }: Props) => {
  const { offer, isLoading, error } = useOfferContext();
  useBreadcrumbName(offer?._id || '', offer?.name, isLoading);

  let _offerRules = {
    ...initRuleCommonOffer,
    ...initRuleClient,
    rules: [],
  };

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

    _offerRules = {
      _id: offer._id,
      ...offer.rulesClientUsage,
      ...offer.section,
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
  return <OfferRuleForm offer={_offerRules} onClose={onClose} />;
};

export default memo(OfferRuleEditContainer);
