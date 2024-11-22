import { IMenuItem } from '@dfl/mui-react-common';
import { Inventory } from '@mui/icons-material';
import { memo } from 'react';
import { RootMenuItem } from '../styled';
import { useMenuContext } from 'settings/main-menu/context/useMenuContext';
import { ROOT_MENU_ENUM } from 'settings/main-menu/menus.enum';

type RootMenuItemProps = {
  item: Omit<IMenuItem, 'items'> & { menuType: ROOT_MENU_ENUM };
};

const RootMenuItemContent = ({ item }: RootMenuItemProps) => {
  const setMenu = useMenuContext((state) => state.setMenu);

  return (
    <RootMenuItem
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
