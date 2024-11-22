import { IMenuItem } from '@dfl/mui-react-common';
import { Theme, useMediaQuery } from '@mui/material';
import { useMemo } from 'react';

export const useRootMenu = (menu: IMenuItem[], hasPermission: any) => {
  return menu.filter((item) => {
    const show = item?.permissions?.length ? hasPermission(item.permissions, item.atLessOne) : true;
    return show;
  });
};

export const useDrawerMenu = (open: boolean) => {
  const _drawerWidth = useMemo(() => (!open ? 50 : 280), [open]);
  const rootWidth = 50;
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'), {
    noSsr: true,
  });

  return { _drawerWidth, lgUp, rootWidth };
};
