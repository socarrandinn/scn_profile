import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { OrderShippingInfo } from 'modules/sales/common/components/OrderDetails/OrderShippingInfo';
import { memo } from 'react';
const PaidOrderGeneralDetails = () => {
  return (
    <DetailLayout>
      <DetailContent ghost>
        <OrderShippingInfo isParent />
      </DetailContent>
      <DetailSummary>dddd</DetailSummary>
    </DetailLayout>
  );
};

export default memo(PaidOrderGeneralDetails);
