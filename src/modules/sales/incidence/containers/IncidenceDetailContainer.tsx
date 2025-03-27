import { memo } from 'react';
import { PageLayout } from 'layouts/index';
import { IncidenceHeaderDetails } from '../components/IncidenceHeaderDetails';
import { IncidenceDetailsContent } from '../components/IncidenceDetailsContent';
import { IncidenceDetailProvider } from '../context/IncidenceDetailContext';

const IncidenceDetailContainer = () => (
  <IncidenceDetailProvider>
    <IncidenceHeaderDetails />
    <PageLayout>
      <IncidenceDetailsContent />
    </PageLayout>
  </IncidenceDetailProvider>
);

export default memo(IncidenceDetailContainer);
