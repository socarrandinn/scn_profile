import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import EmployeeListContainer from 'modules/rrhh/employee/management/containers/EmployeeListContainer';
import { employeeFilters } from 'modules/rrhh/employee/management/constants/employee.filters';

const EmployeeList = () => {
  const { t } = useTranslation('employee');

  return (
    <PagePaperLayout title={t('employeeList')}>
      <TableProvider id={'employees'} filters={employeeFilters}>
        <EmployeeListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(EmployeeList);
