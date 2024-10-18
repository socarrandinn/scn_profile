import { memo } from 'react';
import { FlexBox } from '@dfl/mui-react-common';
import { Skeleton } from '@mui/material';
import OrderInfoSkeleton from '../OrderShippingInfo/OrderInfoSkeleton';

const OrderInvoiceInfoSkeleton = () => {
  return (
    <>
      <OrderInfoSkeleton row={2}>
        <FlexBox gap={2}>
          <Skeleton variant='circular' width={60} height={60} sx={{ mb: 3 }} />
          <div>
            <Skeleton width={160} height={28} />
            <Skeleton width={70} height={18} />
          </div>
        </FlexBox>
      </OrderInfoSkeleton>
    </>
  );
};

export default memo(OrderInvoiceInfoSkeleton);
