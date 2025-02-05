import { Skeleton } from '@mui/material';

const SkeletonBannerItem = ({ height }: { height?: number }) => {
  return (
    <Skeleton
      variant='rounded'
      sx={{
        width: '100%',
        height: height ?? 75,
      }}
    />
  );
};

export default SkeletonBannerItem;
