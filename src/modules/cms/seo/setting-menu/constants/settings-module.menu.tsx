import IMenuItemPage from 'components/libs/SettingMenuContent/IMenuItemPage';
import { ROBOT_TXT, SITE_MAP, STATIC_SITE } from './offer.entities.styles';

export const offerManagementMenu: IMenuItemPage[] = [
  {
    title: 'seo:settings:robot_txt:title',
    description: 'seo:settings:robot_txt:description',
    path: '/cms/seo/robot_txt',
    icon: ROBOT_TXT.ICON,
    color: ROBOT_TXT.COLOR,
  },
  {
    title: 'seo:settings:static_site_map_item:title',
    description: 'seo:settings:static_site_map_item:description',
    path: '/cms/seo/static_site_map_item',
    icon: STATIC_SITE.ICON,
    color: STATIC_SITE.COLOR,
  },
  {
    title: 'seo:settings:sitemap:title',
    description: 'seo:settings:sitemap:description',
    path: '/cms/seo/sitemap',
    icon: SITE_MAP.ICON,
    color: SITE_MAP.COLOR,
  },
];
