import { memo, Suspense } from 'react';
import { ManufactureDetailProvider } from 'modules/inventory/provider/manufacture/context/ManufactureDetail';
import { ProviderManufactureHeaderDetails } from '../components/ProviderManufactureHeaderDetails';
import { PageLayout } from 'layouts/index';
import ManufactureDetailContent from '../components/ManufactureDetailContent/ManufactureDetailContent';
import { PageLoader } from '@dfl/mui-react-common';

const ManufactureDetailsContainer = () => {
  return (
    <PageLayout>
      <ManufactureDetailProvider>
        <ProviderManufactureHeaderDetails />
        <Suspense fallback={<PageLoader size="page" />}>
          <ManufactureDetailContent />
        </Suspense>
      </ManufactureDetailProvider>
    </PageLayout>
  );
};

export default memo(ManufactureDetailsContainer);
