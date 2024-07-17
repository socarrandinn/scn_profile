import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { PageLoader } from '@dfl/mui-react-common';
import { RULE_OFFER_TYPE } from '../interfaces/offer.type.enum';
import { isEmpty } from 'lodash';
import { initOfferValues } from '../hooks/useOfferCreateForm';
import { useFindOneOffer } from '../hooks/useFindOneOffer';
import OfferContainer from '../containers/OfferContainer';

const OfferEdit = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useFindOneOffer(id as string);

  let offer = initOfferValues;

  if (isLoading || error) return <PageLoader size={'screen'} />;

  if (data) {
    const rulesAmounts = data?.rules?.filter((rule) => rule?.type === RULE_OFFER_TYPE.AMOUNT);
    const rulesUsages = data?.rules?.filter((rule) => rule?.type === RULE_OFFER_TYPE.USAGE);
    const rulesQuantityOrders = data?.rules?.filter((rule) => rule?.type === RULE_OFFER_TYPE.QUANTITY_ORDERS);
    const rulesAddress = data?.rules?.find((rule) => rule?.type === RULE_OFFER_TYPE.ADDRESS);
    const rulesProducts = data?.rules?.filter((rule) => rule?.type === RULE_OFFER_TYPE.PRODUCT);
    const rulesCategories = data?.rules?.filter((rule) => rule?.type === RULE_OFFER_TYPE.CATEGORY);
    const rulesAmountsCategory = data?.rules?.filter((rule) => rule?.type === RULE_OFFER_TYPE.CATEGORY_PRICE);

    offer = {
      ...data,
      rules: [],
      rulesAmounts,
      rulesUsages,
      rulesQuantityOrders,
      // @ts-ignore
      rulesAddress: {
        ...offer.rulesAddress,
        ...rulesAddress,
      },
      // @ts-ignore
      rulesProducts,
      // @ts-ignore
      rulesCategories,
      // @ts-ignores
      rulesAmountsCategory: rulesAmountsCategory[0],
      productSection: !isEmpty(rulesProducts),
      amountSection: !isEmpty(rulesAmounts),
      categorySection: !isEmpty(rulesCategories),
      addressSection: !isEmpty(rulesAddress),
      usageSection: !isEmpty(rulesUsages),
      quantityOrderSection: !isEmpty(rulesQuantityOrders),
      amountCategorySection: !isEmpty(rulesAmountsCategory),
    };
  }

  return <OfferContainer offer={offer} />;
};

export default memo(OfferEdit);
