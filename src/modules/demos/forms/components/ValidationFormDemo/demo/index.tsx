import React, { FC, memo, useCallback, useEffect } from 'react';
import useRegisterForm from '../hooks/useRegisterForm';
import { FlexBox, Form, FormDatePickerField, FormPasswordField, FormTextField, HandlerError, LoadingButton, } from '@dfl/mui-react-common';
import { Box, Grid } from '@mui/material';
import { IUser, IUserResult } from '../types';
import { useFormValue } from '../../../context/FormValueProvider';
import isEmpty from 'lodash/isEmpty';
import toast from 'react-hot-toast';
import FormGenderField from '../components/FormGenderField';
import { GENDER_ENUM } from '../utils';
import withFormCodeSample from 'hocs/withFormCodeSample';
import { code } from '../code';
import { DemoProps } from '../../../../../../types';

const defaultValues: IUser = {
  firstName: '',
  lastName: '',
  email: '',
  gender: GENDER_ENUM.MALE,
  birthday: new Date(),
  accountNumber: '',
  password: '',
  confirmPassword: '',
  siteUrl: '',
};

const Demo: FC<DemoProps> = (props: DemoProps) => {
  const { setFormData, setIsErrorData } = useFormValue();

  const onSuccess = useCallback((_data: IUserResult) => {
    toast.success('Form submitted!');
  }, []);

  const { onSubmit, control, isLoading, error, reset, formState } = useRegisterForm(
    onSuccess,
    defaultValues,
  );

  useEffect(() => {
    if (!isEmpty(formState?.errors)) {
      setFormData(formState?.errors);
      setIsErrorData(true);
    }
  }, [formState?.errors, setFormData, setIsErrorData]);

  // @ts-ignore
  return (
    <FlexBox
      sx={{
        padding: '8px',
        display: 'flex',
        gap: 4,
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

Demo.defaultProps = {
  code
};

// @ts-ignore
export default memo(withFormCodeSample(Demo));
