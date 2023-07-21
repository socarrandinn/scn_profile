import { TabRouteType } from '@dfl/react-security';

export const rolesTabs: TabRouteType[] = [
    {
        path: '/security/roles/system',
        to: '/system',
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