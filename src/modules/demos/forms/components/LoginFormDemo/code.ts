import { LANGUAGE } from 'constants/code-block';

export const loginFormSampleCode = [
  {
    language: LANGUAGE.TSX,
    code: `//Define the types in types.ts

export interface ILogin {
  email: string;
  password: string;
}

export interface ILoginResult {
  email: string;
  token: string;
}

//Define the form schema in schema.ts

import * as Yup from 'yup';
import '@dfl/yup-validations';

export const loginSchema = Yup.object().shape({
  email: Yup.string().email('validEmail').max(255, 'max-255').required('El usuario es requerido'),
  // @ts-ignore
  password: Yup.string().password().required('La contraseña es requerida'),
});

//Define a hook for the operation in a file. Example useLoginForm.tsx

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
      return mutateAsync(values);
    }),
  };
};

export default useLoginForm;

//Define the file with the form.

import { useCallback } from 'react';
import useLoginForm from './useLoginForm';
import {
  FlexBox,
  Form,
  FormPasswordField,
  FormTextField,
  HandlerError,
  LoadingButton
} from '@dfl/mui-react-common';
import { Grid, Box } from '@mui/material';
import { ILoginResult } from './types';
import toast from 'react-hot-toast';

const Demo = () => {

  const onSuccess = useCallback((data: ILoginResult) => {
    toast.success('Form submitted!');
  }, []);

  const { onSubmit, control, isLoading, error, reset, formState } = useLoginForm(onSuccess, {
    email: '',
    password: '',
  });

  // @ts-ignore
  return (
    <FlexBox
      sx={{
        padding: '8px',
        display: 'flex',
        gap: 4
      }}
    >
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
    </FlexBox>
  );
};

export default Demo;

`,
  },
];
