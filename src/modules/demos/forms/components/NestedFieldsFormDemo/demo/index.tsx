import React, { FC, memo, useCallback, useEffect } from 'react';
import useRegisterForm from '../hooks/useRegisterForm';
import { FlexBox, Form, FormTextField, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { Box, Divider, Grid } from '@mui/material';
import { IUser, IUserResult } from '../interfaces';
import isEmpty from 'lodash/isEmpty';
import toast from 'react-hot-toast';
import withFormCodeSample from 'hocs/withFormCodeSample';
import { code } from '../code';
import { useFormValue } from '../../../context/FormValueProvider';
import { DemoProps } from '../../../../../../types';

const defaultValues: IUser = {
  firstName: '',
  lastName: '',
  job: {
    position: '',
    department: ''
  }
};

const Demo: FC<DemoProps> = (props: DemoProps) => {
  const { setFormData, setIsErrorData } = useFormValue();

  const onSuccess = useCallback((_data: IUserResult) => {
    toast.success('Form submitted!');
  }, []);

  const { onSubmit, control, isLoading, error, reset, formState } = useRegisterForm(onSuccess, defaultValues);

  useEffect(() => {
    if (!isEmpty(formState?.errors)) {
      setFormData(formState?.errors);
      setIsErrorData(true);
    }
  }, [formState?.errors, setFormData, setIsErrorData]);

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

Demo.defaultProps = {
  code,
};

export default memo(withFormCodeSample(Demo));
