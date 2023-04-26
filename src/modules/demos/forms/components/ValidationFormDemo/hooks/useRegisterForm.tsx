import { useCallback, useEffect } from 'react';
import { IUser, IUserResult } from '../types';
import { userSchema } from '../schemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { useFormValue } from '../../../context/FormValueProvider';

const useRegisterForm = (callback: (data: IUserResult) => void, defaultValues: IUser) => {
  const {
    control,
    register,
    handleSubmit,
    reset,
    getValues,
    setValue,
    formState
  } = useForm({
    resolver: yupResolver(userSchema),
    defaultValues,
  });

  const { setFormData, setIsErrorData } = useFormValue();

  useEffect(() => {
    setFormData(defaultValues);
    setIsErrorData(false);
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
    reset: () => {
      setFormData(defaultValues);
      setIsErrorData(false);
      reset(defaultValues);
    },
    onSubmit: handleSubmit((values: IUser) => {
      // @ts-ignore
      setFormData(values);
      setIsErrorData(false);
      return mutateAsync(values);
    }),
  };
};

export default useRegisterForm;
