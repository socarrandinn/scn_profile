import { FieldValues, UseFieldArrayAppend, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { IRuleAmountCategoryItem } from 'modules/sales-offer/offer/interfaces';
import { offerAmountCategoryItemSchema } from '../schemas/common.schema';
import { OPERATOR_RULE_OFFER_TYPE } from 'modules/sales-offer/offer/interfaces/offer.type.enum';

export const initOfferValues: IRuleAmountCategoryItem = {
  category: null,
  amount: 0,
  operator: OPERATOR_RULE_OFFER_TYPE.EQUAL,
};

const useAmountCategoryForm = (
  appendRule: UseFieldArrayAppend<FieldValues, any>,
  defaultValues: IRuleAmountCategoryItem = initOfferValues,
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
    resolver: yupResolver(offerAmountCategoryItemSchema),
    defaultValues,
  });

  console.log(errors)

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
export default useAmountCategoryForm;
