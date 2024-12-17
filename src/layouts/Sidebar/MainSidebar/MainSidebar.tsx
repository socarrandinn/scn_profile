import { memo } from 'react';
import { MainLogo } from 'components/Logo/MainLogo';
import { RootMenuContent } from './styled';
import RootMenu from './RootMenu/RootMenu';
import { ROOT_MENU } from 'settings/main-menu/root-menu';
import { DrawerSidebar } from './DrawerSidebar/DrawerSidebar';
import MenuSection from './MenuSection/MenuSection';

const MainSidebar = () => {
  return (
    <DrawerSidebar
      rootMenu={
        <RootMenuContent>
          <MainLogo />
          <RootMenu rootMenu={ROOT_MENU} />
        </RootMenuContent>
      }
    >
      <MenuSection />
    </DrawerSidebar>
  );
};

export default memo(MainSidebar);
