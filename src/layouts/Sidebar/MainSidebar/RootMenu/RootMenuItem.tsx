import { IMenuItem } from '@dfl/mui-react-common';
import { Inventory } from '@mui/icons-material';
import { memo } from 'react';
import { RootMenuItem } from '../styled';

type RootMenuItemProps = {
  item: Omit<IMenuItem, 'items'>;
};

const RootMenuItemContent = ({ item }: RootMenuItemProps) => {
  console.log(item);

  return <RootMenuItem to={item.path}>{item?.icon ? item.icon : <Inventory />}</RootMenuItem>;
};

export default memo(RootMenuItemContent);
