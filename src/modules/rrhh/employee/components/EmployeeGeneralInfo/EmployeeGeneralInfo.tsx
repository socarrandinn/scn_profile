import { Box, Stack } from '@mui/material';
import { memo } from 'react';
import { Form, HandlerError, LoadingButton, SkeletonForm } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { ACCOUNT_ERRORS } from 'modules/security/users/constants/account.errors';
import { useEmployeeDetail } from 'modules/rrhh/employee/contexts/EmployeeDetail';
import { PermissionCheck, useSecurity } from '@dfl/react-security';
import useEmployeeUpdateForm from 'modules/rrhh/employee/hooks/useEmployeeUpdateForm';
import GeneralInfoForm from 'modules/rrhh/employee/containers/EmploySections/GeneralInfoForm';
import AddressInfoForm from '../../containers/EmploySections/AddressInfoForm';
import ContactsInfoForm from '../../containers/EmploySections/ContactsInfoForm';
import { FormPaper } from 'modules/common/components/FormPaper';
import { DetailContent, DetailLayout } from '@dfl/mui-form-layout';

const EmployeeGeneralInfo = () => {
  const { employee, isLoading: isLoadingEmployee } = useEmployeeDetail();
  const { hasPermission } = useSecurity();
  const { t } = useTranslation('employee');
  const { control, onSubmit, isLoading, error } = useEmployeeUpdateForm(employee);

  if (isLoadingEmployee) {
    return <SkeletonForm numberItemsToShow={4} itemHeight={15} />;
  }

  return (
    <>
      <HandlerError error={error} errors={ACCOUNT_ERRORS} />
      <Form onSubmit={onSubmit} isLoading={isLoading} control={control} readOnly={!hasPermission('USER_ADMIN')}>

        <DetailLayout mb={4}>
          <DetailContent ghost sx={{ order: { xs: 2, md: 1 } }}>

            <FormPaper title={t('section.general.title')} sx={{ boxShadow: 'none', padding: '0 1rem 1rem 1rem' }}>
              <GeneralInfoForm />
            </FormPaper>
            <FormPaper title={t('section.address.title')} sx={{ boxShadow: 'none', padding: '1rem' }}>
              <AddressInfoForm/>
            </FormPaper>
            <FormPaper title={t('section.contact.title')} sx={{ boxShadow: 'none', padding: '1rem' }}>
              <ContactsInfoForm/>
            </FormPaper>

            <PermissionCheck permissions={'USER_ADMIN'}>
              <Box py={2}>
                <Stack alignItems='flex-end'>
                  <LoadingButton variant='contained' type={'submit'} loading={isLoading}>
                    {t('common:saveChange')}
                  </LoadingButton>
                </Stack>
              </Box>
            </PermissionCheck>

          </DetailContent>
        </DetailLayout>

      </Form>
    </>
  );
};

export default memo(EmployeeGeneralInfo);
