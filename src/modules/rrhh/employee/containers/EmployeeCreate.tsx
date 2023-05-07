import { memo, useCallback } from 'react';
import useEmployeeCreateForm from 'modules/rrhh/employee/hooks/useEmployeeCreateForm';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { useCreateEmployee } from 'modules/rrhh/employee/contexts/CreateEmployeeContext';
import { PageHeader } from 'components/libs/PageHeader';
import { useTranslation } from 'react-i18next';
import { CenterPageLayout } from 'layouts/index';
import {Form, HandlerError, LoadingButton} from '@dfl/mui-react-common';
import GeneralInfoForm from 'modules/rrhh/employee/containers/EmploySections/GeneralInfoForm';
import { Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ContactsInfoForm from 'modules/rrhh/employee/containers/EmploySections/ContactsInfoForm';
import AddressInfoForm from 'modules/rrhh/employee/containers/EmploySections/AddressInfoForm';
import JobInfoForm from 'modules/rrhh/employee/containers/EmploySections/JobInfoForm';
import CompensationInfoForm from 'modules/rrhh/employee/containers/EmploySections/CompensationInfoForm';
import { FormPaper } from 'modules/common/components/FormPaper';
import { mapGetOneErrors } from 'modules/rrhh/employee/constants/errors';

const mt = {
  xs: 2,
  md: 2,
  xl: 4,
};

const EmployeeCreate = () => {
  const { t } = useTranslation('employee');
  const { initValue, reset } = useCreateEmployee();
  const navigate = useNavigate();
  const handleCancel = useCallback(() => {
    reset();
    navigate('/rrhh/employees');
  }, [reset, navigate]);

  const { control, onSubmit, isLoading, error, watch } = useEmployeeCreateForm(handleCancel, initValue);

  return (
    <CenterPageLayout maxWidth={1230}>
      <HandlerError
        error={error}
        /* @ts-ignore */
        mapErrors={mapGetOneErrors}
      />
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
            <FormPaper nm title={t('section.general.title')}>
              <GeneralInfoForm />
            </FormPaper>
            <FormPaper title={t('section.address.title')}>
              <AddressInfoForm />
            </FormPaper>
            <FormPaper title={t('section.contact.title')}>
              <ContactsInfoForm />
            </FormPaper>
          </DetailContent>
          <DetailSummary ghost width={{ md: 320, lg: 320, xl: 400 }} sx={{ order: { xs: 1, md: 2 } }}>
            <FormPaper nm title={t('section.job.title')}>
              <JobInfoForm />
            </FormPaper>
            <FormPaper title={t('section.compensation.title')}>
              <CompensationInfoForm />
            </FormPaper>
          </DetailSummary>
        </DetailLayout>
      </Form>
    </CenterPageLayout>
  );
};

export default memo(EmployeeCreate);
