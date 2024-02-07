import { Grid } from '@mui/material';
import { memo } from 'react';
import SettingMenuItem from './SettingMenuItem';
import { useMenu } from '@dfl/mui-react-common';
import IMenuItemPage from 'components/libs/SettingMenuContent/IMenuItemPage';

const SettingMenuContent = ({ menu, translation }: { menu: IMenuItemPage[]; translation: string }) => {
  const menuElement = useMenu([{ items: menu, title: 'not_used_title' }], translation);
  const items: any = menuElement?.[0]?.items || [];

  return (
    <Grid container spacing={{ xs: 2, md: 4 }} py={2}>
      {items?.map((m: any) => (
        <SettingMenuItem key={m.title} {...m} translation={translation} />
      ))}
    </Grid>
  );
};

export default memo(SettingMenuContent);
