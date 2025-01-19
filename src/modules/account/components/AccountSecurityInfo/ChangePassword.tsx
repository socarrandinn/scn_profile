import { memo, ReactNode } from 'react';
import { Box, FormHelperText, Grid, Stack, styled, Typography } from '@mui/material';
import { HandlerError, LoadingButton, Form, FormPasswordField } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import useUserPasswordForm from 'modules/security/users/hooks/useUserPasswordForm';
import { InfoOutlined } from '@mui/icons-material';
import { ACCOUNT_ERRORS } from 'modules/account/constants/account.errors';

type ChangePasswordProps = {
  lastPassword?: boolean;
  helperText?: string;
  size?: 'small' | 'medium';
  title?: ReactNode;
  className?: string;
  buttonText?: string;
  otherAction?: ReactNode;
};

export const Component = styled('div')(() => ({
  padding: 70,
  background: 'red',
}));

const ChangePassword = ({ lastPassword, title, size, otherAction, helperText, className, buttonText }: ChangePasswordProps) => {
  const { t } = useTranslation(['common', 'account']);
  const { control, onSubmit, isLoading, error } = useUserPasswordForm(lastPassword);

  return (
    <>
      {title || <Typography variant={'h3'} mb={3}>
        {t(lastPassword ? 'account:securityTab.changePassword' : 'setNewPassword')}
      </Typography>}

      <HandlerError error={error} errors={ACCOUNT_ERRORS} />

      <Form onSubmit={onSubmit} isLoading={isLoading} control={control}>
        <Box className={className}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {lastPassword && (
              <Grid item xs={12}>
                <FormPasswordField
                  size={size}
                  fullWidth
                  name='lastPassword'
                  inputProps={{ autoComplete: 'current-password' }}
                  label={t('account:password')}
                  placeholder={t('account:password')}
                />
              </Grid>
            )}
            <Grid item xs={12} md={lastPassword ? 6 : 12}>
              <FormPasswordField
                size={size}
                fullWidth
                inputProps={{ autoComplete: 'new-password' }}
                name='password'
                label={t('account:newPassword')}
                placeholder={t('account:newPassword')}
              />
            </Grid>
            <Grid item xs={12} md={lastPassword ? 6 : 12}>
              <FormPasswordField
                size={size}
                fullWidth
                inputProps={{ autoComplete: 'new-password' }}
                name='repeat_password'
                label={t('account:confirmPassword')}
                placeholder={t('account:confirmPassword')}
              />
              {helperText &&
                <FormHelperText sx={{ display: 'flex', gap: 0.5, my: 2, color: '#212322' }}>
                  <InfoOutlined color='error' fontSize='small' />
                  {helperText}
                </FormHelperText>
              }
            </Grid>
          </Grid>

          <Box py={2}>
            <Stack alignItems='flex-end' flexDirection={'row'} justifyContent={'flex-end'} gap={1}>
              {otherAction}
              <LoadingButton variant='contained' color='success' type={'submit'} loading={isLoading}>
                {buttonText || t('saveChange')}
              </LoadingButton>
            </Stack>
          </Box>
        </Box>
      </Form>
    </>
  );
};

export default memo(ChangePassword);
