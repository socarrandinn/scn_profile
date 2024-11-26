import { SidebarSection } from '@dfl/mui-admin-layout';
import { LongText, useMenu } from '@dfl/mui-react-common';
import { Stack } from '@mui/material';
import { memo } from 'react';
import { useLocation } from 'react-router';
import { useMenuContext } from 'settings/main-menu/context/useMenuContext';
import { MenuContent, MenuTitule } from '../styled';
import { useTranslation } from 'react-i18next';

const MenuSection = () => {
  const { t } = useTranslation('menu');
  const { pathname } = useLocation();
  const root = useMenuContext((state) => state.getRootMenu(pathname));
  const section = useMenuContext((state) => state.getMenuSection(pathname));
  const sections = useMenu(section);

  return (
    <Stack sx={{ flexGrow: 1, height: '100vh', alignItems: 'start' }}>
      <MenuTitule>
        <LongText text={t(root?.title)} lineClamp={2} />
      </MenuTitule>
      <MenuContent className={'cursor-pointer dfl-sidebar-menu'}>
        {sections.map((section, index) => (
          <SidebarSection
            key={`${section.title}-${root.menuType}-${index}`}
            path={pathname}
            sx={{
              mt: 2,
              '& + &': {
                mt: 2,
              },
            }}
            {...section}
          />
        ))}
      </MenuContent>
    </Stack>
  );
};

export default memo(MenuSection);
