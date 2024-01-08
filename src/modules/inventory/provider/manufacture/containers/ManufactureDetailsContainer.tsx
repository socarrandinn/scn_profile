import { memo } from 'react';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { ManufactureDetailProvider } from 'modules/inventory/provider/manufacture/context/ManufactureDetail';
import ManufactureSummary from 'modules/inventory/provider/manufacture/components/ManufactureSummary/ManufactureSummary';
import ManufactureDetailContent from 'modules/inventory/provider/manufacture/components/ManufactureDetailContent/ManufactureDetailContent';
import { ProviderManufactureHeaderDetails } from '../components/ProviderManufactureHeaderDetails';
const ManufactureDetailsContainer = () => (
  <ManufactureDetailProvider>
    <ProviderManufactureHeaderDetails />
    <DetailLayout marginTop={{xs:2, md:3}}>
      <DetailSummary>
        <ManufactureSummary />
      </DetailSummary>
      <DetailContent ghost sx={{ '& .MuiBox-root': { paddingTop: 0 } }}>
        <ManufactureDetailContent />
      </DetailContent>
    </DetailLayout>
  </ManufactureDetailProvider>
);

export default memo(ManufactureDetailsContainer);
