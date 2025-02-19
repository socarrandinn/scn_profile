import { Skeleton } from '@mui/material';

const EmptyLocationSkeleton = () => {
  return (
    <div className='flex flex-col items-center justify-center mb-5 relative gap-1'>
      <Skeleton variant='rounded' sx={{ width: 250, height: 250 }} />
      <Skeleton variant='rounded' width={300} height={35} sx={{ mt: 2, mb: 1 }} />
      <Skeleton variant='rounded' width={400} height={20} />
      <Skeleton variant='rounded' width={350} height={20} sx={{ mb: 1.5 }} />
      <Skeleton variant='rounded' width={200} height={40} />
    </div>
  )
};

export default EmptyLocationSkeleton;
