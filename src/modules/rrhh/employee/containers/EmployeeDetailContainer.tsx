import { memo } from 'react';
import { EmployeeDetailProvider } from 'modules/rrhh/employee/contexts/EmployeeDetail';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { EmployeeSummary } from 'modules/rrhh/employee/components/EmployeeSummary';
import EmployeeDetailsContent from '../components/EmployeeDetailsContent/EmployeeDetailsContent';

const EmployeeDetailContainer = () => (
  <EmployeeDetailProvider>
    <DetailLayout>
      <DetailSummary>
        <EmployeeSummary />
      </DetailSummary>
      <DetailContent ghost>
        <EmployeeDetailsContent />
      </DetailContent>
    </DetailLayout>
  </EmployeeDetailProvider>
);

export default memo(EmployeeDetailContainer);
