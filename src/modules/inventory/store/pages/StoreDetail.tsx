
import { memo } from 'react';
import { CenterPageLayout } from 'layouts/index';
import StoreDetailContainer from 'modules/inventory/store/components/StoreDetailContainer/StoreDetailContainer';

const storeDetail = () => {
  return (
      <CenterPageLayout>
          <StoreDetailContainer />
      </CenterPageLayout>
  )
}

export default memo(storeDetail);
