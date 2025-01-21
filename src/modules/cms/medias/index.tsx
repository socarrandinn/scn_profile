import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/cms/medias/routes';

const MediasModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/cms/medias/list'} memory />;
};

export default MediasModule;
