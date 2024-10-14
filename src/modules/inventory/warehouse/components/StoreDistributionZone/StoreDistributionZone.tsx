import { memo } from 'react';
import { ZoneItem } from './ZoneItem';
import { IWarehouse } from '../../interfaces';
import { TagList } from '@dfl/mui-react-common';

const StoreDistributionZone = ({ record }: { record: IWarehouse }) => {
  const { locations } = record;
  return <TagList value={locations} limit={3} ownChip={ZoneItem} />;
};

export default memo(StoreDistributionZone);
