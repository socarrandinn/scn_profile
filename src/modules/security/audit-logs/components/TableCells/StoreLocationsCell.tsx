import { useMemo } from 'react';
import { findProvinceByStateCode } from '@dfl/location';
import { Chip, Stack } from '@mui/material';
import { StoreLocation } from 'modules/inventory/store/interfaces';

const StoreLocationsCell = ({ locations }: { locations: StoreLocation[] }) => {
  const states = locations?.[0]?.states;
  const locationsStates = useMemo(
    () => states?.map((pv) => findProvinceByStateCode(pv)?.name || pv),
    [findProvinceByStateCode, states],
  );

  return (
    <Stack gap={1} flexDirection={'row'} flexWrap={'wrap'}>
      {locationsStates.map((state) => (
        <Chip key={state} label={state} />
      ))}
    </Stack>
  );
};

export default StoreLocationsCell;
