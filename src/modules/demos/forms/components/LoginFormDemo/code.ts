import { LANGUAGE } from 'constants/code-block';

export const code = [
  {
    language: LANGUAGE.TSX,
    code: [
      {
        path: '/types.ts',
        code: `export interface ILogin {
  email: string;
  password: string;
}

export interface ILoginResult {
  email: string;
  token: string;
}
        `
      },
      {
        path: 'schemas/login.ts',
        code: `import * as Yup from 'yup';
import '@dfl/yup-validations';

export const loginSchema = Yup.object().shape({
  email: Yup.string().email('validEmail').max(255, 'max-255').required('El usuario es requerido'),
  // @ts-ignore
  password: Yup.string().password().required('La contraseña es requerida'),
});`
      },
      {
        path: '/hooks/useLoginForm.tsx',
        code: `import { useCallback } from 'react';
import { ILogin, ILoginResult } from './types';
import { loginSchema } from './schemas/login';
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
      return mutateAsync(values);
    }),
  };
};

export default useLoginForm;`
      },
      {
        path: ''
      }
    ],
  },
];
