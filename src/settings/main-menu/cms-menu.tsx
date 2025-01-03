import {
  AccountTreeOutlined,
  CodeOutlined,
  ScreenSearchDesktopOutlined,
} from '@mui/icons-material';
import { IMenu } from '@dfl/mui-react-common';

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
];
