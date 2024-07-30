import { RouteLoader } from '@dfl/react-security';
import routes from './routes';
import ContentLoader from 'components/ContentLoader/ContentLoader';
import { Suspense } from 'react';

const ReviewsModule = () => {
  return (
    <Suspense fallback={<ContentLoader className='min-h-[85vh]' />}>
      <RouteLoader routes={routes} notfoundRedirect={'/crm/reviews'} memory />
    </Suspense>
  );
};

export default ReviewsModule;
