import { memo } from 'react';
import { Box, Grid } from '@mui/material';
import { IBanner } from '../../interfaces';
import BannerItem from './BannerItem';
import { ChildrenProps, NotSearchResult } from '@dfl/mui-react-common';
import MediaListSkeleton from 'modules/cms/medias/components/MediaGallery/MediaList/MediaListSkeleton';
type Props = {
  banners: IBanner[];
  isLoading: boolean;
  error: any;
};
const ContentResult = ({ children }: ChildrenProps) => (
  <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }}>{children}</Box>
);

const BannerList = ({ banners, error, isLoading }: Props) => {
  if (error || isLoading) {
    return (
      <ContentResult>
        <MediaListSkeleton />
      </ContentResult>
    );
  }

  if (banners?.length === 0) {
    return (
      <ContentResult>
        <NotSearchResult />
      </ContentResult>
    );
  }
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
