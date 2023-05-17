import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSignIn, useUser } from '@dfl/react-security';
import { loginSchema } from 'modules/authentication/schemas/login.schema';

const useLoginForm = () => {
  const { isLoading: isLoadingUser } = useUser();

  const { register, control, handleSubmit, setValue } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      space: null,
      remember: false,
    },
  });

  const { mutateAsync, error, isLoading } = useSignIn('/ms-auth/api/auth/login');

  return {
    control,
    register,
    error,
    isLoading: isLoading || isLoadingUser,
    setValue,
    onSubmit: handleSubmit(async (value) => {
      try {
        // @ts-ignore
        await mutateAsync({ ...value, space: value.space?.identifier || value.space || null });
        // go to the previews page

        // const from = location.state?.from?.pathname || "/";
        // navigate(from, {replace: true});
        // navigate('/', { replace: true });
      } catch (e) {

      }
    }),
  };
};

export default useLoginForm;
