import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { OrderProductsInfo } from 'modules/sales/common/components/OrderDetails/OrderProductInfo';

import { memo } from 'react';
const PaidOrderProductDetails = () => {
  return (
    <DetailLayout mb={3}>
      <DetailContent ghost>
        <OrderProductsInfo />
      </DetailContent>
      <DetailSummary ghost width={{ md: 400, lg: 450, xl: 500 }}></DetailSummary>
    </DetailLayout>
  );
};

export default memo(PaidOrderProductDetails);
