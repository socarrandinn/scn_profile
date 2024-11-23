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
  const menu = useMenuContext((state) => state.menu);
  const section = useMenuContext((state) => state.getMenuSection());
  const sections = useMenu([section]);
  const { pathname } = useLocation();
  return (
    <Stack sx={{ flexGrow: 1, height: '100vh', alignItems: 'start' }}>
      <MenuTitule>
        <LongText sx={{}} text={t(menu?.title)} lineClamp={2} />
      </MenuTitule>
      <MenuContent className={'cursor-pointer dfl-sidebar-menu'}>
        {sections.map((section) => (
          <SidebarSection
            key={section.title}
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
