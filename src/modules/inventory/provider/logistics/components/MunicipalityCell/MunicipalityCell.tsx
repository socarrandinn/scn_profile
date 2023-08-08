import { memo } from 'react';
import { findMunicipalityByStateAndMunicipality } from '@dfl/location';
import { FlexBox } from '@dfl/mui-react-common';
import { Typography } from '@mui/material';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

type ProvinceCellProps = {
  municipality: string
  privinceCode: string
}
const MunicipalityCell = ({ municipality, privinceCode }: ProvinceCellProps) => {
  const provinceByState = findMunicipalityByStateAndMunicipality(privinceCode, municipality);

  return (
    <FlexBox alignItems={'center'} gap={1}>
      <FmdGoodIcon/>
      <Typography>{provinceByState?.name}</Typography>
    </FlexBox>
  )
}
export default memo(MunicipalityCell);
