import { Box } from '@mui/material';
import { AddressValue } from 'modules/common/components/Address';
import { memo } from 'react';
import { IShipping } from '../../interfaces/IOrder';

type OrderLocationCellProps = {
  value: IShipping;
};

const OrderLocationCell = ({ value }: OrderLocationCellProps) => {
  return (
    <Box component={'span'}>
      <AddressValue value={value?.address} excludedFields={['country', 'number', 'street', 'zipCode', 'address']} />
    </Box>
  );
};

export default memo(OrderLocationCell);
