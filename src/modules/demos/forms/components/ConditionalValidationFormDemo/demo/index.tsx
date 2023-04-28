import React, { FC, memo, useCallback, useEffect, useMemo } from 'react';
import useUserForm from '../hooks/useUserForm';
import { FlexBox, Form, FormTextField, H1, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { IData, IDataResult } from '../types';
import { useFormValue } from '../../../context/FormValueProvider';
import isEmpty from 'lodash/isEmpty';
import toast from 'react-hot-toast';
import { CIVIL_STATUS_ENUM } from '../utils';
import FormCivilStatusField from '../components/FormCivilStatusField';
import { code } from '../code';
import withFormCodeSample from 'hocs/withFormCodeSample';
import { DemoProps } from '../../../../../../types';

const defaultValues: IData = {
  name: '',
  civilStatus: CIVIL_STATUS_ENUM.SINGLE,
  otherCivilStatusDescription: '',
};

const Demo: FC<DemoProps> = (props: DemoProps) => {
  const { setFormData } = useFormValue();

  const onSuccess = useCallback((_data: IDataResult) => {
    toast.success('Form submitted!');
  }, []);

  const { onSubmit, control, isLoading, error, reset, formState, civilStatus } = useUserForm(onSuccess, defaultValues);

  const isOtherCivilStatus = useMemo(() => civilStatus === CIVIL_STATUS_ENUM.OTHER, [civilStatus]);

  useEffect(() => {
    if (!isEmpty(formState?.errors)) {
      setFormData(formState?.errors);
    }
  }, [formState?.errors, setFormData]);

  return (
    <FlexBox
      sx={{
        padding: '8px',
        display: 'flex',
        gap: 4,
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
            {/* @ts-ignore */}
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

Demo.defaultProps = {
  code,
};

export default memo(withFormCodeSample(Demo));
