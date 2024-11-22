import { memo } from 'react';
import { useToggle } from '@dfl/hook-utils';
import { ChildrenProps } from '@dfl/mui-react-common';
import { AdminMain } from '@dfl/mui-admin-layout';
// import Sidebar from 'layouts/Sidebar/Sidebar';
import Navbar from 'layouts/Navbar/Navbar';
import { MainSidebar } from './Sidebar/MainSidebar';
import DrawerHiddenButton from './Sidebar/MainSidebar/DrawerSidebar/DrawerHiddenButton';
import { useDrawerMenu } from './Sidebar/MainSidebar/hooks/useRootMenu';

const MainLayout = ({ children }: ChildrenProps) => {
  const { isOpen, onOpen, onClose, onToggle } = useToggle(false);
  const { _drawerWidth, lgUp } = useDrawerMenu(isOpen);
  return (
    <div>
      <AdminMain>{children}</AdminMain>
      {lgUp && <DrawerHiddenButton open={isOpen} onToggle={onToggle} left={_drawerWidth} />}
      <MainSidebar onClose={onClose} open={isOpen} onToggle={onToggle} />
      {/* <Sidebar onClose={onClose} open={isOpen} /> */}
      <Navbar onOpenSidebar={onOpen} open={isOpen} onToggle={onToggle} />
    </div>
  );
};

export default memo(MainLayout);
