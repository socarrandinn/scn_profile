import { RouteConfig } from '@dfl/react-security';
import PageGeneralContainer from '../containers/PageGeneralContainer';

const pageDetailsRoutes: RouteConfig = {
  general: {
    path: '/general',
    component: PageGeneralContainer,
  },
};

export default pageDetailsRoutes;
