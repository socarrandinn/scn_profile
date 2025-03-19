import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/sales/settings/bank/routes';

const BankModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/sales/settings/banks'} memory />;
};

export default BankModule;
