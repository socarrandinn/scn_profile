import { useCallback, useEffect } from 'react';
import { IUser, IUserResult } from './types';
import { validationSchema } from './schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { useFormValue } from '../../context/FormValueProvider';

const useRegisterForm = (callback: (data: IUserResult) => void, defaultValues: IUser) => {
  const { control, register, handleSubmit, reset, getValues, setValue, formState, watch } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues,
  });

  const { setFormData } = useFormValue();

  useEffect(() => {
    setFormData(defaultValues);
  }, []);

  const serviceFn = useCallback((data: IUser) => {
    const result: IUserResult = {
      ...data || {}
    };
    return result;
  }, []);

  const { mutateAsync, error, isLoading } = useMutation(
    // @ts-ignore
    serviceFn,
    {
      onSuccess: (data: IUserResult) => {
        callback?.(data);
      },
    },
  );

  return {
    control,
    register,
    error,
    isLoading,
    values: getValues(),
    setValue,
    formState,
    civilStatus: watch('civilStatus'),
    reset: () => {
      setFormData(defaultValues);
      reset(defaultValues);
    },
    onSubmit: handleSubmit((values: IUser) => {
      // @ts-ignore
      setFormData(values);
      return mutateAsync(values);
    }),
  };
};

export default useRegisterForm;
