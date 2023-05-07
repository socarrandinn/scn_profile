import { useCallback, useEffect } from 'react';
import { IDeveloper, IDeveloperResult } from '../interfaces';
import { userSchema } from '../schemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { useFormValue } from '../../../context/FormValueProvider';

const useRegisterForm = (callback: (data: IDeveloperResult) => void, defaultValues: IDeveloper) => {
  const { control, register, handleSubmit, reset, getValues, setValue, formState } = useForm({
    resolver: yupResolver(userSchema),
    defaultValues,
  });

  const { setFormData, setIsErrorData } = useFormValue();

  useEffect(() => {
    setFormData(defaultValues);
    setIsErrorData(false);
  }, []);

  const serviceFn = useCallback(async (data: IDeveloper) => {
    const result: IDeveloperResult = {
      _id: '5b81451d-d76c-4db8-9e15-0d0629f455e6',
      ...(data || {}),
    };
    return result;
  }, []);

  const { mutateAsync, error, isLoading } = useMutation(serviceFn, {
    onSuccess: (data: IDeveloperResult) => {
      callback?.(data);
    },
  });

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
    onSubmit: handleSubmit((values: IDeveloper) => {
      setFormData(values);
      setIsErrorData(false);
      return mutateAsync(values);
    }),
  };
};

export default useRegisterForm;
