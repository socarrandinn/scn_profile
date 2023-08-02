import routes from 'modules/store/product/settings/reason-for-compensation-change/routes';
import { RouteLoader } from '@dfl/react-security';

const ReasonForCompensationChangeModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/rrhh/settings/reason-for-compensation-changes'} memory />;
};

export default ReasonForCompensationChangeModule;
