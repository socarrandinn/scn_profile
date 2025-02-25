import { Box, Grid } from '@mui/material';
import { IMedia } from 'modules/cms/medias/interfaces/IMedia';
import { memo } from 'react';
import MediaItem from '../MediaItem/MediaItem';
import { ChildrenProps, NotSearchResult } from '@dfl/mui-react-common';
import MediaListSkeleton from './MediaListSkeleton';
type Props = {
  medias: IMedia[];
  isLoading: boolean;
  error: any;
};

const ContentResult = ({ children }: ChildrenProps) => (
  <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }}>{children}</Box>
);

const MediaList = ({ medias, error, isLoading }: Props) => {
  if (error || isLoading) {
    return (
      <ContentResult>
        <MediaListSkeleton />
      </ContentResult>
    );
  }

  if (medias.length === 0) {
    return (
      <ContentResult>
        <NotSearchResult />
      </ContentResult>
    );
  }

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
