import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { TableProvider, FilterViewProvider } from '@dfl/mui-admin-layout';
import EmployeeListContainer from 'modules/store/employee/management/containers/EmployeeListContainer';
import { employeeFilters } from 'modules/store/employee/management/constants/employee.filters';
import { productViewTabs } from 'modules/store/employee/management/constants';

const EmployeeList = () => {
  const { t } = useTranslation('product');

  return (
    <PagePaperLayout title={t('list')}>
      <TableProvider id={'product'} filters={employeeFilters}>
        <FilterViewProvider views={productViewTabs}>
          <EmployeeListContainer />
        </FilterViewProvider>
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(EmployeeList);
