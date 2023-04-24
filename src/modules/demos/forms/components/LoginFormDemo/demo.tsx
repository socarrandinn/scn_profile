import { memo, useCallback } from 'react';
import Box from '@mui/material/Box';
import useLoginForm from './useLoginForm';
import { FlexBox, Form, FormPasswordField, FormTextField, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { ILoginResult } from 'modules/demos/forms/components/LoginFormDemo/types';

const Demo = () => {
  const onSuccess = useCallback((data: ILoginResult) => {
    alert('Operation Successful.');
  }, []);

  const { onSubmit, control, isLoading, error, reset } = useLoginForm(onSuccess, { email: '', password: '' });

  return (
    <Box
      sx={{
        padding: '8px',
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
      }}
    >
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
        <FlexBox
          mt={4}
          justifyContent={'end'}
          gap={2}
          sx={{
            minWidth: 200,
          }}
        >
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
  );
};

export default memo(Demo);
