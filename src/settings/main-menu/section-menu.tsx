import { ROOT_MENU_ENUM } from './menus.enum';
import { IMenu } from '@dfl/mui-react-common';
import { SECTION_REPORTS_MENU } from './section-report-menu';
import { HomeIcon } from 'modules/common/components/icons';
import { INVENTORY_MENU } from './inventory-menu';
import { SALES_MENU } from './sales-menu';
import { CRM_MENU } from './crm-menu';
import { CMS_MENU } from './cms-menu';
import { SECURITY_MENU } from './security-menu';

export const SECTION_MENUS: Record<ROOT_MENU_ENUM, IMenu[]> = {
  [ROOT_MENU_ENUM.HOME]: [
    {
      title: 'main_menu.admin.section.general.title',
      items: [
        {
          title: 'main_menu.admin.section.general.home',
          path: '/',
          icon: <HomeIcon fontSize='small' />,
        },
      ],
    },
  ],
  [ROOT_MENU_ENUM.INVENTORY]: INVENTORY_MENU,
  [ROOT_MENU_ENUM.SALES]: SALES_MENU,
  [ROOT_MENU_ENUM.CRM]: CRM_MENU,
  [ROOT_MENU_ENUM.CMS]: CMS_MENU,
  [ROOT_MENU_ENUM.REPORTS]: [
    {
      ...SECTION_REPORTS_MENU[ROOT_MENU_ENUM.INVENTORY][0],
      title: 'main_menu.admin.section.reports.inventory',
    },
    {
      ...SECTION_REPORTS_MENU[ROOT_MENU_ENUM.SALES][0],
      title: 'main_menu.admin.section.reports.sales',
    },
    {
      ...SECTION_REPORTS_MENU[ROOT_MENU_ENUM.CRM][0],
      title: 'main_menu.admin.section.reports.clients',
    },
  ],
  [ROOT_MENU_ENUM.SECURITY]: SECURITY_MENU,
};
