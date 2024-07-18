import { RouteLoader } from '@dfl/react-security';
import routes from './routes';

const CouponOrderModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/sales/offers/settings/coupons'} memory />;
};

export default CouponOrderModule;
