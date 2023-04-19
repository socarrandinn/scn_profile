import { Box, Grid, Stack, Typography } from '@mui/material';
import { memo } from 'react';
import useUserUpdateForm from 'modules/security/users/hooks/useUserUpdateForm';
import { Form, FormTextField, HandlerError, LoadingButton, SkeletonForm } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { ACCOUNT_ERRORS } from 'modules/security/users/constants/account.errors';
import { useUserDetail } from 'modules/account/contexts/UserDetail';
import { PermissionCheck, useSecurity } from '@dfl/react-security';
import { FormPhoneInput } from 'components/libs/PhoneInput';

const UserGeneralInfo = () => {
  const { user, isLoading: isLoadingUser } = useUserDetail();
  const { hasPermission } = useSecurity();
  const { t } = useTranslation(['common', 'account']);
  const { control, onSubmit, isLoading, error } = useUserUpdateForm(user);

  if (isLoadingUser) {
    return <SkeletonForm numberItemsToShow={4} itemHeight={15} />;
  }

  return (
    <>
      <Typography variant={'h3'} mb={3}>
        {t('account:tabs.general')}
      </Typography>
      <HandlerError error={error} errors={ACCOUNT_ERRORS} />
      <Form onSubmit={onSubmit} isLoading={isLoading} control={control} readOnly={!hasPermission('USER_ADMIN')}>
        <Box>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={12} md={6}>
              <FormTextField fullWidth name='firstName' label={t('common:firstName')} placeholder='Value' />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormTextField fullWidth name='lastName' label={t('common:lastName')} placeholder='Value' />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormPhoneInput fullWidth name='phone' label={t('common:phone')} placeholder='Value' />
            </Grid>
            <Grid item xs={12}>
              <FormTextField fullWidth name='email' label={t('common:email')} placeholder='Value' />
            </Grid>
          </Grid>
          <PermissionCheck permissions={'USER_ADMIN'}>
            <Box py={2}>
              <Stack alignItems='flex-end'>
                <LoadingButton variant='contained' type={'submit'} loading={isLoading}>
                  {t('common:saveChange')}
                </LoadingButton>
              </Stack>
            </Box>
          </PermissionCheck>
        </Box>
      </Form>
    </>
  );
};

export default memo(UserGeneralInfo);
