import { Paper, Skeleton, Stack } from '@mui/material';

const CounterBoxSkeleton = () => {
  return (
    <Paper
      sx={{
        p: 2,
        width: '100%',
        gap: 1,
      }}
    >
      <Stack gap={1} flexDirection={'row'}>
        <Skeleton variant='rounded' sx={{ width: 24, height: 24 }} />
        <Skeleton variant='rounded' sx={{ width: '100%', maxWidth: 120, height: 24 }} />
      </Stack>
      <Skeleton variant='text' sx={{ width: 60, height: 24, mt: 1 }} />
      <Skeleton variant='text' sx={{ width: 100, height: 18 }} />
    </Paper>
  );
};

export default CounterBoxSkeleton;
