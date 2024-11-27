import { PageLayout } from 'layouts/index';
import { Suspense } from 'react';
import { ClientDetailsProvider } from 'modules/crm/clients/context/ClientDetailsContext';
import { ClientTabsContent } from 'modules/crm/clients/components/ClientTabsContent';
import { ClientHeaderDetails } from 'modules/crm/clients/components/ClientHeaderDetails';

const ClientDetailsContainer = () => {
  return (
    <PageLayout>
      <ClientDetailsProvider>
        <ClientHeaderDetails />
        <PageLayout>
          <Suspense>
            <ClientTabsContent />
          </Suspense>
        </PageLayout>
      </ClientDetailsProvider>
    </PageLayout>
  );
};

export default ClientDetailsContainer;
