import { memo } from 'react';
import { FlexBox } from '@dfl/mui-react-common';
import { MunicipalityValue } from 'modules/common/components/Address/Municipality';
import { IAddress } from 'modules/common/interfaces';
import { findProvinceByStateCode } from '@dfl/location';
import Box from '@mui/material/Box';

type ProductAddressCellProps = {
  address: IAddress;
};

const ProductAddressCell = ({ address }: ProductAddressCellProps) => {
  return (
    <FlexBox alignItems={'center'}>
      <MunicipalityValue value={address} />,<Box ml={1}>{findProvinceByStateCode(address?.state)?.name}</Box>
    </FlexBox>
  );
};

export default memo(ProductAddressCell);
