import { IMenuItem } from '@dfl/mui-react-common';

type IMenuItemPage = Omit<IMenuItem, 'icon'> & {
  description?: string;
  icon?: any;
  color: string
};

export default IMenuItemPage;
