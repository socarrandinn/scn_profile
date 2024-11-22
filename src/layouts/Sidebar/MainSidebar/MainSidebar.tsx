import { MainLogo } from 'components/Logo/MainLogo';
import { memo } from 'react';
import { MainContent } from './styled';
import { ChildrenProps } from '@dfl/mui-react-common';
import RootMenu from './RootMenu/RootMenu';
import { ROOT_MENU } from 'settings/main-menu/root-menu';
import { DrawerSidebar } from './DrawerSidebar/DrawerSidebar';

declare type AdminSidebarProps = ChildrenProps & {
  onClose: () => void;
  onToggle: () => void;
  open: boolean;
};
const MainSidebar = (props: AdminSidebarProps) => {
  return (
    <DrawerSidebar {...props}>
      <MainContent>
        <MainLogo />
        <RootMenu rootMenu={ROOT_MENU} />
      </MainContent>
    </DrawerSidebar>
  );
};

export default memo(MainSidebar);
