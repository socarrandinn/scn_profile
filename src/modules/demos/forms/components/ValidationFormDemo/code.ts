import { LANGUAGE } from 'constants/code-block';

export const validationFormSampleCode = [
  {
    language: LANGUAGE.TSX,
    code: `//Define helpers enums and components in data.ts

import { FormFieldControlProps, FormSelectField } from '@dfl/mui-react-common';
import MenuItem from '@mui/material/MenuItem';

export enum GENDER_ENUM {
  MALE = 'Male',
  FEMALE = 'Female',
}

export enum CIVIL_STATUS_ENUM {
  SINGLE = 'Single',
  MARRIED = 'Married',
  OTHER = 'Other',
}

export const FormGenderField = (props: FormFieldControlProps) => {
  return <FormSelectField {...props}>
    {
      Object.values(GENDER_ENUM).map((gender: string) => {
        return <MenuItem key={gender} value={gender}>{gender}</MenuItem>;
      })
    }
  </FormSelectField>;
};

export const FormCivilStatusField = (props: FormFieldControlProps) => {
  return <FormSelectField {...props}>
    {
      Object.values(CIVIL_STATUS_ENUM).map((civilStatus: string) => {
        return <MenuItem key={civilStatus} value={civilStatus}>{civilStatus}</MenuItem>;
      })
    }
  </FormSelectField>;
};


//Define the types in types.ts

import { CIVIL_STATUS_ENUM, GENDER_ENUM } from './data';

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  gender: GENDER_ENUM;
  civilStatus: CIVIL_STATUS_ENUM,
  otherCivilStatusDescription: string,
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
  civilStatus: CIVIL_STATUS_ENUM,
  otherCivilStatusDescription: string,
  birthday: Date,
  accountNumber: string,
  siteUrl?: string,
}


//Define the form schema in schema.ts

import * as Yup from 'yup';
import { CIVIL_STATUS_ENUM, GENDER_ENUM } from './data';

const bankAccountValidator = (value: string) => {
  const regex = /^\\d{4}-\\d{4}-\\d{4}-\\d{4}$/;
  return value ? regex.test(value) : true;
};

const getXYearsOldDate = (years: number = 18) => {
  const today = new Date();
  return new Date(today.getFullYear() - years, today.getMonth(), today.getDate());
}

export const validationSchema = Yup.object().shape({
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
  gender: Yup.string()
    .oneOf(Object.values(GENDER_ENUM), 'Unknown gender'),
  civilStatus: Yup.string()
    .oneOf(Object.values(CIVIL_STATUS_ENUM), 'Unknown civil status'),
  otherCivilStatusDescription: Yup.string()
    .typeError('You must specify the civil status')
    .when('civilStatus', {
      is: CIVIL_STATUS_ENUM.OTHER,
      then: (schema) => schema
        .required('The description is required')
        .min(3, 'The description must have more than 2 characters.')
        .max(20, 'The description must have less than 20 characters.'),
      otherwise: (schema) => schema //Not required in this case actually
    }),
  birthday: Yup.date()
    .min(getXYearsOldDate(100), 'The person must have less than 100 years old')
    .max(getXYearsOldDate(), 'The person must have more than 18 years old'),
  accountNumber: Yup.string()
    .required('The account number is required')
    .test('accountNumber', 'Must have the format xxxx-xxxx-xxxx-xxxx', bankAccountValidator),
  siteUrl: Yup.string()
    .url('The url is invalid.'),
  password: Yup.string()
    // @ts-ignore
    .password()
    .required('The password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Mismatched passwords')
    .required('Please confirm your password'),
});

//Define a hook for the form operation. Example useRegisterForm.tsx

import { useCallback, useEffect } from 'react';
import { IUser, IUserResult } from './types';
import { validationSchema } from './schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';

const useRegisterForm = (callback: (data: IUserResult) => void, defaultValues: IUser) => {
  const { control, register, handleSubmit, reset, getValues, setValue, formState, watch } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues,
  });

  const { setFormData } = useFormValue();

  useEffect(() => {
    setFormData(defaultValues);
  }, []);

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
    civilStatus: watch('civilStatus'),
    reset: () => {
      reset(defaultValues);
    },
    onSubmit: handleSubmit((values: IUser) => {
      return mutateAsync(values);
    }),
  };
};

export default useRegisterForm;

//Define the file with the form.

import { useMemo, useCallback, useEffect } from 'react';
import useRegisterForm from './useRegisterForm';
import {
  FlexBox,
  Form,
  FormPasswordField,
  FormTextField,
  FormDatePickerField,
  HandlerError,
  LoadingButton,
} from '@dfl/mui-react-common';
import { Grid, Box } from '@mui/material';
import { IUser, IUserResult } from './types';
import isEmpty from 'lodash/isEmpty';
import toast from 'react-hot-toast';
import { CIVIL_STATUS_ENUM, FormCivilStatusField, FormGenderField, GENDER_ENUM } from './data';

const defaultValues: IUser = {
  firstName: '',
  lastName: '',
  email: '',
  gender: GENDER_ENUM.MALE,
  civilStatus: CIVIL_STATUS_ENUM.SINGLE,
  otherCivilStatusDescription: '',
  birthday: new Date(),
  accountNumber: '',
  password: '',
  confirmPassword: '',
  siteUrl: ''
}

const Demo = () => {

  const onSuccess = useCallback((_data: IUserResult) => {
    toast.success('Form submitted!');
  }, []);

  const { onSubmit, control, isLoading, error, reset, formState, civilStatus } = useRegisterForm(onSuccess, defaultValues);

  const isOtherCivilStatus = useMemo(() => civilStatus === CIVIL_STATUS_ENUM.OTHER, [civilStatus]);

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
   <Grid item xs={isOtherCivilStatus ? 6 : 12}>
     {/* @ts-ignore */}
     <FormCivilStatusField name='civilStatus' label={'Civil Status'} />
   </Grid>
   {isOtherCivilStatus && <Grid item xs={6}>
     <FormTextField name='otherCivilStatusDescription' label={'Other Civil Status'}/>
   </Grid>}
   <Grid item xs={6}>
     <FormTextField name='email' label={'Email'}/>
   </Grid>
   <Grid item xs={6}>
     <FormTextField name='accountNumber' label={'Account Number'}/>
   </Grid>
   <Grid item xs={12}>
     <FormTextField name='siteUrl' label={'Blog Url'}/>
   </Grid>
   <Grid item xs={6}>
     <FormPasswordField name='password' label={'Password'} />
   </Grid>
   <Grid item xs={6}>
     <FormPasswordField name='confirmPassword' label={'Confirm Password'} />
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
    </FlexBox>
  );
};

export default Demo;

`,
  },
];
