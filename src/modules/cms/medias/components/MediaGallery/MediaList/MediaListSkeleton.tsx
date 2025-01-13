import { Grid } from '@mui/material';
import MediaItemSkeleton from '../MediaItem/MediaItemSkeleton';

const MediaListSkeleton = () => {
  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={16}>
      {Array(16)
        .fill('')
        .map((_, index) => (
          <Grid item xs={4} md={2} key={index}>
            <MediaItemSkeleton />
          </Grid>
        ))}
    </Grid>
  );
};

export default MediaListSkeleton;
