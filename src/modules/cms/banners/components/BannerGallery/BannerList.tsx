import { memo } from 'react';
import { Grid } from '@mui/material';
import { IBanner } from '../../interfaces';
import BannerItem from './BannerItem';
type Props = {
  banners: IBanner[];
};

const BannerList = ({ banners }: Props) => {
  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={16}>
      {banners?.map((banner, index) => (
        <Grid item xs={4} md={3} lg={3} xl={2} key={index}>
          <BannerItem banner={banner} />
        </Grid>
      ))}
    </Grid>
  );
};

export default memo(BannerList);
