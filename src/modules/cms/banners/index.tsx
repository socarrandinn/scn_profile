import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/cms/banners/routes';

const BannerModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/cms/banners'} memory />;
};

export default BannerModule;
