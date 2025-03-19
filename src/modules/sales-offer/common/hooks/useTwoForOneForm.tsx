import { FieldValues, UseFieldArrayAppend, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { TWO_FOR_ONE_OPERATOR } from 'modules/sales-offer/offer/interfaces/offer.type.enum';
import { ITwoForOneOffer } from 'modules/sales-offer/offer/interfaces';
import { offerTypeTwoForOneSchema } from '../schemas/common.schema';

export const initOfferValues: ITwoForOneOffer = {
  type: TWO_FOR_ONE_OPERATOR.EVERY,
  buyValue: 0,
  getValue: 0,
  buyProduct: '',
  getProduct: '',
};

const useTwoForOneForm = (
  appendRule: UseFieldArrayAppend<FieldValues, string>,
  defaultValues: ITwoForOneOffer = initOfferValues,
) => {
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
    resolver: yupResolver(offerTypeTwoForOneSchema),
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  return {
    control,
    reset,
    watch,
    setError,
    setValue,
    resetField,
    errors,
    clearErrors,

    onSubmit: handleSubmit((values) => {
      appendRule(values);
      reset(initOfferValues);
    }),
  };
};
export default useTwoForOneForm;
