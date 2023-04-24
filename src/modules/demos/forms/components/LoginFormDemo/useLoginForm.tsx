import { useCallback } from 'react';
import { ILogin, ILoginResult } from './types';
import { loginSchema } from './schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';

const useLoginForm = (callback: (data: ILoginResult) => void, defaultValues: ILogin) => {
  const { control, register, handleSubmit, reset, getValues, setValue } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues
  });

  const serviceFn = useCallback((data: ILogin) => {
    const result: ILoginResult = {
      email: data?.email,
      token: '2a01fb5a-c4b1-4c3b-be78-d37ea82a25c7'
    }
    return result;
  }, []);

  const { mutateAsync, error, isLoading } = useMutation(
    // @ts-ignore
    serviceFn,
    {
      onSuccess: (data: ILoginResult, values) => {
        callback?.(data);
        reset();
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
    reset: () => { reset(defaultValues); },
    onSubmit: handleSubmit((values: ILogin) => {
      console.log('EjecUTANDO fUNCION');
      return mutateAsync(values);
    }),
  };
};

export default useLoginForm;
