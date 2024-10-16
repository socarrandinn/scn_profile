import { Box } from '@mui/material';
import { AddressValue } from 'modules/common/components/Address';
import { IShipping } from 'modules/sales/paid-order/interfaces';
import { memo } from 'react';
type OrderLocationCellProps = {
  value: IShipping;
};

const OrderLocationCell = ({ value }: OrderLocationCellProps) => {
  return (
    <Box component={'span'}>
      <Location value={value} />
    </Box>
  );
};

export default memo(OrderLocationCell);

const Location = ({ value }: OrderLocationCellProps) => {
  switch (value.shippingType) {
    case 'IN_PLACE':
      return <> </>; // <InPlaceLocation value={value} />;
    case 'SHIPPING_RULE':
      return <AddressValue value={value.address} />;
    default:
      return <span className='w-full'>-</span>;
  }
};
