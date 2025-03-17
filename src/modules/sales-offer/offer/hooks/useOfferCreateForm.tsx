import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useCallback, useEffect } from 'react';
import { IOffer } from '../interfaces/IOffer';
import { IExtendOffer } from '../interfaces/IExtendOffer';
import { OFFER_TYPE } from '../interfaces/offer.type.enum';
import { findMunicipalitiesByStates } from '@dfl/location';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { offerSchema } from '../schemas/offer.schema';
import { useMapperOfferDiscountShipping } from './useMapperOfferDiscountShipping';
import { OfferOrderService } from '../services';
import { OFFERS_LIST_KEY } from '../constants';
import { initOffer, initRuleClient, initRuleCommonOffer } from 'modules/sales-offer/common/constants/offer.initValues';
import { scrollToFirstError } from 'utils/error-utils';

export const initOfferValues: IExtendOffer = {
  ...initOffer,
  ...initRuleCommonOffer,
  ...initRuleClient,
};

const useOfferCreateForm = (defaultValues: IExtendOffer = initOfferValues, onClose?: VoidFunction) => {
  const { onProcessRules, onMapperValue } = useMapperOfferDiscountShipping();
  const navigate = useNavigate();
  const { t } = useTranslation('offerOrder');
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
    resolver: yupResolver(offerSchema),
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
    (payload: IOffer) => OfferOrderService.saveOrUpdate(payload),
    {
      onSuccess: (data: IOffer, values: IOffer) => {
        queryClient.invalidateQueries([OFFERS_LIST_KEY]);
        values?._id && queryClient.invalidateQueries([values?._id]);
        toast.success(t(values?._id ? 'successUpdate' : 'successCreated'));
        if (!onClose) {
          navigate('/sales/offers/settings/offer_orders');
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
    // @ts-ignore
    onSubmit: handleSubmit(
      (values) => {
        const rules = onProcessRules(values);

        const newRule = {
          _id: values?._id,
          name: values?.name,
          description: values?.description,
          promotionText: values?.promotionText,
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
export default useOfferCreateForm;
