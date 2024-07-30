import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/crm/clients/routes';
import ContentLoader from 'components/ContentLoader/ContentLoader';
import { Suspense } from 'react';

const ClientsModule = () => {
  return (
    <Suspense fallback={<ContentLoader className='min-h-[85vh]' />}>
      <RouteLoader routes={routes} notfoundRedirect={'/crm/clients'} memory />
    </Suspense>
  );
};

export default ClientsModule;
