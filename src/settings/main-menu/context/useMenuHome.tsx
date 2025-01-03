import { useLocation } from 'react-router';
import { useMenuContext } from './useMenuContext';
import { useMemo } from 'react';

export const useMenuHome = () => {
  const { pathname } = useLocation();
  const root = useMenuContext((state) => state.getRootMenu(pathname));
  const isHome = useMemo(() => root?.menuType === '/home', [root?.menuType]);
  const drawerWidth = useMenuContext((state) => state.getDrawerWidth(isHome ?? false));
  const isOpen = useMenuContext((state) => state.isOpen);

  const open = useMemo(() => (isHome ? false : isOpen), [isOpen, isHome]);

  return {
    isHome,
    drawerWidth,
    open,
  };
};
