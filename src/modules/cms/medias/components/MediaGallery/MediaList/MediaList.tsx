import { Grid } from '@mui/material';
import { IMedia } from 'modules/cms/medias/interfaces/IMedia';
import { memo } from 'react';
import MediaItem from '../MediaItem/MediaItem';
type Props = {
  medias: IMedia[];
};

const MediaList = ({ medias }: Props) => {
  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={16}>
      {medias?.map((media, index) => (
        <Grid item xs={4} md={3} lg={3} xl={2} key={index}>
          <MediaItem media={media} />
        </Grid>
      ))}
    </Grid>
  );
};

export default memo(MediaList);
