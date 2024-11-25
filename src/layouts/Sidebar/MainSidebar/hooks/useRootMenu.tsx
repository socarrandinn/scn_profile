import { IMenuItem } from '@dfl/mui-react-common';
import { Theme, useMediaQuery } from '@mui/material';
import { useMemo } from 'react';

type Props = {
  rootMenu: Array<IMenuItem & { menuType: any }>;
  hasPermission: any;
};

export const useRootMenu = ({ rootMenu, hasPermission }: Props) => {
  return rootMenu.filter((item) => {
    const show = item?.permissions?.length ? hasPermission(item.permissions, item.atLessOne) : true;
    return show;
  });
};

export const useDrawerMenu = (open: boolean) => {
  const _drawerWidth = useMemo(() => (!open ? 50.5 : 318), [open]);
  const rootWidth = 50;
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'), {
    noSsr: true,
  });

  return { _drawerWidth, lgUp, rootWidth };
};
