import { create } from 'zustand';
import { ROOT_MENU_ENUM } from '../menus.enum';

interface State {
  menu: ROOT_MENU_ENUM;
  setMenu: (rootMenu: ROOT_MENU_ENUM) => void;
}

export const useMenuContext = create<State>((set, get) => ({
  menu: ROOT_MENU_ENUM.HOME,
  setMenu: (menu: ROOT_MENU_ENUM) => {
    set((state) => ({ ...state, menu }));
  },
}));
