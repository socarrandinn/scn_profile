import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/cms/seo/static-site-map-item/routes';

const StaticSiteMapItemModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/cms/seo/static_site_map_items'} memory />;
};

export default StaticSiteMapItemModule;
