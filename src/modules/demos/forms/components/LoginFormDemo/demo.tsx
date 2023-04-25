import React, { memo, useCallback, useEffect } from 'react';
import useLoginForm from './useLoginForm';
import {
  FlexBox,
  Form,
  FormPasswordField,
  FormTextField,
  HandlerError,
  LoadingButton,
  H3,
} from '@dfl/mui-react-common';
import { Grid, Box } from '@mui/material';
import { ILoginResult } from './types';
import { useFormValue } from '../../context/FormValueProvider';
import ReactJson from 'react-json-view';
import isEmpty from 'lodash/isEmpty';
import toast from 'react-hot-toast';

const Demo = () => {
  const { formData, setFormData } = useFormValue();

  const onSuccess = useCallback((_data: ILoginResult) => {
    toast.success('Form submitted!');
  }, []);

  const { onSubmit, control, isLoading, error, reset, formState } = useLoginForm(onSuccess, {
    email: '',
    password: '',
  });

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
      <Box className={'relative min-w-[35%] max-w-[35%]'}>
        <H3>Form Data</H3>
        <ReactJson src={formData || {}} />
      </Box>
    </FlexBox>
  );
};

export default memo(Demo);
