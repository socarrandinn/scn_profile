import { memo } from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { useUser } from '@dfl/react-security';
import { HandlerError, LoadingButton, Form, FormPasswordField } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { ACCOUNT_ERRORS } from 'modules/security/users/constants/account.errors';
import useUserPasswordForm from 'modules/security/users/hooks/useUserPasswordForm';

const ChangePassword = () => {
  const { user } = useUser();
  const { t } = useTranslation(['common', 'account']);
  const { control, onSubmit, isLoading, error } = useUserPasswordForm(user);

  return (
    <>
      <Typography variant={'h3'} mb={3}>
        {t('account:securityTab.changePassword')}
      </Typography>

      <HandlerError error={error} errors={ACCOUNT_ERRORS} />

      <Form onSubmit={onSubmit} isLoading={isLoading} control={control}>
        <input name='username' hidden readOnly type={'text'} value={user?.email || ''} autoComplete={'username'} />
        <Box>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={12}>
              <FormPasswordField
                fullWidth
                name='lastPassword'
                inputProps={{ autoComplete: 'current-password' }}
                label={t('account:password')}
                placeholder={t('account:password')}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormPasswordField
                fullWidth
                inputProps={{ autoComplete: 'new-password' }}
                name='password'
                label={t('account:newPassword')}
                placeholder={t('account:newPassword')}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormPasswordField
                fullWidth
                inputProps={{ autoComplete: 'new-password' }}
                name='confirm'
                label={t('account:confirmPassword')}
                placeholder={t('account:confirmPassword')}
              />
            </Grid>
          </Grid>

          <Box py={2}>
            <Stack alignItems='flex-end'>
              <LoadingButton variant='contained' type={'submit'} loading={isLoading}>
                {t('saveChange')}
              </LoadingButton>
            </Stack>
          </Box>
        </Box>
      </Form>
    </>
  );
};

export default memo(ChangePassword);
