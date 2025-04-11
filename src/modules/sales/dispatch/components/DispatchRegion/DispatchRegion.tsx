import { NumberValue, FlexBox } from '@dfl/mui-react-common';
import { Box, Typography } from '@mui/material';
import { MS_LOCATION_CONFIG } from 'settings/address-location';
import { getProvinceByCode } from 'utils/location';
import { ISubordersByRegion } from '../../interfaces';

type Props = {
  value: string;
};
export const renderDispatchRegion = ({ value }: Props) => {
  if (MS_LOCATION_CONFIG.isCuban) {
    const state = getProvinceByCode(Number(value));
    return state || value;
  }

  return value;
};

export const renderStateValue = (regions: ISubordersByRegion[]) => {
  const states = regions?.map((region) => (
    <Box key={region.state}>
      <NumberValue value={region.totalSuborders || 0} />
      <Typography>{renderDispatchRegion({ value: region.state })}</Typography>
    </Box>
  ));

  return (
    <FlexBox gap={2} flexWrap={'wrap'}>
      {states}
    </FlexBox>
  );
};
