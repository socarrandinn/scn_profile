import { memo } from 'react';

import { Skeleton } from '@mui/material';
import { useFindOneManufacture } from '../../hooks/useFindOneManufacture';
import ManufactureCell from './ManufactureCell';

const ManufactureContainerCell = ({ providerId }: { providerId: string }) => {
  const { data, isLoading } = useFindOneManufacture(providerId);

  if (isLoading) return <Skeleton variant='text' sx={{ maxWidth: 150, width: '100%' }} />;
  if (!data) return <>{providerId}</>;

  return <ManufactureCell manufactured={data?._id as string} name={data?.name} image={data?.avatar} />;
};

export default memo(ManufactureContainerCell);
