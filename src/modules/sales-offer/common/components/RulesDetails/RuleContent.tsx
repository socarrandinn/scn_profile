import { Stack } from '@mui/material';
import { useOfferContext } from 'modules/sales-offer/offer/contexts/OfferContext';
import { useCallback } from 'react';
import RuleCategoryPrice from './RuleCategoryPrice';
import { RULE_OFFER_TYPE } from 'modules/sales-offer/offer/interfaces/offer.type.enum';
import { IRuleOffer } from 'modules/sales-offer/offer/interfaces';
import RuleOperatorValue from './RuleOperatorValue';
import RuleCategory from './RuleCategory';
import RuleAddress from './RuleAddress';

const RuleContent = () => {
  const { offer } = useOfferContext();
  const getRule = useCallback(
    (type: RULE_OFFER_TYPE) => offer?.rules?.find((rule: IRuleOffer) => rule?.fact === type),
    [offer],
  );
  const getArrayRules = useCallback(
    (type: RULE_OFFER_TYPE) => offer?.rules?.filter((rule: IRuleOffer) => rule?.fact === type),
    [offer],
  );

  const categoryPrice = getRule(RULE_OFFER_TYPE.CATEGORY_PRICE);
  const amount = getArrayRules(RULE_OFFER_TYPE.AMOUNT);
  const usage = getArrayRules(RULE_OFFER_TYPE.USAGE);
  const quantityOrders = getArrayRules(RULE_OFFER_TYPE.QUANTITY_ORDERS);
  const product = getRule(RULE_OFFER_TYPE.PRODUCT);
  const category = getRule(RULE_OFFER_TYPE.CATEGORY);
  const address = getRule(RULE_OFFER_TYPE.ADDRESS);

  console.log(usage)

  return (
    <Stack gap={2}>
      {categoryPrice && <RuleCategoryPrice rule={categoryPrice} title={'offerOrder:sections.amountCategory.title'} />}
      {amount && <RuleOperatorValue rule={amount} title={'offerOrder:sections.amount.title'} />}
      {usage && <RuleOperatorValue rule={usage} title={'offerOrder:sections.usage.title'} />}
      {quantityOrders && (
        <RuleOperatorValue rule={quantityOrders} title={'offerOrder:sections.quantity_orders.title'} />
      )}
      {product && <RuleCategory rule={product} title={'offerOrder:sections.product.title'} />}
      {category && <RuleCategory rule={category} title={'offerOrder:sections.category.title'} />}
      {address && <RuleAddress rule={address} title={'offerOrder:sections.address.title'} />}
    </Stack>
  );
};

export default RuleContent;
