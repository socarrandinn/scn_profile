import { memo } from 'react';
import { IWarehouse } from '../../interfaces';

const StoreDistributionZone = ({ record }: { record: IWarehouse }) => {
  return <></>;
  /*  const { locations } = record;
  return <TagList value={locations} limit={3} ownChip={ZoneItem} />; */
};

export default memo(StoreDistributionZone);
