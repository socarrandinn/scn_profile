import { memo } from 'react';
import { IMenuItem } from '@dfl/mui-react-common';
import RootMenuItem from './RootMenuItem';
import { Stack } from '@mui/material';
import { useSecurity } from '@dfl/react-security';
import { useRootMenu } from '../hooks/useRootMenu';
import { ROOT_MENU_ENUM } from 'settings/main-menu/menus.enum';

type RootMenuProps = {
  rootMenu: Array<Omit<IMenuItem, 'children'> & { menuType: ROOT_MENU_ENUM }>;
  onOpen: () => void
};

const RootMenu = ({ rootMenu, onOpen }: RootMenuProps) => {
  const { hasPermission } = useSecurity();
  const menu = useRootMenu({ rootMenu, hasPermission });

  return (
    <Stack mt={{ xs: 1, md: 2, lg: 3 }}>
      {menu?.map((item) => (
        <RootMenuItem item={item} key={item?.title} onOpen={onOpen} />
      ))}
    </Stack>
  );
};

export default memo(RootMenu);
