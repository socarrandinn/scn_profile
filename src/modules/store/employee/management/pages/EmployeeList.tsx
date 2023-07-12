import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import EmployeeListContainer from 'modules/store/employee/management/containers/EmployeeListContainer';
import { employeeFilters } from 'modules/store/employee/management/constants/employee.filters';

const EmployeeList = () => {
  const { t } = useTranslation('product');

  return (
    <PagePaperLayout title={t('list')}>
      <TableProvider id={'product'} filters={employeeFilters}>
        <EmployeeListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(EmployeeList);
