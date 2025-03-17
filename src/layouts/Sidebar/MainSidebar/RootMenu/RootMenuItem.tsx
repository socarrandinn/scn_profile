import { IMenuItem } from '@dfl/mui-react-common';
import { Inventory } from '@mui/icons-material';
import { memo, useMemo } from 'react';
import { RootMenuItem } from '../styled';
import { ROOT_MENU_ENUM } from 'settings/main-menu/menus.enum';
import { useLocation } from 'react-router';
import { useMenuContext } from 'settings/main-menu/context/useMenuContext';
import { Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';

type RootMenuItemProps = {
  item: Omit<IMenuItem, 'items'> & { menuType: ROOT_MENU_ENUM; stepTour?: string };
};

const RootMenuItemContent = ({ item }: RootMenuItemProps) => {
  const { t } = useTranslation('menu');
  const { onOpen } = useMenuContext();
  const { pathname } = useLocation();
  const menuKey = useMenuContext().getMenuKey(pathname);
  const isActive = useMemo(() => {
    const value = ROOT_MENU_ENUM[menuKey as keyof typeof ROOT_MENU_ENUM];
    return item.path.startsWith(value) && item.menuType === value;
  }, [item.menuType, item.path, menuKey]);

  return (
    <Tooltip title={t(item?.title)} placement='right'>
      <RootMenuItem
        data-tour={item.stepTour ? `step-sidebar-${item.stepTour}` : undefined}
        onClick={onOpen}
        className={isActive ? 'active' : ''}
        to={item.path}
      >
        {item?.icon ? item.icon : <Inventory />}
      </RootMenuItem>
    </Tooltip>
  );
};

export default memo(RootMenuItemContent);
