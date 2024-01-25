import { memo } from 'react';
import { DetailLayout } from '@dfl/mui-form-layout';
import { ManufactureDetailProvider } from 'modules/inventory/provider/manufacture/context/ManufactureDetail';
import { ProviderManufactureHeaderDetails } from '../components/ProviderManufactureHeaderDetails';
import ManufactureGeneralDetails from '../components/ManufactureGeneralDetails/ManufactureGeneralDetails';

const ManufactureDetailsContainer = () => (
  <ManufactureDetailProvider>
    <ProviderManufactureHeaderDetails />
    <ManufactureGeneralDetails />
    <DetailLayout marginTop={{ xs: 2, md: 3 }}></DetailLayout>
  </ManufactureDetailProvider>
);

export default memo(ManufactureDetailsContainer);
