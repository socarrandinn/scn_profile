import React, { memo, useMemo, useCallback, useEffect } from 'react';
import useRegisterForm from './useRegisterForm';
import {
  FlexBox,
  Form,
  FormPasswordField,
  FormTextField,
  FormDatePickerField,
  HandlerError,
  LoadingButton,
  H3,
} from '@dfl/mui-react-common';
import { Grid, Box } from '@mui/material';
import { IUser, IUserResult } from './types';
import { useFormValue } from '../../context/FormValueProvider';
import ReactJson from 'react-json-view';
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
  siteUrl: '',
};

const Demo = () => {
  const { formData, setFormData } = useFormValue();

  const onSuccess = useCallback((_data: IUserResult) => {
    toast.success('Form submitted!');
  }, []);

  const { onSubmit, control, isLoading, error, reset, formState, civilStatus } = useRegisterForm(
    onSuccess,
    defaultValues,
  );

  const isOtherCivilStatus = useMemo(() => civilStatus === CIVIL_STATUS_ENUM.OTHER, [civilStatus]);

  useEffect(() => {
    if (!isEmpty(formState?.errors)) {
      setFormData(formState?.errors);
    }
  }, [formState?.errors, setFormData]);

  // @ts-ignore
  return (
    <FlexBox
      sx={{
        padding: '8px',
        display: 'flex',
        gap: 4,
      }}
    >
      <Box className={'flex-1'}>
        <Form onSubmit={onSubmit} isLoading={isLoading || formState?.isSubmitting} control={control}>
          <Grid container columnSpacing={2} rowSpacing={4}>
            <Grid item xs={12}>
              {formState?.isSubmitting && <Box>Validating Data...</Box>}
            </Grid>
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
            {isOtherCivilStatus && (
              <Grid item xs={6}>
                <FormTextField
                  name='otherCivilStatusDescription'
                  label={'Other Civil Status'}

                />
              </Grid>
            )}
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
      </Box>
      <Box className={'relative min-w-[35%] max-w-[35%]'}>
        <H3>Form Data</H3>
        <ReactJson src={formData || {}} />
      </Box>
    </FlexBox>
  );
};

export default memo(Demo);
