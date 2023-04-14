import { useMutation } from '@tanstack/react-query';
import { API_AUTH, ApiClientService, AuthService, useAuth } from '@dfl/react-security';

const adminLogin = (params: any) => {
  return AuthService.handleResponse(ApiClientService.post(`${API_AUTH.url}/signin`, params));
};

export const useSignIn = () => {
  const { setAuth } = useAuth();

  const { mutateAsync, mutate, isLoading, isError, data, error, isSuccess } = useMutation(adminLogin, {
    onSuccess: (data) => {
      setAuth(data);
    },
  });

  return {
    mutateAsync,
    mutate,
    isLoading,
    isSuccess,
    isError,
    data,
    error,
  };
};
