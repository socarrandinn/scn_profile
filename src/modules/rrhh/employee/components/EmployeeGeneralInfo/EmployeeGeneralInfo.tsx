import { Box, Grid, Stack, Typography } from '@mui/material';
import { memo } from 'react';
import { Form, FormTextField, HandlerError, LoadingButton, SkeletonForm } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { ACCOUNT_ERRORS } from 'modules/security/users/constants/account.errors';
import { useEmployeeDetail } from 'modules/rrhh/employee/contexts/EmployeeDetail';
import { PermissionCheck, useSecurity } from '@dfl/react-security';
import { FormPhoneInput } from 'components/libs/PhoneInput';
import useEmployeeUpdateForm from 'modules/rrhh/employee/hooks/useEmployeeUpdateForm';

const EmployeeGeneralInfo = () => {
  const { employee, isLoading: isLoadingUser } = useEmployeeDetail();
  const { hasPermission } = useSecurity();
  const { t } = useTranslation(['common', 'account']);
  const { control, onSubmit, isLoading, error } = useEmployeeUpdateForm(employee);

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

export default memo(EmployeeGeneralInfo);
