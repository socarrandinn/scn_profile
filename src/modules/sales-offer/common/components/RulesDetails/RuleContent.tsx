import { Stack } from '@mui/material';
import { useOfferContext } from 'modules/sales-offer/offer/contexts/OfferContext';
import { useCallback } from 'react';
import RuleCategoryPrice from './RuleCategoryPrice';
import { RULE_OFFER_FACT_TYPE } from 'modules/sales-offer/offer/interfaces/offer.type.enum';
import { IRuleOffer } from 'modules/sales-offer/offer/interfaces';
import RuleOperatorValue from './RuleOperatorValue';
import RuleCategory from './RuleCategory';
import RuleAddress from './RuleAddress';

const RuleContent = () => {
  const { offer } = useOfferContext();
  const getRule = useCallback(
    (type: RULE_OFFER_FACT_TYPE) => offer?.rules?.find((rule: IRuleOffer) => rule?.fact === type),
    [offer],
  );
  const getArrayRules = useCallback(
    (type: RULE_OFFER_FACT_TYPE) => offer?.rules?.filter((rule: IRuleOffer) => rule?.fact === type),
    [offer],
  );

  return (
    <Stack gap={2}>
      <RuleCategoryPrice
        rule={getRule(RULE_OFFER_FACT_TYPE.CATEGORY_PRICE)}
        title={'offerOrder:sections.amountCategory.title'}
      />
      <RuleOperatorValue
        rule={getArrayRules(RULE_OFFER_FACT_TYPE.AMOUNT)}
        title={'offerOrder:sections.amount.title'}
        isCurrency
      />
      <RuleOperatorValue rule={getArrayRules(RULE_OFFER_FACT_TYPE.USAGE)} title={'offerOrder:sections.usage.title'} />
      <RuleOperatorValue
        rule={getArrayRules(RULE_OFFER_FACT_TYPE.QUANTITY_ORDERS)}
        title={'offerOrder:sections.quantity_orders.title'}
      />
      <RuleCategory rule={getRule(RULE_OFFER_FACT_TYPE.PRODUCT)} title={'offerOrder:sections.product.title'} />
      <RuleCategory rule={getRule(RULE_OFFER_FACT_TYPE.CATEGORY)} title={'offerOrder:sections.category.title'} />
      <RuleAddress rule={getRule(RULE_OFFER_FACT_TYPE.ADDRESS)} title={'offerOrder:sections.address.title'} />
    </Stack>
  );
};

export default RuleContent;
