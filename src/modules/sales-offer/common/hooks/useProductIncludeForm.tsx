import { FieldValues, UseFieldArrayAppend, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { offerProductIncludeSchema } from '../schemas/common.schema';

type Props = {
  product: string;
  quantity: number;
};
export const initValue: Props = {
  product: '',
  quantity: 0,
};

const useProductIncludeForm = (
  appendProduct: UseFieldArrayAppend<FieldValues, string>,
  defaultValues: Props = initValue,
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
    resolver: yupResolver(offerProductIncludeSchema),
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
      appendProduct(values);
      reset(initValue);
    }),
  };
};
export default useProductIncludeForm;
