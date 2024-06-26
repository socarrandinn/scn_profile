import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/crm/disallowed-word/routes';

const DisallowedWordModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/crm/disallowed-words'} memory />;
};

export default DisallowedWordModule;
