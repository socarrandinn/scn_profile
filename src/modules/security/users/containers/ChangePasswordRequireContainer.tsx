import { memo } from 'react';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'react-i18next';
import { HandlerError, Form, FormPasswordField, LoadingButton } from '@dfl/mui-react-common';
import { Box } from '@mui/material';
import { ONBORDING_ERRORS } from '../constants/onBording.errors';
import { useUser } from '@dfl/react-security';
import useUserPasswordForm from '../hooks/useUserPasswordForm';

const ChangePasswordRequireContainer = () => {
  const { t } = useTranslation(['authentication', 'common', 'errors']);
  const { user } = useUser();
  const { onSubmit, control, isLoading, error } = useUserPasswordForm(user);

  return (
    <Box sx={{ my: 3 }}>
      <HandlerError error={error} errors={ONBORDING_ERRORS} />
      <Form onSubmit={onSubmit} isLoading={isLoading} control={control}>
        <Grid container columnSpacing={2} rowSpacing={4}>
          <Grid item xs={12}>
            <FormPasswordField name='lastPassword' label={t('common:lastPassword')} />
          </Grid>

          <Grid item xs={12}>
            <FormPasswordField name='password' label={t('common:password')} />
          </Grid>
          <Grid item xs={12}>
            <FormPasswordField name='repeat_password' label={t('common:repeat_password')} />
          </Grid>
        </Grid>
        <Box mt={4}>
          <LoadingButton fullWidth type='submit' variant='contained' loading={isLoading} size={'large'}>
            {t('common:saveChange')}
          </LoadingButton>
        </Box>
      </Form>
    </Box>
  );
};

export default memo(ChangePasswordRequireContainer);
