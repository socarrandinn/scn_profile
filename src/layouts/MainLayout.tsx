import { memo } from 'react';
import { useToggle } from '@dfl/hook-utils';
import { ChildrenProps } from '@dfl/mui-react-common';
import Navbar from 'layouts/Navbar/Navbar';
import { MainSidebar } from './Sidebar/MainSidebar';
import DrawerHiddenButton from './Sidebar/MainSidebar/DrawerSidebar/DrawerHiddenButton';
import { useDrawerMenu } from './Sidebar/MainSidebar/hooks/useRootMenu';
import { RootAdminMain } from './Sidebar/MainSidebar/RootMenu/RootAdminMain';

const MainLayout = ({ children }: ChildrenProps) => {
  const { isOpen, onOpen, onClose, onToggle } = useToggle(true);
  const { _drawerWidth, lgUp } = useDrawerMenu(isOpen);
  return (
    <div>
      <RootAdminMain pl={_drawerWidth}>{children}</RootAdminMain>
      {lgUp && <DrawerHiddenButton open={isOpen} onToggle={onToggle} left={_drawerWidth} />}
      <MainSidebar onClose={onClose} open={isOpen} onToggle={onToggle} onOpen={onOpen} />
      <Navbar onOpenSidebar={onOpen} open={isOpen} onToggle={onToggle} />
    </div>
  );
};

export default memo(MainLayout);
