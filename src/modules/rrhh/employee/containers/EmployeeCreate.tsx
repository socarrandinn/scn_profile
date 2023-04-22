import { memo, useCallback } from 'react';
import useEmployeeCreateForm from 'modules/rrhh/employee/hooks/useEmployeeCreateForm';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { useCreateEmployee } from 'modules/rrhh/employee/contexts/CreateEmployeeContext';
import { PageHeader } from 'components/libs/PageHeader';
import { useTranslation } from 'react-i18next';
import { CenterPageLayout } from 'layouts/index';
import { PaperTabView } from 'modules/common/components/TabsWithSections/PaperTabView';
import { Form, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import GeneralInfoForm from 'modules/rrhh/employee/containers/EmploySections/GeneralInfoForm';
import { Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ContactsInfoForm from 'modules/rrhh/employee/containers/EmploySections/ContactsInfoForm';
import AddressInfoForm from 'modules/rrhh/employee/containers/EmploySections/AddressInfoForm';
import JobInfoForm from 'modules/rrhh/employee/containers/EmploySections/JobInfoForm';
import CompensationInfoForm from 'modules/rrhh/employee/containers/EmploySections/CompensationInfoForm';

const mt = {
  xs: 2,
  md: 2,
  xl: 4,
};

const EmployeeCreate = () => {
  const { t } = useTranslation('employee');
  const { initValue, reset } = useCreateEmployee();
  const { control, onSubmit, isLoading, error, watch } = useEmployeeCreateForm(reset, initValue);
  const navigate = useNavigate();

  const handleCancel = useCallback(() => {
    reset();
    navigate('/rrhh/employees');
  }, [reset, navigate]);

  return (
    <CenterPageLayout maxWidth={1230}>
      <HandlerError error={error} />
      <Form
        onSubmit={onSubmit}
        control={control}
        isLoading={isLoading}
        size={'large'}
        id={'employee-form'}
        watch={watch}
      >
        <PageHeader title={t('create')}>
          <Stack direction={'row'} spacing={2}>
            <LoadingButton variant={'contained'} loading={isLoading} type={'submit'} form='employee-form'>
              {t('common:save')}
            </LoadingButton>
            <Button variant={'outlined'} disabled={isLoading} onClick={handleCancel}>
              {' '}
              {t('common:cancel')}
            </Button>
          </Stack>
        </PageHeader>
        <DetailLayout mt={mt} mb={4}>
          <DetailContent ghost sx={{ order: { xs: 2, md: 1 } }}>
            <PaperTabView nm>
              <GeneralInfoForm />
            </PaperTabView>
            <PaperTabView>
              <AddressInfoForm />
            </PaperTabView>
            <PaperTabView>
              <ContactsInfoForm />
            </PaperTabView>
          </DetailContent>
          <DetailSummary ghost width={{ md: 320, lg: 320, xl: 400 }} sx={{ order: { xs: 1, md: 2 } }}>
            <PaperTabView nm>
              <JobInfoForm />
            </PaperTabView>
            <PaperTabView>
              <CompensationInfoForm />
            </PaperTabView>
          </DetailSummary>
        </DetailLayout>
      </Form>
    </CenterPageLayout>
  );
};

export default memo(EmployeeCreate);
