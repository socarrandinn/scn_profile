import { IMenuItem } from '@dfl/mui-react-common';
import { Inventory } from '@mui/icons-material';
import { memo } from 'react';
import { RootMenuItem } from '../styled';
import { ROOT_MENU_ENUM } from 'settings/main-menu/menus.enum';
import { useLocation } from 'react-router';
import { useMenuContext } from 'settings/main-menu/context/useMenuContext';

type RootMenuItemProps = {
  item: Omit<IMenuItem, 'items'> & { menuType: ROOT_MENU_ENUM };
};

const RootMenuItemContent = ({ item }: RootMenuItemProps) => {
  const { pathname } = useLocation();
  const menuKey = useMenuContext((state) => state.getMenuKey(pathname));
  const isActive = item.menuType === ROOT_MENU_ENUM[menuKey as keyof typeof ROOT_MENU_ENUM];

  return (
    <RootMenuItem className={() => (isActive ? 'active' : '')} to={item.path}>
      {item?.icon ? item.icon : <Inventory />}
    </RootMenuItem>
  );
};

export default memo(RootMenuItemContent);
