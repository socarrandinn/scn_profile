import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRecoveryPasswordInit } from '@dfl/react-security';
import { emailScheme } from 'modules/authentication/schemas/login.schema';

const useRecoveryPasswordInitForm = () => {
  const { register, control, handleSubmit } = useForm({
    resolver: yupResolver(emailScheme),
    defaultValues: {
      email: '',
    },
  });

  const { mutateAsync, error, isLoading, isSuccess, reset, data } = useRecoveryPasswordInit();

  return {
    control,
    register,
    data,
    isSuccess,
    error,
    isLoading,
    reset,
    onSubmit: handleSubmit((value) => mutateAsync(value as any)),
  };
};

export default useRecoveryPasswordInitForm;
