import { memo } from 'react';
import { ManufactureDetailProvider } from 'modules/inventory/provider/manufacture/context/ManufactureDetail';
import { ProviderManufactureHeaderDetails } from '../components/ProviderManufactureHeaderDetails';
import { PageLayout } from 'layouts/index';
import ManufactureDetailContent from '../components/ManufactureDetailContent/ManufactureDetailContent';

const ManufactureDetailsContainer = () => {
  return (
    <ManufactureDetailProvider>
      <ProviderManufactureHeaderDetails />
      <PageLayout>
        <ManufactureDetailContent />
      </PageLayout>
    </ManufactureDetailProvider>
  );
};

export default memo(ManufactureDetailsContainer);
