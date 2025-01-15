import {
  AccountTreeOutlined,
  CodeOutlined,
  CollectionsBookmarkOutlined,
  ScreenSearchDesktopOutlined,
  SpeakerNotesOutlined,
} from '@mui/icons-material';
import { IMenu } from '@dfl/mui-react-common';
import { TESTIMONY_PERMISSIONS } from 'modules/cms/testimony/constants';
import { COLLECTIONS_PERMISSIONS } from 'modules/cms/collections/constants';

export const CMS_MENU: IMenu[] = [
  {
    title: 'main_menu.admin.section.cms.seo',
    prefix: '/cms/seo',
    atLessOne: true,
    items: [
      {
        title: 'seo:settings:robot_txt:title',
        path: '/cms/seo/robot_txt',
        partialMatch: true,
        icon: <CodeOutlined fontSize='small' />,
      },
      {
        title: 'seo:settings:static_site_map_item:title',
        path: '/cms/seo/static_site_map_items/general',
        partialMatch: true,
        icon: <ScreenSearchDesktopOutlined fontSize='small' />,
      },
      {
        title: 'seo:settings:sitemap:title',
        path: '/cms/seo/sitemap',
        partialMatch: true,
        icon: <AccountTreeOutlined fontSize='small' />,
      },
    ],
  },
  {
    title: 'common:settings',
    prefix: '/cms',
    atLessOne: true,
    items: [
      {
        title: 'testimony:list',
        path: '/cms/testimonials',
        partialMatch: true,
        icon: <SpeakerNotesOutlined fontSize='small' />,
        permissions: [TESTIMONY_PERMISSIONS.TESTIMONY_VIEW]
      },
      {
        title: 'collection:list',
        path: '/cms/collections',
        partialMatch: true,
        icon: <CollectionsBookmarkOutlined fontSize='small' />,
        permissions: [COLLECTIONS_PERMISSIONS.COLLECTIONS_VIEW]
      },
    ],
  },
];
