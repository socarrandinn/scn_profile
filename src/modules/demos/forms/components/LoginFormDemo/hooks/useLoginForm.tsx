import { useCallback, useEffect } from 'react';
import { ILogin, ILoginResult } from '../interfaces';
import { loginSchema } from '../schemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { useFormValue } from '../../../context/FormValueProvider';

const useLoginForm = (callback: (data: ILoginResult) => void, defaultValues: ILogin) => {
  const { control, register, handleSubmit, reset, getValues, setValue, formState } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues,
  });

  const { setFormData, setIsErrorData } = useFormValue();

  useEffect(() => {
    setFormData(defaultValues);
    setIsErrorData(false);
  }, []);

  const serviceFn = useCallback((data: ILogin) => {
    const result: ILoginResult = {
      email: data?.email,
      token: '2a01fb5a-c4b1-4c3b-be78-d37ea82a25c7',
    };
    return result;
  }, []);

  const { mutateAsync, error, isLoading } = useMutation(
    // @ts-ignore
    serviceFn,
    {
      onSuccess: (data: ILoginResult) => {
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
    onSubmit: handleSubmit((values: ILogin) => {
      // @ts-ignore
      setFormData(values);
      setIsErrorData(false);
      return mutateAsync(values);
    }),
  };
};

export default useLoginForm;
