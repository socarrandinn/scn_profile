import { memo } from 'react';
import useEmployeeCreateForm from 'modules/rrhh/employee/hooks/useEmployeeCreateForm';
import { EmployeeForm } from 'modules/rrhh/employee/components/EmployeeForm';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { useCreateEmployee } from 'modules/rrhh/employee/contexts/CreateEmployeeContext';
import { PageHeader } from 'components/libs/PageHeader';
import { useTranslation } from 'react-i18next';
import { CenterPageLayout } from 'layouts/index';
import { PaperTabView } from 'modules/common/components/TabsWithSections/PaperTabView';
import { Form, HandlerError } from '@dfl/mui-react-common';

const mt = {
  xs: 2,
  md: 2,
  xl: 4,
};

const EmployeeCreate = () => {
  const { t } = useTranslation('employee');
  const { initValue, reset } = useCreateEmployee();
  const { control, onSubmit, isLoading, error } = useEmployeeCreateForm(reset, initValue);

  return (
    <CenterPageLayout maxWidth={1230}>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'}>
        <PageHeader title={t('create')} />
        <DetailLayout mt={mt}>
          <DetailContent ghost sx={{ order: { xs: 2, md: 1 } }}>
            <PaperTabView firsts>
              <EmployeeForm />
            </PaperTabView>
            <PaperTabView>
              <EmployeeForm />
            </PaperTabView>
          </DetailContent>
          <DetailSummary width={{ md: 320, lg: 320, xl: 400 }} sx={{ order: { xs: 1, md: 2 } }}>
            aa
          </DetailSummary>
        </DetailLayout>
      </Form>
    </CenterPageLayout>
  );
};

export default memo(EmployeeCreate);
