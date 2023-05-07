import { LANGUAGE } from 'constants/code-block';

export const code = [
  {
    language: LANGUAGE.TSX,
    code: [
      {
        path: '/demo/index.tsx',
        code: `import React, { useCallback } from 'react';
import useRegisterForm from '../hooks/useRegisterForm';
import { FlexBox, Form, FormTextField, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { Box, Divider, Grid } from '@mui/material';
import { IUser, IUserResult } from './interfaces';
import toast from 'react-hot-toast';

const defaultValues: IUser = {
  firstName: '',
  lastName: '',
  job: {
    position: '',
    department: ''
  }
};

const Demo = () => {

  const onSuccess = useCallback((_data: IUserResult) => {
    toast.success('Form submitted!');
  }, []);

  const { onSubmit, control, isLoading, error, reset } = useRegisterForm(onSuccess, defaultValues);

  return (
    <Box px={1}>
      <Form onSubmit={onSubmit} isLoading={isLoading} control={control}>
        <Grid container columnSpacing={2} rowSpacing={4}>
          <Grid item xs={12}>
            <HandlerError error={error} />
          </Grid>
          <Grid item xs={6}>
            <FormTextField name='firstName' label={'First Name'} />
          </Grid>
          <Grid item xs={6}>
            <FormTextField name='lastName' label={'Last Name'} />
          </Grid>
          <Grid item xs={12}>
            <Divider textAlign="left">Job Information</Divider>
          </Grid>
          <Grid item xs={6}>
            <FormTextField name='job.position' label={'Position'} />
          </Grid>
          <Grid item xs={6}>
            <FormTextField name='job.department' label={'Department'} />
          </Grid>
        </Grid>
        <FlexBox mt={4} justifyContent={'end'} gap={2}>
          <LoadingButton type='submit' variant='contained' loading={isLoading} size={'large'}>
            Register
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
  );
};

export default Demo;

`,
      },
      {
        path: '/demo/interfaces/index.ts',
        code: `export interface IJob {
  position: string,
  department: string,
}

export interface IUser {
  firstName: string;
  lastName: string;
  job: IJob
}

export interface IUserResult {
  _id: string,
  firstName: string;
  lastName: string;
  job: IJob
}


`,
      },
      {
        path: '/demo/schemas/index.ts',
        code: `import * as Yup from 'yup';
import '@dfl/yup-validations';

const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

const jobSchema = Yup.object().shape({
  position: Yup.string().required('The position is required'),
  department: Yup.string().required('The department is required'),
});

export const userSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('The first name is required.')
    .matches(nameRegex, {
      name: 'firstNameValidator',
      message: 'The first name is invalid',
      excludeEmptyString: true,
    }),
  lastName: Yup.string()
    .required('The last name is required.')
    .matches(nameRegex, {
      name: 'lastNameValidator',
      message: 'The last name is invalid',
      excludeEmptyString: true,
    }),
  job: jobSchema,
});


`,
      },
      {
        path: '/demo/hooks/useRegisterForm.ts',
        code: `import { useCallback, useEffect } from 'react';
import { IUser, IUserResult } from '../interfaces';
import { userSchema } from '../schemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';

const useRegisterForm = (callback: (data: IUserResult) => void, defaultValues: IUser) => {
  const {
    control,
    register,
    handleSubmit,
    reset,
    getValues,
    setValue,
    formState
  } = useForm({
    resolver: yupResolver(userSchema),
    defaultValues,
  });

  const serviceFn = useCallback(async (data: IUser) => {
    const result: IUserResult = {
      _id: '5b81451d-d76c-4db8-9e15-0d0629f455e6',
      ...data || {}
    };
    return result;
  }, []);

  const { mutateAsync, error, isLoading } = useMutation(
    serviceFn,
    {
      onSuccess: (data: IUserResult) => {
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
    onSubmit: handleSubmit((values: IUser) => {
      return mutateAsync(values);
    }),
  };
};

export default useRegisterForm;


`,
      },
    ],
  },
];
