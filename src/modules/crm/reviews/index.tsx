import { RouteLoader } from '@dfl/react-security';
import routes from './routes';

const ReviewsModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/crm/reviews'} memory />;
};

export default ReviewsModule;
