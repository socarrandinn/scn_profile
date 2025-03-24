import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { IOffer } from '../interfaces/IOffer';
import { IExtendOffer } from '../interfaces/IExtendOffer';
import { findMunicipalitiesByStates } from '@dfl/location';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { offerRuleEditSchema } from '../schemas/offer.schema';
import { useMapperOfferDiscountShipping } from './useMapperOfferDiscountShipping';
import { OfferOrderService } from '../services';
import { OFFERS_LIST_KEY } from '../constants';
import { scrollToFirstError } from 'utils/error-utils';
import { COUPON_LIST_KEY } from 'modules/sales-offer/coupon/constants/coupon.queries';
import { onParseOffer } from '../constants/offer.utils';

type IOfferRules = Partial<IExtendOffer>;
type Props = {
  defaultValues: IOfferRules;
  onClose?: VoidFunction;
  service?: any;
};

const useOfferRuleEditForm = ({ defaultValues, onClose, service = OfferOrderService }: Props) => {
  const { onProcessRules } = useMapperOfferDiscountShipping();

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
    resolver: yupResolver(offerRuleEditSchema),
    defaultValues,
  });

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (payload: IOffer) => service.saveOrUpdate(payload),
    {
      onSuccess: (data: IOffer, values: IOffer) => {
        queryClient.invalidateQueries([OFFERS_LIST_KEY]);
        queryClient.invalidateQueries([COUPON_LIST_KEY]);
        values?._id && queryClient.invalidateQueries([values?._id]);
        toast.success(t('successRulesUpdate'));
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

    state: watch('rulesAddress.state'),
    municipality: findMunicipalitiesByStates(watch('rulesAddress.state')?.state),
    sections: watch('section'),
    // @ts-ignore
    onSubmit: handleSubmit(
      (values) => {
        const rules = onProcessRules(values);

        const newRule = {
          ...values,
          rules,
        };
        mutate(onParseOffer(newRule as IExtendOffer));
      },

      // get scroll to first error
      (errors) => {
        scrollToFirstError(errors, 'offer-rules-form');
      },
    ),
  };
};
export default useOfferRuleEditForm;
