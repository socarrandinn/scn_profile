import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useCallback, useEffect } from 'react';
import { findMunicipalitiesByStates } from '@dfl/location';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { IExtendOffer } from 'modules/sales-offer/offer/interfaces/IExtendOffer';
import { OFFER_TYPE } from 'modules/sales-offer/offer/interfaces/offer.type.enum';
import { IOffer } from 'modules/sales-offer/offer/interfaces';
import { useMapperOfferDiscountShipping } from 'modules/sales-offer/offer/hooks/useMapperOfferDiscountShipping';

import { couponSchema } from '../schemas/coupon.schema';
import { CouponOrderService } from '../services';
import { COUPON_LIST_KEY } from '../constants/coupon.queries';
import { initOffer, initRuleClient, initRuleCommonOffer } from 'modules/sales-offer/common/constants/offer.initValues';
import { scrollToFirstError } from 'utils/error-utils';

export const initOfferValues: IExtendOffer = {
  ...initOffer,
  ...initRuleCommonOffer,
  ...initRuleClient,
  // different
  code: '',
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
    sections: watch('section'),
    onSubmit: handleSubmit(
      (values) => {
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
      },
      // get scroll to first error
      (errors) => {
        scrollToFirstError(errors, 'offer-form');
      },
    ),
  };
};
export default useCouponCreateForm;
