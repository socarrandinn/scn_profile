import { memo } from 'react';
import { findProvinceByStateCode } from '@dfl/location';
import { FlexBox } from '@dfl/mui-react-common';
import { Typography } from '@mui/material';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

type ProvinceCellProps = {
  state: string;
};
const ProvinceCell = ({ state }: ProvinceCellProps) => {
  const provinceByState = findProvinceByStateCode(state);

  return (
    <FlexBox alignItems={'center'} gap={1}>
      <FmdGoodIcon />
      <Typography>{provinceByState?.name}</Typography>
    </FlexBox>
  );
};
export default memo(ProvinceCell);
