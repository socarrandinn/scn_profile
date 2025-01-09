import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { PageLoader } from '@dfl/mui-react-common';
import { isEmpty } from 'lodash';
import OfferContainer from '../containers/CouponContainer';
import { IRuleOffer } from 'modules/sales-offer/offer/interfaces';
import { initOfferValues } from 'modules/sales-offer/offer/hooks/useOfferCreateForm';
import { useFindOneCoupon } from '../hooks/useFindOneCoupon';
import { RULE_OFFER_TYPE } from 'modules/sales-offer/offer/interfaces/offer.type.enum';
import { useBreadcrumbName } from '@dfl/mui-admin-layout';

const CouponEdit = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useFindOneCoupon(id as string);
  useBreadcrumbName(data?._id || '', data?.name, isLoading);


  let offer = initOfferValues;

  if (isLoading || error) return <PageLoader size={'screen'} />;

  if (data) {
    const rulesAmounts = data?.rules?.filter((rule: IRuleOffer) => rule?.fact === RULE_OFFER_TYPE.AMOUNT);
    const rulesUsages = data?.rules?.filter((rule: IRuleOffer) => rule?.fact === RULE_OFFER_TYPE.USAGE);
    const rulesQuantityOrders = data?.rules?.filter(
      (rule: IRuleOffer) => rule?.fact === RULE_OFFER_TYPE.QUANTITY_ORDERS,
    );
    const rulesAddress = data?.rules?.find((rule: IRuleOffer) => rule?.fact === RULE_OFFER_TYPE.ADDRESS);
    const rulesProducts = data?.rules?.filter((rule: IRuleOffer) => rule?.fact === RULE_OFFER_TYPE.PRODUCT);
    const rulesCategories = data?.rules?.filter((rule: IRuleOffer) => rule?.fact === RULE_OFFER_TYPE.CATEGORY);
    const rulesAmountsCategory = data?.rules?.find((rule: IRuleOffer) => rule?.fact === RULE_OFFER_TYPE.CATEGORY_PRICE);

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
      rulesAmountsCategory, // object

      // boolean
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

export default memo(CouponEdit);
