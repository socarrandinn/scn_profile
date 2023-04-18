import { Grid } from '@mui/material';
import { memo } from 'react'
import SettingMenuItem from './SettingMenuItem';
import { useMenu } from '@dfl/mui-react-common';
import IMenuItemPage from 'components/libs/SettingMenuContent/IMenuItemPage';

const SettingMenuContent = ({ menu }: { menu: IMenuItemPage[] }) => {
  const menuElement = useMenu([{ items: menu, title: 'not_used_title' }]);
  const items = menuElement?.[0]?.items || [];

  return (
        <Grid container spacing={{ xs: 2, md: 4 }} py={2}>
            {
                items?.map(m => <SettingMenuItem key={m.title} {...m} />)
            }
        </Grid>
  );
}

export default memo(SettingMenuContent);
