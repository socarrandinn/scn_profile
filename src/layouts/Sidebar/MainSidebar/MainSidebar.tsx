import { MainLogo } from 'components/Logo/MainLogo';
import { memo } from 'react';
import { MainContent } from './styled';
import { ChildrenProps } from '@dfl/mui-react-common';
import { AdminSidebar } from 'components/libs/sidebar/AdminSidebar';
import RootMenu from './RootMenu/RootMenu';
import { ROOT_MENU } from 'settings/main-menu/root-menu';

declare type AdminSidebarProps = ChildrenProps & {
  onClose: () => void;
  open: boolean;
};
const MainSidebar = (props: AdminSidebarProps) => {
  return (
    <AdminSidebar {...props}>
      <MainContent>
        <MainLogo />
        <RootMenu rootMenu={ROOT_MENU} />
      </MainContent>
    </AdminSidebar>
  );
};

export default memo(MainSidebar);
