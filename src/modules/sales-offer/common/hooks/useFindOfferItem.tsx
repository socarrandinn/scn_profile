import { useFindProductsByIds } from 'modules/inventory/product/hooks/useFindProducts';
import { useFindCategoriesByIds } from 'modules/inventory/settings/category/hooks/useFindCategories';
import { IRuleOffer } from 'modules/sales-offer/offer/interfaces';
import { RULE_OFFER_FACT_TYPE } from 'modules/sales-offer/offer/interfaces/offer.type.enum';
import { useCallback, useMemo } from 'react';

export const useFindOfferItem = (offer: any) => {
  const getRule = useCallback(
    (type: RULE_OFFER_FACT_TYPE) => offer?.rules?.find((rule: IRuleOffer) => rule?.fact === type),
    [offer],
  );
  const getArrayRules = useCallback(
    (type: RULE_OFFER_FACT_TYPE) => offer?.rules?.filter((rule: IRuleOffer) => rule?.fact === type),
    [offer],
  );

  const getArrayItems = useCallback(
    (data: any[]) => data?.map(({ _id, name }: any) => ({ _id, name })) as Array<{ _id: string; name: string }>,
    [],
  );

  const categoryIds = useMemo(() => {
    const categoryPriceRule = getRule(RULE_OFFER_FACT_TYPE.CATEGORY_PRICE);
    return categoryPriceRule?.value?.map((i: any) => i?.category) || [];
  }, [getRule]);

  const productIds = useMemo(() => {
    const productRule = getRule(RULE_OFFER_FACT_TYPE.PRODUCT);
    return [...(productRule?.value?.map((i: any) => i?.product) || [])];
  }, [getRule]);

  const { data: category } = useFindCategoriesByIds(categoryIds);
  const { data: product } = useFindProductsByIds(productIds);

  return {
    getRule,
    getArrayRules,
    categories: getArrayItems(category?.data),
    products: getArrayItems(product?.data),
  };
};
