import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/crm/settings/disallowed-word/routes';
import ContentLoader from 'components/ContentLoader/ContentLoader';
import { Suspense } from 'react';

const DisallowedWordModule = () => {
  return (
    <Suspense fallback={<ContentLoader className='min-h-[85vh]' />}>
      <RouteLoader routes={routes} notfoundRedirect={'/crm/settings/disallowed-words'} memory />
    </Suspense>
  );
};

export default DisallowedWordModule;
