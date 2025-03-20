import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useResendConfirmation } from '@dfl/react-security';
import { useMemo } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { emailScheme } from 'modules/authentication/schemas/login.schema';

const useResendConfirmationForm = () => {
  const { t } = useTranslation('authentication');
  const { register, control, handleSubmit } = useForm({
    resolver: yupResolver(emailScheme),
    defaultValues: {
      email: '',
    },
  });

  const config = useMemo(() => {
    return {
      onSuccess: () => {
        toast.success(t('confirmation.emailResend'));
      },
    };
  }, [t]);

  const { mutate, error, isLoading, isSuccess, data } = useResendConfirmation(config);

  return {
    control,
    register,
    error,
    isLoading,
    isSuccess,
    data,
    mutate,
    onSubmit: handleSubmit((values: any) => {
      mutate(values);
    }),
  };
};

export default useResendConfirmationForm;
