import { memo } from 'react';
import SupplierCell from './SupplierCell';
import { useFindOneProducts } from '../../hooks/useFindOneProducts';
import { Skeleton } from '@mui/material';

const SupplierContainerCell = ({ providerId }: { providerId: string }) => {
  const { data, isLoading } = useFindOneProducts(providerId);

  if (isLoading) return <Skeleton variant='text' sx={{ maxWidth: 150, width: '100%' }} />;
  if (!data) return <>{providerId}</>;

  return <SupplierCell ProdProductId={data?._id as string} name={data?.name} avatar={data?.avatar} />;
};

export default memo(SupplierContainerCell);
