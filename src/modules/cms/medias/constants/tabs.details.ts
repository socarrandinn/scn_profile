import { TabRouteType } from '@dfl/react-security';

export const mediasTabs: TabRouteType[] = [
  {
    path: '/cms/medias/upload',
    to: '/upload',
    label: 'media:tabs.upload',
    translate: true,
  },
  {
    path: '/cms/medias/store',
    to: '/store',
    label: 'media:tabs.store',
    translate: true,
  },
];
