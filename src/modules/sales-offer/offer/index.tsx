import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/sales-offer/offer/routes';
import ContentLoader from 'components/ContentLoader/ContentLoader';
import { Suspense } from 'react';

const OfferOrderModule = () => {
  return (
    <Suspense fallback={<ContentLoader className='min-h-[85vh]' />}>
      <RouteLoader routes={routes} notfoundRedirect={'/sales/offers/settings/offer_orders'} memory />
    </Suspense>
  );
};

export default OfferOrderModule;
