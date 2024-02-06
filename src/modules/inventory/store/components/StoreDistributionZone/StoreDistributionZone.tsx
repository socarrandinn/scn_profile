import { Stack } from '@mui/material';
import { isEmpty } from 'lodash';
import { memo } from 'react';
import { NoZoneItem, ZoneItem, ZoneMoreItem } from './ZoneItem';
import { IStore } from '../../interfaces';

const StoreDistributionZone = ({ record }: { record: IStore }) => {
  const { locations } = record;
  if (isEmpty(locations)) return <NoZoneItem/>;

  return (
    <Stack gap={1} flexDirection={'row'}>
      {locations?.slice(0, 3)?.map((l) => (
        <ZoneItem key={l} state={l} />
      ))}
      <ZoneMoreItem locations={locations} />
    </Stack>
  );
};

export default memo(StoreDistributionZone);
