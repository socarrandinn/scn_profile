import { create } from 'zustand';
import { ROOT_MENU_ENUM } from '../menus.enum';
import { IMenu, IMenuItem } from '@dfl/mui-react-common';
import { ROOT_MENU } from '../root-menu';
import { createJSONStorage, persist } from 'zustand/middleware';
import { SECTION_MENUS } from '../section-menu';

type MenuProps = IMenuItem & {
  menuType: ROOT_MENU_ENUM;
};

interface State {
  menu: MenuProps;
  setMenu: (rootMenu: ROOT_MENU_ENUM) => void;
  getMenuSection: () => IMenu;
}

export const useMenuContext = create(
  persist<State>(
    (set, get) => ({
      menu: ROOT_MENU?.find((item) => item.menuType === ROOT_MENU_ENUM.HOME) as MenuProps,
      setMenu: (menu: ROOT_MENU_ENUM) => {
        const _menu = ROOT_MENU?.find((item) => item.menuType === menu) as MenuProps;
        set((state) => ({ ...state, menu: _menu }));
      },
      getMenuSection: () => {
        const { menu } = get();
        return SECTION_MENUS[menu.menuType];
      },
    }),
    {
      name: 'root-menu',
      storage: createJSONStorage(() => localStorage),
      // @ts-ignore
      partialize: (state) => ({ menu: state.menu }),
    },
  ),
);
