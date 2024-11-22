import { IMenuItem } from '@dfl/mui-react-common';

export const useRootMenu = (menu: IMenuItem[], hasPermission: any) => {
  return menu.filter((item) => {
    const show = item?.permissions?.length ? hasPermission(item.permissions, item.atLessOne) : true;
    return show;
  });
};
