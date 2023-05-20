import { Box, Stack, Typography } from '@mui/material';
import { memo } from 'react';
import { Form, HandlerError, LoadingButton, SkeletonForm } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { ACCOUNT_ERRORS } from 'modules/security/users/constants/account.errors';
import { useEmployeeDetail } from 'modules/rrhh/employee/employee-detail/common/context/EmployeeDetail';
import { PermissionCheck, useSecurity } from '@dfl/react-security';
import useEmployeePersonalUpdateForm from 'modules/rrhh/employee/employee-detail/general/hooks/useEmployeePersonalUpdateForm';
import ContactsInfoForm from 'modules/rrhh/employee/management/containers/EmploySections/ContactsInfoForm';

const EmployeeContactsInfo = () => {
  const { employee, isLoading: isLoadingEmployee } = useEmployeeDetail();
  const { hasPermission } = useSecurity();
  const { t } = useTranslation(['common', 'employee']);
  const { control, onSubmit, isLoading, error } = useEmployeePersonalUpdateForm(employee);

  if (isLoadingEmployee) {
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
          <ContactsInfoForm />
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

export default memo(EmployeeContactsInfo);
