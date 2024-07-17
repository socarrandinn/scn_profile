import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/sales-offer/offer/routes';

const OfferOrderModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/sales/offers/settings/offer_orders'} memory />;
};

export default OfferOrderModule;
