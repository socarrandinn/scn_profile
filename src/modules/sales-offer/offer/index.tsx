import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/sales-offer/offer/routes';

const OfferModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/sales-offer/offers'} memory />;
};

export default OfferModule;
