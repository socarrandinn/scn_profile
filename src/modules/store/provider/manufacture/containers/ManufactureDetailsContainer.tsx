import { memo } from 'react';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { ManufactureDetailProvider } from 'modules/store/provider/manufacture/context/ManufactureDetail';
import ManufactureSummary from 'modules/store/provider/manufacture/components/ManufactureSummary/ManufactureSummary';
import ManufactureDetailContent
  from 'modules/store/provider/manufacture/components/ManufactureDetailContent/ManufactureDetailContent';
const ManufactureDetailsContainer = () => (
    <ManufactureDetailProvider>
    <DetailLayout marginTop={2}>
        <DetailSummary>
            <ManufactureSummary />
        </DetailSummary>
        <DetailContent ghost>
        <ManufactureDetailContent />
        </DetailContent>
    </DetailLayout>
    </ManufactureDetailProvider>
);

export default memo(ManufactureDetailsContainer);
