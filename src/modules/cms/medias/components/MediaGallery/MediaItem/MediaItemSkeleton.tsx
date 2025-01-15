import { Skeleton } from '@mui/material';

const MediaItemSkeleton = () => {
  return (
    <Skeleton
      variant='rounded'
      sx={{
        height: 156,
        maxHeight: 156,
        width: '100%',
      }}
    />
  );
};

export default MediaItemSkeleton;
