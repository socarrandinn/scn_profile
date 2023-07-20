import { TabRouteType } from '@dfl/react-security';

export const rolesTabs: TabRouteType[] = [
    {
        path: '/security/roles/users',
        to: '/users',
        label: 'Roles',
        translate: true,
    },
    {
        path: '/security/roles/providers',
        to: '/providers',
        label: 'Roles de Proveedores',
        translate: true,
    },
  ];  