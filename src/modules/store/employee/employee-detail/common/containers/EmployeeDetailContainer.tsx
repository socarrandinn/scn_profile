import { memo } from 'react';
import { EmployeeDetailProvider } from 'modules/store/employee/employee-detail/common/context/EmployeeDetail';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { EmployeeSummary } from 'modules/store/employee/employee-detail/common/components/EmployeeSummary';
import { EmployeeDetailsContent } from 'modules/store/employee/employee-detail/common/components/EmployeeDetailsContent';
import BannerDetail from 'modules/store/employee/employee-detail/common/components/BannerDetail/BannerDetail';

const EmployeeDetailContainer = () => (
    <EmployeeDetailProvider>
        <BannerDetail />
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
