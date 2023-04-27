import { LANGUAGE } from 'constants/code-block';

export const code = [
  {
    language: LANGUAGE.TSX,
    code: [
      {
        path: '/demo/index.tsx',
        code: `import { useCallback, useEffect } from 'react';
import useRegisterForm from './hooks/useRegisterForm';
import { FlexBox, Form, FormDatePickerField, FormPasswordField, FormTextField, HandlerError, LoadingButton, } from '@dfl/mui-react-common';
import { Box, Grid } from '@mui/material';
import { IUser, IUserResult } from './types';
import toast from 'react-hot-toast';
import FormGenderField from './components/FormGenderField';
import { GENDER_ENUM } from './utils';

const defaultValues: IUser = {
  firstName: '',
  lastName: '',
  email: '',
  gender: GENDER_ENUM.MALE,
  birthday: new Date(),
  accountNumber: '',
  password: '',
  confirmPassword: '',
  siteUrl: ''
};

const Demo = () => {

  const onSuccess = useCallback((_data: IUserResult) => {
    toast.success('Form submitted!');
  }, []);

  const { onSubmit, control, isLoading, error, reset, formState } = useRegisterForm(
    onSuccess,
    defaultValues,
  );
  
  return (
    <FlexBox
      sx={{
        padding: '8px',
        display: 'flex',
        gap: 4
      }}
    >
        <Form onSubmit={onSubmit} isLoading={isLoading || formState?.isSubmitting} control={control}>
          <Grid container columnSpacing={2} rowSpacing={4}>
            <Grid item xs={6}>
              {formState?.isSubmitting && <Box>Validating Data...</Box>}
            </Grid>
            <Grid item xs={6}>
              <HandlerError error={error} />
            </Grid>
            <Grid item xs={6}>
              <FormTextField name='firstName' label={'First Name'} />
            </Grid>
            <Grid item xs={6}>
              <FormTextField name='lastName' label={'Last Name'} />
            </Grid>
            <Grid item xs={6}>
              {/* @ts-ignore */}
              <FormGenderField name='gender' label={'Gender'} />
            </Grid>
            <Grid item xs={6}>
              <FormDatePickerField name='birthday' label={'Born Date'} />
            </Grid>
            <Grid item xs={6}>
              <FormTextField name='email' label={'Email'} />
            </Grid>
            <Grid item xs={6}>
              <FormTextField name='accountNumber' label={'Account Number'} />
            </Grid>
            <Grid item xs={12}>
              <FormTextField name='siteUrl' label={'Blog Url'} />
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
              Register
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
    </FlexBox>
  );
};

export default Demo;
`
      },
      {
        path: '/demo/utils/index.ts',
        code: `export enum GENDER_ENUM {
  MALE = 'Male',
  FEMALE = 'Female',
}

export const bankAccountValidator = (value: string) => {
  const regex = /^\\d{4}-\\d{4}-\\d{4}-\\d{4}$/;
  return value ? regex.test(value) : true;
};

export const getXYearsOldDate = (years: number = 18) => {
  const today = new Date();
  return new Date(today.getFullYear() - years, today.getMonth(), today.getDate());
};
`
      },
      {
        path: '/demo/types/index.ts',
        code: `import { GENDER_ENUM } from '../utils';

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  gender: GENDER_ENUM;
  birthday: Date,
  accountNumber: string,
  password: string,
  confirmPassword: string,
  siteUrl?: string,
}

export interface IUserResult {
  firstName: string;
  lastName: string;
  email: string;
  gender: GENDER_ENUM;
  birthday: Date,
  accountNumber: string,
  siteUrl?: string,
}

`
      },
      {
        path: '/demo/schemas/index.ts',
        code: `import * as Yup from 'yup';
import '@dfl/yup-validations';
import { bankAccountValidator, GENDER_ENUM, getXYearsOldDate } from '../utils';

export const userSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('The name is required.')
    .matches(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/, {
      name: 'nameValidator',
      message: 'The first name is invalid',
      excludeEmptyString: true,
    }),
  lastName: Yup.string()
    .required('The name is required.')
    .matches(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/, {
      name: 'lastNameValidator',
      message: 'The last name is invalid',
      excludeEmptyString: true,
    }),
  email: Yup.string()
    .email('The email is invalid')
    .required('The email is required'),
  gender: Yup.string().oneOf(Object.values(GENDER_ENUM), 'Unknown gender'),
  birthday: Yup.date()
    .min(getXYearsOldDate(100), 'The person must have less than 100 years old')
    .max(getXYearsOldDate(), 'The person must have more than 18 years old'),
  accountNumber: Yup.string()
    .required('The account number is required')
    .test('accountNumber', 'Must have the format xxxx-xxxx-xxxx-xxxx', bankAccountValidator),
  siteUrl: Yup.string().url('The url is invalid.'),
  password: Yup.string()
    // @ts-ignore
    .password()
    .required('The password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Mismatched passwords')
    .required('Please confirm your password'),
});

`
      },
      {
        path: '/demo/components/FormGenderField.tsx',
        code: `import { memo } from 'react';
import { FormFieldControlProps, FormSelectField } from '@dfl/mui-react-common';
import MenuItem from '@mui/material/MenuItem';
import { GENDER_ENUM } from '../utils';

const FormGenderField = (props: FormFieldControlProps) => {
  return (
    <FormSelectField {...props}>
      {Object.values(GENDER_ENUM).map((gender: string) => {
        return (
          <MenuItem key={gender} value={gender}>
            {gender}
          </MenuItem>
        );
      })}
    </FormSelectField>
  );
};

export default memo(FormGenderField);

`
      },
      {
        path: '/demo/hooks/useRegisterForm.tsx',
        code: `import { useCallback, useEffect } from 'react';
import { IUser, IUserResult } from '../types';
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

  const serviceFn = useCallback((data: IUser) => {
    const result: IUserResult = {
      ...data || {}
    };
    return result;
  }, []);

  const { mutateAsync, error, isLoading } = useMutation(
    // @ts-ignore
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

`
      }
    ],
  },
];
