import { Skeleton, Stack } from '@mui/material';

const SkeletonBannerItem = ({ height }: { height?: number }) => {
  return (
    <Stack gap={2}>
      {Array(4)
        .fill('')
        .map((sk, index) => (
          <Skeleton
            key={`${sk as string}-${index}`}
            variant='rounded'
            sx={{
              width: '100%',
              height: height ?? 75,
            }}
          />
        ))}
    </Stack>
  );
};

export default SkeletonBannerItem;
