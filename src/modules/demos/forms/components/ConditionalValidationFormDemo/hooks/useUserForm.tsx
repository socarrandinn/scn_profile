import { useCallback, useEffect } from 'react';
import { IData, IDataResult } from '../types';
import { userSchema } from '../schemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { useFormValue } from '../../../context/FormValueProvider';

const useUserForm = (callback: (data: IDataResult) => void, defaultValues: IData) => {
  const {
    control,
    register,
    handleSubmit,
    reset,
    getValues,
    setValue,
    formState,
    watch
  } = useForm({
    resolver: yupResolver(userSchema),
    defaultValues,
  });

  const { setFormData, setIsErrorData } = useFormValue();

  useEffect(() => {
    setFormData(defaultValues);
    setIsErrorData(false);
  }, []);

  const serviceFn = useCallback((data: IData) => {
    const result: IDataResult = {
      ...data || {}
    };
    return result;
  }, []);

  const { mutateAsync, error, isLoading } = useMutation(
    // @ts-ignore
    serviceFn,
    {
      onSuccess: (data: IDataResult) => {
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
    civilStatus: watch('civilStatus'),
    setValue,
    formState,
    reset: () => {
      setFormData(defaultValues);
      setIsErrorData(false);
      reset(defaultValues);
    },
    onSubmit: handleSubmit((values: IData) => {
      // @ts-ignore
      setFormData(values);
      setIsErrorData(false);
      return mutateAsync(values);
    }),
  };
};

export default useUserForm;
