import { CircularProgress, Skeleton } from '@mui/material';

const EmptyLocationSkeleton = () => {
  return (
    <div className='flex flex-col items-center justify-center mb-5 relative gap-1'>
      <CircularProgress />
    </div>
  )
};

export default EmptyLocationSkeleton;
