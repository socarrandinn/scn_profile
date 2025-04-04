import { PageLayout } from 'layouts/index';
import { Suspense } from 'react';
import { PageDetailsProvider } from '../context/PageDetailsContext';
import { PageHeaderDetails } from '../components/PageHeaderDetails';
import { PageContent } from '../components/PageContent';

const PageDetailsContainer = () => {
  return (
    <PageLayout>
      <PageDetailsProvider>
        <PageHeaderDetails />
        <PageLayout>
          <Suspense>
            <PageContent />
          </Suspense>
        </PageLayout>
      </PageDetailsProvider>
    </PageLayout>
  );
};

export default PageDetailsContainer;
