import { RouteConfig, RouteLoader } from '@dfl/react-security';
import UsersModule from './users';
import RolesModule from './roles';
import AudiLogModule from './audit-logs';
import ContentLoader from 'components/ContentLoader/ContentLoader';
import { Suspense } from 'react';

const routes: RouteConfig = {
  Users: {
    path: '/users/*',
    exact: false,
    permissions: 'ADMIN',
    component: UsersModule,
  },
  Roles: {
    path: '/roles/*',
    exact: false,
    permissions: 'ADMIN',
    component: RolesModule,
  },

  AudiLogList: {
    path: '/audit-logs/*',
    component: AudiLogModule,
  },
};

const SecurityModule = () => {
  return (
    <Suspense fallback={<ContentLoader className='min-h-[85vh]' />}>
      <RouteLoader routes={routes} notfoundRedirect={'/users/*'} memory />
    </Suspense>
  );
};

export default SecurityModule;
