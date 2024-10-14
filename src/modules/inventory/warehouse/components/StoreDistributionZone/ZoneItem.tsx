import { useMemo } from 'react';
import { Chip, styled } from '@mui/material';
import { findProvinceByStateCode } from '@dfl/location';
import { OwnChipProps } from '@dfl/mui-react-common';

const ZoneChip = styled(Chip)(() => ({
  borderRadius: 4,
}));

export const ZoneItem = ({ text }: OwnChipProps) => {
  const name = useMemo(() => findProvinceByStateCode(text as string)?.name || text, [text]);
  if (!text) return <></>;
  return <ZoneChip variant='filled' label={name} color='primary' />;
};
