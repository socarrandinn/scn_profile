import { useLocation } from 'react-router';
import { useMenuContext } from './useMenuContext';
import { useMemo } from 'react';

export const useMenuHome = () => {
  const { pathname } = useLocation();
  const root = useMenuContext().getRootMenu(pathname);
  const isHome = useMemo(() => root?.menuType === '/home', [root?.menuType]);
  const drawerWidth = useMenuContext().getDrawerWidth(isHome ?? false);
  const isOpen = useMenuContext();

  const open = useMemo(() => (isHome ? false : isOpen), [isOpen, isHome]);

  return {
    isHome,
    drawerWidth,
    open,
  };
};
