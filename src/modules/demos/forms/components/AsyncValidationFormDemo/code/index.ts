import { LANGUAGE } from 'constants/code-block';

export const code = [
  {
    language: LANGUAGE.TSX,
    code: [
      {
        path: '/demo/index.ts',
        code: `import React, { useCallback } from 'react';
import useCreateEmailForm from '../hooks/useCreateEmailForm';
import {
  FlexBox,
  Form,
  FormPasswordField,
  FormTextField,
  H1,
  HandlerError,
  LoadingButton,
} from '@dfl/mui-react-common';
import { Box, Grid } from '@mui/material';
import { IEmailResult } from './interfaces';
import toast from 'react-hot-toast';

const Demo = () => {

  const onSuccess = useCallback((_data: IEmailResult) => {
    toast.success('Form submitted!');
  }, []);

  const { onSubmit, control, isLoading, error, reset, formState } = useCreateEmailForm(onSuccess, {
    email: '',
    password: '',
    confirmPassword: ''
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
        <Form onSubmit={onSubmit} isLoading={isLoading || formState?.isSubmitting} control={control}>
          <Grid container columnSpacing={2} rowSpacing={4}>
            <Grid item xs={12}>
              <HandlerError error={error} />
            </Grid>
            <H1 className={'mx-4'}>Create Email Account</H1>
            <Grid item xs={12}>
              <FormTextField name='email' label={'Email'} />
            </Grid>
            <Grid item xs={6}>
              <FormPasswordField name='password' label={'Password'} />
            </Grid>
            <Grid item xs={6}>
              <FormPasswordField name='confirmPassword' label={'Confirm Password'} />
            </Grid>
          </Grid>
          <FlexBox mt={4} justifyContent={'end'} gap={2}>
            <LoadingButton
              type='submit'
              variant='contained'
              loading={isLoading || formState?.isSubmitting}
              size={'large'}
            >
              Create Account
            </LoadingButton>
            <LoadingButton
              type='button'
              variant='contained'
              loading={isLoading || formState?.isSubmitting}
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
`,
      },
      {
        path: '/demo/interfaces/index.ts',
        code: `export interface ICreateEmailAccount {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IEmailResult {
  email: string;
  token: string;
}

`,
      },
      {
        path: '/demo/schemas/index.ts',
        code: `import * as Yup from 'yup';
import '@dfl/yup-validations';

const emailList = ['admin@gmail.com', 'test@gmail.com'];

const asyncNotUsedEmail = async (value: string, values: Yup.TestContext<Yup.AnyObject>) => {
  return await new Promise<boolean>((resolve) => {
    return setTimeout(() => {
      if (!emailList.includes(value)) {
        resolve(true);
      } else {
        values.createError({
          path: 'email',
          message: 'This email is in use',
        });
        resolve(false);
      }
    }, 4000);
  });
};

export const createEmailSchema = Yup.object().shape({
  email: Yup.string()
    .required('The email is required')
    .email('The email is invalid')
    .max(255, 'max-255')
    .test('emailInUse', 'This email account already exists', asyncNotUsedEmail),
  password: Yup.string()
  // @ts-ignore
    .password()
    .required('La contraseña es requerida'),
  confirmPassword: Yup.string()
    .required('The passwords is required')
    .oneOf([Yup.ref('password')], 'The passwords don\\'t match'),
});

`,
      },
      {
        path: '/demo/hooks/useCreateEmailForm.ts',
        code: `import { useCallback, useEffect } from 'react';
import { ICreateEmailAccount, IEmailResult } from '../interfaces';
import { createEmailSchema } from '../schemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';

const useCreateEmailForm = (callback: (data: IEmailResult) => void, defaultValues: ICreateEmailAccount) => {
  const { control, register, handleSubmit, reset, getValues, setValue, formState } = useForm({
    resolver: yupResolver(createEmailSchema),
    defaultValues,
  });

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
      reset(defaultValues);
    },
    onSubmit: handleSubmit((values: ICreateEmailAccount) => {
      return mutateAsync(values);
    }),
  };
};

export default useCreateEmailForm;

`,
      },
    ],
  },
];
