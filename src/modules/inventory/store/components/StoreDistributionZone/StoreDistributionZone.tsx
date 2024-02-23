import { memo } from 'react';
import { ZoneItem } from './ZoneItem';
import { IStore } from '../../interfaces';
import { TagList } from '@dfl/mui-react-common';

const StoreDistributionZone = ({ record }: { record: IStore }) => {
  const { locations } = record;
  return <TagList value={locations} limit={3} ownChip={ZoneItem} />;
};

export default memo(StoreDistributionZone);
