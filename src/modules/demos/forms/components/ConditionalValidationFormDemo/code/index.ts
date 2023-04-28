import { LANGUAGE } from 'constants/code-block';

export const code = [
  {
    language: LANGUAGE.TSX,
    code: [
      {
        path: '/demo/index.tsx',
        code: `import React, { useCallback, useMemo } from 'react';
import useUserForm from '../hooks/useUserForm';
import { FlexBox, Form, FormTextField, H1, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { IData, IDataResult } from './interfaces';
import toast from 'react-hot-toast';
import { CIVIL_STATUS_ENUM } from './utils';
import FormCivilStatusField from './components/FormCivilStatusField';

const defaultValues: IData = {
  name: '',
  civilStatus: CIVIL_STATUS_ENUM.SINGLE,
  otherCivilStatusDescription: ''
};

const Demo = () => {

  const onSuccess = useCallback((_data: IDataResult) => {
    toast.success('Form submitted!');
  }, []);

  const { onSubmit, control, isLoading, error, reset, civilStatus } = useUserForm(onSuccess, defaultValues);

  const isOtherCivilStatus = useMemo(() => civilStatus === CIVIL_STATUS_ENUM.OTHER, [civilStatus]);
  
  return (
    <FlexBox
      sx={{
        padding: '8px',
        display: 'flex',
        gap: 4
      }}
    >
      <Form onSubmit={onSubmit} isLoading={isLoading} control={control} className={'flex-1'}>
        <Grid container columnSpacing={2} rowSpacing={4}>
          <Grid item xs={12}>
            <HandlerError error={error} />
          </Grid>
          <Grid item xs={12}>
            <H1 className={'mx-4'}>Person Data</H1>
          </Grid>
          <Grid item xs={12}>
            <FormTextField name='name' label={'Name'} />
          </Grid>
          <Grid item xs={isOtherCivilStatus ? 6 : 12}>
            <FormCivilStatusField name='civilStatus' label={'Civil Status'} />
          </Grid>
          {isOtherCivilStatus && (
            <Grid item xs={6}>
              <FormTextField name='otherCivilStatusDescription' label={'Other Civil Status'} />
            </Grid>
          )}
        </Grid>
        <FlexBox mt={4} justifyContent={'end'} gap={2}>
          <LoadingButton
            type='submit'
            variant='contained'
            loading={isLoading}
            size={'large'}
          >
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

`
      },
      {
        path: '/demo/utils/index.ts',
        code: `export enum CIVIL_STATUS_ENUM {
  SINGLE = 'Single',
  MARRIED = 'Married',
  OTHER = 'Other',
}

`
      },
      {
        path: '/demo/interfaces/index.ts',
        code: `import { CIVIL_STATUS_ENUM } from '../utils';

export interface IData {
  name: string;
  civilStatus: CIVIL_STATUS_ENUM,
  otherCivilStatusDescription: string,
}

export interface IDataResult {
  name: string;
  civilStatus: CIVIL_STATUS_ENUM,
  otherCivilStatusDescription: string,
  siteUrl?: string,
}

`
      },
      {
        path: '/demo/schemas/index.ts',
        code: `import * as Yup from 'yup';
import '@dfl/yup-validations';
import { CIVIL_STATUS_ENUM } from '../utils';

export const userSchema = Yup.object().shape({
  name: Yup.string()
    .required('The name is required.')
    .matches(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/, {
      name: 'nameValidator',
      message: 'The first name is invalid',
      excludeEmptyString: true,
    }),
  civilStatus: Yup.string().oneOf(Object.values(CIVIL_STATUS_ENUM), 'Unknown civil status'),
  otherCivilStatusDescription: Yup.string()
    .typeError('You must specify the civil status')
    .when('civilStatus', {
      is: CIVIL_STATUS_ENUM.OTHER,
      then: (schema) =>
        schema
          .required('The description is required')
          .min(3, 'The description must have more than 2 characters.')
          .max(20, 'The description must have less than 20 characters.'),
      otherwise: (schema) => schema // Only needed if you want to specify another validation schema otherwise it can be omitted.
    }),
});

`
      },
      {
        path: '/demo/hooks/useUserForm.ts',
        code: `import { IData, IDataResult } from '../interfaces';
import { userSchema } from '../schemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';

const useUserForm = (callback: (data: IDataResult) => void, defaultValues: IData) => {
  const {
    control,
    register,
    handleSubmit,
    reset,
    getValues,
    setValue,
    formState,
    watch
  } = useForm({
    resolver: yupResolver(userSchema),
    defaultValues,
  });

  const serviceFn = useCallback((data: IData) => {
    const result: IDataResult = {
      ...data || {}
    };
    return result;
  }, []);

  const { mutateAsync, error, isLoading } = useMutation(
    serviceFn,
    {
      onSuccess: (data: IDataResult) => {
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
    civilStatus: watch('civilStatus'),
    setValue,
    formState,
    reset: () => {
      reset(defaultValues);
    },
    onSubmit: handleSubmit((values: IData) => {
      return mutateAsync(values);
    }),
  };
};

export default useUserForm;


`
      },
      {
        path: '/demo/components/FormCivilStatusField.ts',
        code: `import { FormFieldControlProps, FormSelectField } from '@dfl/mui-react-common';
import { MenuItem, SelectProps } from '@mui/material';
import { CIVIL_STATUS_ENUM } from '../utils';

const FormCivilStatusField = (props: FormFieldControlProps & SelectProps) => {
  return (
    <FormSelectField {...props}>
      {Object.values(CIVIL_STATUS_ENUM).map((civilStatus: string) => {
        return (
          <MenuItem key={civilStatus} value={civilStatus}>
            {civilStatus}
          </MenuItem>
        );
      })}
    </FormSelectField>
  );
};

export default FormCivilStatusField;

        `
      }
    ],
  },
];
