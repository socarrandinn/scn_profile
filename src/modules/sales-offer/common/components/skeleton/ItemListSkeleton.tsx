import { Chip, Skeleton } from '@mui/material';
import { useMemo } from 'react';

const ItemListSkeleton = ({ rules }: { rules: string[] }) => {
  const SkeletonList = useMemo(
    () => rules.map((c) => <Chip size='small' key={c} label={<Skeleton variant='text' width={60} />} />),
    [rules],
  );
  return <>{SkeletonList}</>;
};

export default ItemListSkeleton;
