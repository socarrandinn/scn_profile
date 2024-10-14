import { memo } from 'react';
import { useFindOneStore } from '../../hooks/useFindOneStore';
import StoreCell from './StoreCell';

const StoreCellContainer = ({ storeId }: { storeId: string }) => {
  const { data } = useFindOneStore(storeId);
  if (!data) return <></>;

  return <StoreCell name={data?.name} storeId={data?._id as string} />;
};

export default memo(StoreCellContainer);

export const renderStoreCellContainer = (storeId: string) => {
  return <StoreCellContainer storeId={storeId} />;
};
