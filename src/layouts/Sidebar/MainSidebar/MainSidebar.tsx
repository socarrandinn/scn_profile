import { MainLogo } from 'components/Logo/MainLogo';
import { memo } from 'react';
import { RootMenuContent } from './styled';
import { ChildrenProps } from '@dfl/mui-react-common';
import RootMenu from './RootMenu/RootMenu';
import { ROOT_MENU } from 'settings/main-menu/root-menu';
import { DrawerSidebar } from './DrawerSidebar/DrawerSidebar';
import MenuSection from './MenuSection/MenuSection';

declare type AdminSidebarProps = ChildrenProps & {
  onClose: () => void;
  onToggle: () => void;
  open: boolean;
  onOpen: () => void
};
const MainSidebar = (props: AdminSidebarProps) => {
  return (
    <DrawerSidebar
      {...props}
      rootMenu={
        <RootMenuContent>
          <MainLogo />
          <RootMenu rootMenu={ROOT_MENU} onOpen={props.onOpen} />
        </RootMenuContent>
      }
    >
      <MenuSection />
    </DrawerSidebar>
  );
};

export default memo(MainSidebar);
