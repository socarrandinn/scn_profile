import { memo } from 'react';
import StoreDetailContainer from 'modules/inventory/store/containers/StoreDetailContainer';

const storeDetail = () => {
  return <StoreDetailContainer />;
};

export default memo(storeDetail);
