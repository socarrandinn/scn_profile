import { memo } from 'react';
import { ChildrenProps } from '@dfl/mui-react-common';
import Navbar from 'layouts/Navbar/Navbar';
import { MainSidebar } from './Sidebar/MainSidebar';
import DrawerHiddenButton from './Sidebar/MainSidebar/DrawerSidebar/DrawerHiddenButton';
import { useMediaQueryMenu } from './Sidebar/MainSidebar/hooks/useRootMenu';
import { RootAdminMain } from './Sidebar/MainSidebar/RootMenu/RootAdminMain';
import { useMenuContext } from 'settings/main-menu/context/useMenuContext';

const MainLayout = ({ children }: ChildrenProps) => {
  const { getDrawerWidth } = useMenuContext();
  const { lgUp } = useMediaQueryMenu();

  return (
    <div>
      <RootAdminMain pl={getDrawerWidth()}>{children}</RootAdminMain>
      {lgUp && <DrawerHiddenButton left={getDrawerWidth()} />}
      <MainSidebar />
      <Navbar />
    </div>
  );
};

export default memo(MainLayout);
