import { PageLayout } from 'layouts/index';
import React, { Suspense } from 'react';
import { ClientDetailsProvider } from 'modules/crm/clients/context/ClientDetailsContext';
import { ClientTabsContent } from 'modules/crm/clients/components/ClientTabsContent';
import { ClientHeaderDetails } from 'modules/crm/clients/components/ClientHeaderDetails';

const ClientDetailsContainer = () => {
  return (
    <ClientDetailsProvider>
      <ClientHeaderDetails />
      <PageLayout>
        <Suspense>
          <ClientTabsContent />
        </Suspense>
      </PageLayout>
    </ClientDetailsProvider>
  );
};

export default ClientDetailsContainer;
