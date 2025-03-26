import { IMenuItem } from '@dfl/mui-react-common';
import { Theme, useMediaQuery } from '@mui/material';

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

export const useMediaQueryMenu = () => {
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

  return { lgUp };
};
