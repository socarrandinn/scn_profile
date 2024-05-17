import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/cms/seo/robot-txt/routes';

const RobotTxtModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/cms/seo/robot-txt'} memory />;
};

export default RobotTxtModule;
