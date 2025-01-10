import { IMenu } from '@dfl/mui-react-common';
import { AudiLogIcon, RoleIcon, UserIcon } from 'modules/security/common/components/icons';
import { ProviderUserIcon } from 'modules/security/common/components/icons/ProviderUserIcon';

export const SECURITY_MENU: Array<IMenu & { modulePath?: string, items: any[] }> = [
  {
    title: 'main_menu.admin.section.security.title',
    permissions: ['ADMIN'],
    prefix: '/security',
    atLessOne: true,
    items: [
      {
        title: 'main_menu.admin.section.security.users',
        path: '/security/system-users/all',
        modulePath: '/security/system-users',
        icon: <UserIcon fontSize='small' />,
        permissions: ['ADMIN'],
        partialMatch: true,
      },
      {
        title: 'main_menu.admin.section.security.usersProviders',
        path: '/security/providers-users/all',
        modulePath: '/security/providers-users',
        icon: <ProviderUserIcon fontSize='small' />,
        permissions: ['ADMIN'],
        partialMatch: true,
      },
      {
        title: 'main_menu.admin.section.security.roles',
        path: '/security/roles',
        partialMatch: true,
        icon: <RoleIcon fontSize='small' />,
        permissions: ['ADMIN'],
      },
      {
        title: 'main_menu.admin.section.security.auditLogs',
        path: '/security/audit-logs',
        partialMatch: true,
        icon: <AudiLogIcon fontSize='small' />,
        permissions: ['ADMIN'],
      },
    ],
  },
];
