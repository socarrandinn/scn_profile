import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useCallback, useEffect } from 'react';

import { findMunicipalitiesByStates, ILocationMunicipality, ILocationProvince } from '@dfl/location';
import { useNavigate } from 'react-router-dom';
import { IProduct } from 'modules/inventory/common/interfaces';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { IExtendOffer } from 'modules/sales-offer/offer/interfaces/IExtendOffer';
import {
  DISCOUNT_VALUE_TYPE,
  OFFER_TYPE,
  OPERATOR_RULE_OFFER_TYPE,
  RULE_OFFER_TYPE,
} from 'modules/sales-offer/offer/interfaces/offer.type.enum';
import { IIncludeProductOffer, IOffer, IRuleOffer, IValueAddressRuleOffer } from 'modules/sales-offer/offer/interfaces';
import { useMapperOfferDiscountShipping } from 'modules/sales-offer/offer/hooks/useMapperOfferDiscountShipping';

import { couponSchema } from '../schemas/coupon.schema';
import { CouponOrderService } from '../services';
import { COUPON_LIST_KEY } from '../constants/coupon.queries';

export const initOfferValues: IExtendOffer = {
  type: OFFER_TYPE.SHIPPING_DISCOUNT,
  fromDate: new Date(),
  toDate: new Date(),
  name: '',
  code: '',
  description: '',
  includeProducts: [] as IIncludeProductOffer[],
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  productToInclude: {} as IProduct,
  quantityToInclude: 0,
  discountValue: {
    type: DISCOUNT_VALUE_TYPE.FIXED,
    value: 0,
  },
  always: true,
  // rules
  rules: [] as IRuleOffer[],
  rulesAmounts: [],
  rulesUsages: [],
  rulesQuantityOrders: [],
  rulesAddress: {
    operator: OPERATOR_RULE_OFFER_TYPE.AT_LEAST_ONE,
    fact: RULE_OFFER_TYPE.ADDRESS,
    value: [] as IValueAddressRuleOffer[],
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    municipality: {} as ILocationMunicipality,
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    state: {} as ILocationProvince,
  },
  rulesProducts: [],
  rulesCategories: [],

  rulesAmountsCategory: {
    operator: OPERATOR_RULE_OFFER_TYPE.EQUAL,
    fact: RULE_OFFER_TYPE.CATEGORY_PRICE,
    value: {
      category: [],
      quantity: 0,
    },
  },

  // sections
  productSection: false,
  amountSection: false,
  usageSection: false,
  quantityOrderSection: false,
  categorySection: false,
  addressSection: false,
  amountCategorySection: false,
};

const useCouponCreateForm = (defaultValues: IExtendOffer = initOfferValues, onClose?: VoidFunction) => {
  const { onProcessRules, onMapperValue } = useMapperOfferDiscountShipping();
  const navigate = useNavigate();
  const { t } = useTranslation('couponOrder');
  const queryClient = useQueryClient();

  const {
    control,
    handleSubmit,
    reset,
    watch,
    setValue,
    setError,
    resetField,
    formState: { errors },
    clearErrors,
  } = useForm({
    resolver: yupResolver(couponSchema),
    defaultValues,
  });

  const handleDiscountValueType = useCallback(
    (env: any) => {
      const TYPE = env.target.value;
      if (TYPE) {
        setValue('discountValue.type', TYPE);
      }
    },
    [setValue],
  );

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (payload: IOffer) => CouponOrderService.saveOrUpdate(payload),
    {
      onSuccess: (data: any, values: any) => {
        queryClient.invalidateQueries([COUPON_LIST_KEY]);
        values?._id && queryClient.invalidateQueries(values._id);
        toast.success(t(values?._id ? 'successUpdate' : 'successCreated'));
        if (!onClose) {
          navigate('/sales/offers/settings/coupons');
        }
        onClose?.();
        reset();
      },
    },
  );

  return {
    control,
    error,
    isLoading,
    isSuccess,
    data,
    reset,
    watch,
    setError,
    setValue,
    resetField,
    errors,
    clearErrors,
    type: watch('type'),
    discountValueType: watch('discountValue.type'),
    handleDiscountValueType,
    state: watch('rulesAddress.state'),
    municipality: findMunicipalitiesByStates(watch('rulesAddress.state')?.state),
    sections: {
      amountSection: watch('amountSection'),
      productSection: watch('productSection'),
      categorySection: watch('categorySection'),
      addressSection: watch('addressSection'),
      usageSection: watch('usageSection'),
      quantityOrderSection: watch('quantityOrderSection'),
      amountCategorySection: watch('amountCategorySection'),
    },
    // @ts-ignore
    onSubmit: handleSubmit((values) => {
      const rules = onProcessRules(values);

      const newRule = {
        _id: values?._id,
        name: values?.name,
        description: values?.description,
        promotionText: values?.promotionText,
        code: values?.code,
        note: values?.note,
        status: values?.status,
        type: values?.type,
        fromDate: values?.fromDate,
        toDate: values?.toDate,
        includeProducts: values?.type === OFFER_TYPE.INCLUDE_PRODUCT ? values?.includeProducts : [],
        discountValue: onMapperValue(values?.discountValue, values?.type),
        rules,
        always: values?.always || false,
      };
      mutate(newRule);
    }),
  };
};
export default useCouponCreateForm;
