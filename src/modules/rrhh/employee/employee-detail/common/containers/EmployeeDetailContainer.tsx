import { memo } from 'react';
import { EmployeeDetailProvider } from 'modules/rrhh/employee/employee-detail/common/context/EmployeeDetail';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { EmployeeSummary } from 'modules/rrhh/employee/employee-detail/common/components/EmployeeSummary';
import { EmployeeDetailsContent } from 'modules/rrhh/employee/employee-detail/common/components/EmployeeDetailsContent';

const EmployeeDetailContainer = () => (
    <EmployeeDetailProvider>
        <DetailLayout>
            <DetailSummary>
                <EmployeeSummary/>
            </DetailSummary>
            <DetailContent ghost>
                <EmployeeDetailsContent/>
            </DetailContent>
        </DetailLayout>
    </EmployeeDetailProvider>
);

export default memo(EmployeeDetailContainer);
