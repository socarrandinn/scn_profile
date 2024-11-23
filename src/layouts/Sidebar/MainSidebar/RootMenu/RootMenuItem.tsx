import { IMenuItem } from '@dfl/mui-react-common';
import { Inventory } from '@mui/icons-material';
import { memo, useMemo } from 'react';
import { RootMenuItem } from '../styled';
import { useMenuContext } from 'settings/main-menu/context/useMenuContext';
import { ROOT_MENU_ENUM } from 'settings/main-menu/menus.enum';

type RootMenuItemProps = {
  item: Omit<IMenuItem, 'items'> & { menuType: ROOT_MENU_ENUM };
};

const RootMenuItemContent = ({ item }: RootMenuItemProps) => {
  const menu = useMenuContext((state) => state.menu);
  const setMenu = useMenuContext((state) => state.setMenu);

  const isActive = useMemo(() => menu.path === item.path, [menu, item]);

  return (
    <RootMenuItem
      isActive={isActive}
      onClick={() => {
        setMenu(item?.menuType);
      }}
      to={item.path}
    >
      {item?.icon ? item.icon : <Inventory />}
    </RootMenuItem>
  );
};

export default memo(RootMenuItemContent);
