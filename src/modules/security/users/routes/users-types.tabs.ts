import { TabRouteType } from '@dfl/react-security';

export const userTypesTabs: TabRouteType[] = [
  {
    path: '/all',
    to: '/all',
    label: 'users:all',
    translate: true,
  },
  {
    path: '/active',
    to: '/active',
    label: 'users:active',
    translate: true,
  },
  {
    path: '/unverify',
    to: '/unverify',
    label: 'users:unverify',
    translate: true,
  },
  {
    path: '/lock',
    to: '/lock',
    label: 'users:lock',
    translate: true,
  },
  {
    path: '/invitation',
    to: '/invitation',
    label: 'users:invitation',
    translate: true,
  },
];

export const mapTabs = (path: string) =>
  userTypesTabs?.map((tab) => {
    return {
      ...tab,
      path: path + tab?.path,
    };
  });
