import { create } from 'zustand';
import { ROOT_MENU_ENUM } from '../menus.enum';
import { IMenu, IMenuItem } from '@dfl/mui-react-common';
import { ROOT_MENU } from '../root-menu';
import { SECTION_MENUS } from '../section-menu';

type MenuProps = IMenuItem & {
  menuType: ROOT_MENU_ENUM;
};

interface State {
  menuType: string;
  getMenuSection: (pathName: string) => IMenu;
  getMenuKey: (pathName: string) => string;
  getRootMenu: (pathName: string) => MenuProps;
}

export const useMenuContext = create<State>((set, get) => ({
  menuType: 'HOME',
  getMenuKey: (pathName: string) => {
    const menuKey = Object.keys(ROOT_MENU_ENUM).find((key) => {
      const value = ROOT_MENU_ENUM[key as keyof typeof ROOT_MENU_ENUM];
      return pathName.startsWith(value);
    });

    return menuKey || 'HOME';
  },
  getMenuSection: (pathName: string) => {
    const { getMenuKey } = get();
    const menuKey = getMenuKey(pathName);
    return SECTION_MENUS[ROOT_MENU_ENUM[menuKey as keyof typeof ROOT_MENU_ENUM]];
  },
  getRootMenu: (pathName: string) => {
    const { getMenuKey } = get();
    const menuKey = getMenuKey(pathName);
    return ROOT_MENU?.find(
      (item) => item.menuType === ROOT_MENU_ENUM[menuKey as keyof typeof ROOT_MENU_ENUM],
    ) as MenuProps;
  },
}));
