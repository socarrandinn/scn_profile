import { memo } from 'react';
import { useFindMedias } from '../../hooks/useFindMedias';
import MediaListSkeleton from './MediaList/MediaListSkeleton';
import { ChildrenProps, NotSearchResult } from '@dfl/mui-react-common';
import { TableProvider, useTablePagination } from '@dfl/mui-admin-layout';
import MediaToolbar from './MediaToolbar/MediaToolbar';
import { mediaFilters } from '../../constants/medias.filters';
import { Box, Stack } from '@mui/material';
import MediaList from './MediaList/MediaList';
import { CustomPaginate } from 'components/libs/CoustomPaginate';

const ContentResult = ({ children }: ChildrenProps) => (
  <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }} mt={4}>
    {children}
  </Box>
);
const MediaGallery = () => {
  const { data, isLoading, error } = useFindMedias();
  const { onPageChange, onRowsPerPageChange, page, rowsPerPage } = useTablePagination();
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

  return (
    <Stack>
      <MediaList medias={data?.data} />
      <CustomPaginate
        {...{
          total: data?.total || 0,
          isLoading: isLoading || false,
          rowsPerPage,
          page,
          onPageChange,
          onRowsPerPageChange,
          rowsPerPageOptions: [3, 5, 10],
        }}
      />
    </Stack>
  );
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
