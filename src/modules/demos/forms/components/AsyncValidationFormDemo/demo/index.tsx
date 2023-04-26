import React, { memo, useCallback, useEffect } from 'react';
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
import { IEmailResult } from '../types';
import { useFormValue } from '../../../context/FormValueProvider';
import isEmpty from 'lodash/isEmpty';
import toast from 'react-hot-toast';
import { code } from '../code';
import { DemoProps } from '../../../../../../types';
import withFormCodeSample from 'hocs/withFormCodeSample';

const Demo = (props: DemoProps) => {
  const { setFormData, setIsErrorData } = useFormValue();

  const onSuccess = useCallback((_data: IEmailResult) => {
    toast.success('Form submitted!');
  }, []);

  const { onSubmit, control, isLoading, error, reset, formState } = useCreateEmailForm(onSuccess, {
    email: '',
    password: '',
    confirmPassword: '',
  });

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

Demo.defaultProps = {
  code,
};

// @ts-ignore
export default memo(withFormCodeSample(Demo));
