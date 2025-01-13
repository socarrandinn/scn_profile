import { memo } from 'react';
import { useFindMedias } from '../../hooks/useFindMedias';
import MediaListSkeleton from './MediaList/MediaListSkeleton';
import { ChildrenProps, NotSearchResult } from '@dfl/mui-react-common';
import { TableProvider } from '@dfl/mui-admin-layout';
import MediaToolbar from './MediaToolbar/MediaToolbar';
import { mediaFilters } from '../../constants/medias.filters';
import { Box } from '@mui/material';
import MediaList from './MediaList/MediaList';

const ContentResult = ({ children }: ChildrenProps) => (
  <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }} mt={4}>
    {children}
  </Box>
);
const MediaGallery = () => {
  const { data, isLoading, error } = useFindMedias();
  if (isLoading) return <MediaListSkeleton />;
  if (error) {
    return (
      <ContentResult>
        <MediaListSkeleton />
      </ContentResult>
    );
  }

  if (data?.data?.length === 0) {
    return (
      <ContentResult>
        <NotSearchResult />
      </ContentResult>
    );
  }

  return <MediaList medias={data?.data} />;
};

const MediaGalleryContainer = () => {
  return (
    <TableProvider id={'medias'} filters={mediaFilters}>
      <MediaToolbar />
      <MediaGallery />
    </TableProvider>
  );
};
export default memo(MediaGalleryContainer);
