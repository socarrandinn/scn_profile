import { memo } from 'react';
import { styled } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import MuiTimelineItem from '@mui/lab/TimelineItem';
import MuiTimelineDot from '@mui/lab/TimelineDot';
import { IStatusHistory } from '../../../interfaces/IStatusHistory';
import { IUser } from 'modules/security/users/interfaces/IUser';
import { IOrder } from '../../../interfaces/IOrder';
import TimeItem from './TimeItem';

export const TimelineItem = styled(MuiTimelineItem)(() => ({
  '&:before': {
    display: 'none',
  },
}));
export const TimelineDot = styled(MuiTimelineDot)(() => ({}));

type OrderHistoryProps = {
  activities: IStatusHistory[];
  owner: IUser;
  order: IOrder | undefined;
  createdAt: string;
  format?: string;
};

const OrderHistory = ({ activities, owner, createdAt, order, format = 'dd-MM-yyyy' }: OrderHistoryProps) => {
  return (
    <Timeline position='right'>
      {activities?.map((item, index) => (
        <TimeItem item={item} key={index} owner={owner} order={order} format={format} />
      ))}
      {/* <CreateOrderTime createAt={createdAt} owner={owner} format={format} /> */}
    </Timeline>
  );
};

export default memo(OrderHistory);
