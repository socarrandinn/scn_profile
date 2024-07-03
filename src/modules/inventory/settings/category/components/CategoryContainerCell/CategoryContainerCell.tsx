import { memo } from 'react';
import { Skeleton } from '@mui/material';
import { useFindOneCategory } from '../../hooks/useFindOneCategory';
import { NameLink } from 'modules/inventory/common/components/NameLink';

const CategoryContainerCell = ({ categoryId }: { categoryId: string }) => {
  const { data, isLoading } = useFindOneCategory(categoryId);

  if (isLoading) return <Skeleton variant='text' sx={{ maxWidth: 150, width: '100%' }} />;
  if (!data) return <>{categoryId}</>;

  return <NameLink name={data?.name} route={`/inventory/settings/categories/${data?._id as string}/subcategories`} />;
};

export default memo(CategoryContainerCell);
