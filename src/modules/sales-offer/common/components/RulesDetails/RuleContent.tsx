import { Stack } from '@mui/material';
import { useOfferContext } from 'modules/sales-offer/offer/contexts/OfferContext';
import RuleCategoryPrice from './RuleCategoryPrice';
import { RULE_OFFER_FACT_TYPE } from 'modules/sales-offer/offer/interfaces/offer.type.enum';
import RuleOperatorValue from './RuleOperatorValue';
import RuleCategory from './RuleCategory';
import RuleAddress from './RuleAddress';
import RuleSpecificClientList from './RuleSpecificClientList';
import { useFindOfferItem } from '../../hooks/useFindOfferItem';

const RuleContent = () => {
  const { offer } = useOfferContext();

  const { categories, products, getArrayRules, getRule } = useFindOfferItem(offer);

  return (
    <Stack gap={2}>
      <RuleSpecificClientList
        rule={getRule(RULE_OFFER_FACT_TYPE.SPECIFIC_CLIENT_LIST)}
        title={'offerOrder:sections.specificClientList.title'}
      />

      <RuleCategoryPrice
        rule={getRule(RULE_OFFER_FACT_TYPE.CATEGORY_PRICE)}
        title={'offerOrder:sections.amountCategory.title'}
        items={categories}
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
      <RuleCategory
        items={products}
        rule={getRule(RULE_OFFER_FACT_TYPE.PRODUCT)}
        title={'offerOrder:sections.product.title'}
        itemTitle='product'
      />
      <RuleCategory
        items={categories}
        rule={getRule(RULE_OFFER_FACT_TYPE.CATEGORY)}
        title={'offerOrder:sections.category.title'}
      />
      <RuleAddress rule={getRule(RULE_OFFER_FACT_TYPE.ADDRESS)} title={'offerOrder:sections.address.title'} />
    </Stack>
  );
};

export default RuleContent;
