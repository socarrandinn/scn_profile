import { useCallback, useEffect } from 'react';
import { ICreateEmailAccount, IEmailResult } from '../interfaces';
import { createEmailSchema } from '../schemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { useFormValue } from '../../../context/FormValueProvider';

const useCreateEmailForm = (callback: (data: IEmailResult) => void, defaultValues: ICreateEmailAccount) => {
  const { control, register, handleSubmit, reset, getValues, setValue, formState } = useForm({
    resolver: yupResolver(createEmailSchema),
    defaultValues,
  });

  const { setFormData, setIsErrorData } = useFormValue();

  useEffect(() => {
    setFormData(defaultValues);
    setIsErrorData(false);
  }, []);

  const serviceFn = useCallback(async (data: ICreateEmailAccount) => {
    const result: IEmailResult = {
      email: data?.email,
      token: '2a01fb5a-c4b1-4c3b-be78-d37ea82a25c7',
    };
    return result;
  }, []);

  const { mutateAsync, error, isLoading } = useMutation(
    serviceFn,
    {
      onSuccess: (data: IEmailResult) => {
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
    onSubmit: handleSubmit((values: ICreateEmailAccount) => {
      setFormData(values);
      setIsErrorData(false);
      return mutateAsync(values);
    }),
  };
};

export default useCreateEmailForm;
