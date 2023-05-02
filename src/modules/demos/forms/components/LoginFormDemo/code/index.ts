import { LANGUAGE } from 'constants/code-block';

export const code = [
  {
    language: LANGUAGE.TSX,
    code: [
      {
        path: '/demo/index.tsx',
        code: `import React, { useCallback } from 'react';
import useLoginForm from '../hooks/useLoginForm';
import { FlexBox, Form, FormPasswordField, FormTextField, HandlerError, LoadingButton, } from '@dfl/mui-react-common';
import { Box, Grid } from '@mui/material';
import { ILoginResult } from './interfaces';
import toast from 'react-hot-toast';

const Demo = () => {

  const onSuccess = useCallback((_data: ILoginResult) => {
    toast.success('Form submitted!');
  }, []);

  const { onSubmit, control, isLoading, error, reset, formState } = useLoginForm(onSuccess, {
    email: '',
    password: ''
  });

  return (
    <FlexBox
      sx={{
        padding: '8px',
        display: 'flex',
        gap: 4
      }}
    >
      <Box className={'flex-1'}>
        <Form onSubmit={onSubmit} isLoading={isLoading} control={control}>
          <Grid container columnSpacing={2} rowSpacing={4}>
            <Grid item xs={12}>
              <HandlerError error={error} />
            </Grid>
            <Grid item xs={12}>
              <FormTextField name='email' label={'Username'} />
            </Grid>
            <Grid item xs={12}>
              <FormPasswordField name='password' label={'Password'} />
            </Grid>
          </Grid>
          <FlexBox mt={4} justifyContent={'end'} gap={2}>
            <LoadingButton type='submit' variant='contained' loading={isLoading} size={'large'}>
              Login
            </LoadingButton>
            <LoadingButton
              type='button'
              variant='contained'
              loading={isLoading}
              size={'large'}
              onClick={() => {
                reset();
              }}
            >
              Reset
            </LoadingButton>
          </FlexBox>
        </Form>
      </Box>
    </FlexBox>
  );
};

export default Demo;

          `
      },
      {
        path: '/demo/interfaces/index.ts',
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
        path: '/demo/schemas/index.ts',
        code: `import * as Yup from 'yup';
import '@dfl/yup-validations';

export const loginSchema = Yup.object().shape({
  email: Yup.string().email('validEmail').max(255, 'max-255').required('El usuario es requerido'),
  // @ts-ignore
  password: Yup.string().password().required('La contraseña es requerida'),
});

`
      },
      {
        path: '/demo/hooks/useLoginForm.ts',
        code: `import { useCallback, useEffect } from 'react';
import { ILogin, ILoginResult } from '../interfaces';
import { loginSchema } from '../schemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';

const useLoginForm = (callback: (data: ILoginResult) => void, defaultValues: ILogin) => {
  const { control, register, handleSubmit, reset, getValues, setValue, formState } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues,
  });

  const { setFormData, setIsErrorData } = useFormValue();

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
      reset(defaultValues);
    },
    onSubmit: handleSubmit((values: ILogin) => {
      return mutateAsync(values);
    }),
  };
};

export default useLoginForm;

`
      }
    ],
  },
];
