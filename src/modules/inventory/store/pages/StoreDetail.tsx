import { memo } from 'react';
import StoreDetailContainer from 'modules/inventory/store/components/StoreDetailContainer/StoreDetailContainer';

const storeDetail = () => {
  return <StoreDetailContainer />;
};

export default memo(storeDetail);
