import { RouteLoader } from '@dfl/react-security';
import RRHHModule from 'modules/rrhh/job-position';

const routes = {
  JobPositionList: {
    path: '/job-positions/*',
    component: RRHHModule,
  },
};
const Module = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/rrhh/job-positions'} memory />;
};

export default Module;
