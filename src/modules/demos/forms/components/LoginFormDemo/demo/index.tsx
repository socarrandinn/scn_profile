import React, { memo, useCallback, useEffect } from 'react';
import useLoginForm from '../hooks/useLoginForm';
import { FlexBox, Form, FormPasswordField, FormTextField, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { Box, Grid } from '@mui/material';
import { ILoginResult } from '../types';
import { useFormValue } from '../../../context/FormValueProvider';
import isEmpty from 'lodash/isEmpty';
import toast from 'react-hot-toast';
import { code } from '../code';
import { DemoProps } from '../../../../../../types';
import withFormCodeSample from 'hocs/withFormCodeSample';

const Demo = (props: DemoProps) => {
  const { setFormData, setIsErrorData } = useFormValue();

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
      setIsErrorData(true);
    }
  }, [formState?.errors, setFormData, setIsErrorData]);

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
    </FlexBox>
  );
};

Demo.defaultProps = {
  code
};

export default memo(withFormCodeSample(Demo));
