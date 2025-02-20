import { memo } from 'react';
import { useOfferContext } from '../contexts/OfferContext';
import { useToggle } from '@dfl/hook-utils';
import { useBreadcrumbName } from '@dfl/mui-admin-layout';
import { initOfferValues } from '../hooks/useOfferCreateForm';
import { PageLoader } from '@dfl/mui-react-common';
import { IRuleOffer } from '../interfaces';
import { RULE_OFFER_TYPE } from '../interfaces/offer.type.enum';
import { isEmpty } from 'lodash';
import OfferContainer from './OfferContainer';
import OfferDetailContainer from './OfferDetailContainer';

const OfferEditContainer = () => {
  const editAction = useToggle(false);
  const { offer, isLoading, error } = useOfferContext();
  useBreadcrumbName(offer?._id || '', offer?.name, isLoading);

  let _offer = initOfferValues;

  if (isLoading || error) return <PageLoader size={'screen'} />;

  if (offer) {
    const rulesAmounts = offer?.rules?.filter((rule: IRuleOffer) => rule?.fact === RULE_OFFER_TYPE.AMOUNT);
    const rulesUsages = offer?.rules?.filter((rule: IRuleOffer) => rule?.fact === RULE_OFFER_TYPE.USAGE);
    const rulesQuantityOrders = offer?.rules?.filter(
      (rule: IRuleOffer) => rule?.fact === RULE_OFFER_TYPE.QUANTITY_ORDERS,
    );
    const rulesAddress = offer?.rules?.find((rule: IRuleOffer) => rule?.fact === RULE_OFFER_TYPE.ADDRESS);
    const rulesProducts = offer?.rules?.filter((rule: IRuleOffer) => rule?.fact === RULE_OFFER_TYPE.PRODUCT);
    const rulesCategories = offer?.rules?.filter((rule: IRuleOffer) => rule?.fact === RULE_OFFER_TYPE.CATEGORY);
    const rulesAmountsCategory = offer?.rules?.find(
      (rule: IRuleOffer) => rule?.fact === RULE_OFFER_TYPE.CATEGORY_PRICE,
    );

    _offer = {
      ...offer,
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

  if (editAction.isOpen) return <OfferContainer offer={_offer} />;

  return <OfferDetailContainer offer={offer} onEdit={editAction.onOpen} />;
};

export default memo(OfferEditContainer);
