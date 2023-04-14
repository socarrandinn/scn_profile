import { memo } from 'react';
import { Grid, Stack, Box } from '@mui/material';
import { useLoginForm } from 'modules/authentication/hooks';
import { useTranslation } from 'react-i18next';
import { Form, FormPasswordField, FormSwitchField, FormTextField, LoadingButton, Span } from '@dfl/mui-react-common';
import { ReactLink } from '@dfl/react-security';
import { MultiSpaceErrorHandler } from 'modules/authentication/components/MultiSpaceErrorHandler';

const LoginContainer = () => {
  const { t } = useTranslation(['authentication', 'common', 'errors']);
  const { onSubmit, control, isLoading, error, setValue } = useLoginForm();

  return (
    <Box sx={{ my: 3 }}>
      <Form onSubmit={onSubmit} isLoading={isLoading} control={control}>
        <Grid container columnSpacing={2} rowSpacing={4}>
          <Grid item xs={12}>
            <MultiSpaceErrorHandler error={error} setValue={setValue} />
          </Grid>
          <Grid item xs={12}>
            <FormTextField name='email' label={t('common:email')} />
          </Grid>
          <Grid item xs={12}>
            <FormPasswordField name='password' label={t('common:password')} />
          </Grid>
        </Grid>
        <Stack mt={2} direction={{ xs: 'column', sm: 'row' }} justifyContent={'space-between'} alignItems={'center'}>
          <FormSwitchField name='remember' label={t('remember')} />
          <ReactLink to='/auth/reset-password/init' underline='hover'>
            {t('forgotPassword')}
          </ReactLink>
        </Stack>
        <Box mt={4}>
          <LoadingButton fullWidth type='submit' variant='contained' loading={isLoading} size={'large'}>
            {t('login')}
          </LoadingButton>
        </Box>
      </Form>
      <Box mt={2} textAlign={'center'}>
        <Span mt={3} color='text.secondary'>
          {t('notHaveAccount')}
          <ReactLink to='/auth/signup' underline='hover'>
            {t('createAccount')}
          </ReactLink>
        </Span>
      </Box>
    </Box>
  );
};

export default memo(LoginContainer);
