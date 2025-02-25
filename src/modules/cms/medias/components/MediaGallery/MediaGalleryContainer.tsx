import { memo } from 'react';
import { useFindMedias } from '../../hooks/useFindMedias';
import { TableProvider, useTablePagination } from '@dfl/mui-admin-layout';
import MediaToolbar from './MediaToolbar/MediaToolbar';
import { mediaFilters } from '../../constants/medias.filters';
import { Stack } from '@mui/material';
import MediaList from './MediaList/MediaList';
import { CustomPaginate } from 'components/libs/CoustomPaginate';

const MediaGallery = () => {
  const { data, isLoading, error } = useFindMedias();
  const { onPageChange, onRowsPerPageChange, page, rowsPerPage = 24 } = useTablePagination();

  return (
    <Stack gap={2}>
      <MediaToolbar />
      <MediaList medias={data?.data} isLoading={isLoading} error={error} />
      <CustomPaginate
        {...{
          total: data?.total || 0,
          isLoading: isLoading || false,
          rowsPerPage,
          page,
          onPageChange,
          onRowsPerPageChange,
          rowsPerPageOptions: [10, 16, 24, 48],
        }}
      />
    </Stack>
  );
};

const MediaGalleryContainer = () => {
  return (
    <TableProvider id={'medias'} filters={mediaFilters}>
      <MediaGallery />
    </TableProvider>
  );
};
export default memo(MediaGalleryContainer);
