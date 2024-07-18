import { memo } from 'react';
import { Table, TabsFilter } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { CouponListToolbar } from '../components/CouponListToolbar';
import { useFindCoupons } from '../hooks/useFindCoupons';
import { couponColumns } from '../constants/coupon.columns';

const CouponListContainer = () => {
  const { isLoading, error, data } = useFindCoupons();
  return (
    <Box>
      <TabsFilter translation={'offerOrder'} defaultView={'all'} />
      <CouponListToolbar />
      <Table columns={couponColumns} data={data?.data} total={data?.total} isLoading={isLoading} error={error} select />
    </Box>
  );
};

export default memo(CouponListContainer);
