import { memo } from 'react';
import { useFindOneStore } from '../../hooks/useFindOneStore';
import StoreCell from './StoreCell';

const StoreCellContainer = ({ warehouseId }: { warehouseId: string }) => {
  const { data } = useFindOneStore(warehouseId);
  if (!data) return <></>;

  return <StoreCell name={data?.name} warehouseId={data?._id as string} />;
};

export default memo(StoreCellContainer);

export const renderStoreCellContainer = (warehouseId: string) => {
  return <StoreCellContainer warehouseId={warehouseId} />;
};
