import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { OrderActivitiesInfo } from 'modules/sales/common/components/OrderDetails/OrderActivitiesInfo';

import { memo } from 'react';
const PaidOrderActivityDetails = () => {
  return (
    <DetailLayout>
      <DetailContent ghost>
        <OrderActivitiesInfo />
      </DetailContent>
      <DetailSummary ghost width={{ md: 400, lg: 450, xl: 500 }}></DetailSummary>
    </DetailLayout>
  );
};

export default memo(PaidOrderActivityDetails);
