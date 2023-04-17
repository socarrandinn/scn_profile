import { useTranslation } from 'react-i18next';
import { FormTextField, HandlerError, LoadingButton, Span } from '@dfl/mui-react-common';
import Grid from '@mui/material/Grid';
import FormHelperText from '@mui/material/FormHelperText';
import { LOGIN_ERRORS } from 'modules/authentication/constants';
import useResendConfirmationForm from 'modules/authentication/hooks/useResendConfirmationForm';
import { DFLError, ReactLink } from '@dfl/react-security';
import Box from '@mui/material/Box';

const ResendVerifyLinkForm = () => {
  const { t } = useTranslation(['authentication', 'common']);
  const { onSubmit, control, isLoading, error } = useResendConfirmationForm();

  return (
    <>
      <HandlerError error={error as DFLError} errors={LOGIN_ERRORS} />
      <form onSubmit={onSubmit}>
        <Grid container columnSpacing={2} rowSpacing={4}>
          <Grid item xs={12}>
            <FormTextField
              name='email'
              label={t('common:email')}
              control={control}
              disabled={isLoading}
              aria-describedby='email-helper-text'
            />
            <FormHelperText id='email-helper-text'>{t('confirmation.newLink')}</FormHelperText>
          </Grid>
        </Grid>

        <Box mt={2}>
          <LoadingButton fullWidth type='submit' size={'large'} variant='contained' loading={isLoading}>
            {t('confirmation.resend')}
          </LoadingButton>
        </Box>
      </form>
      <Box mt={2} textAlign={'center'}>
        <Span mt={3} color='text.secondary'>
          {t('haveAccount')}
          <ReactLink to='/auth/login' underline='hover'>
            {t('login')}
          </ReactLink>
        </Span>
      </Box>
    </>
  );
};

export default ResendVerifyLinkForm;
