import { memo } from 'react';
import StoreDetailContainer from 'modules/inventory/warehouse/containers/StoreDetailContainer';

const storeDetail = () => {
  return <StoreDetailContainer />;
};

export default memo(storeDetail);
