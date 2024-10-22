import { memo } from 'react';
import TimelineConnector from '@mui/lab/TimelineConnector';
import { styled } from '@mui/material';
import MuiTimelineItem from '@mui/lab/TimelineItem';
import MuiTimelineDot from '@mui/lab/TimelineDot';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import Typography from '@mui/material/Typography';
import { DateValue, FlexBox } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import Avatar from '@mui/material/Avatar';
import { IStatusHistory } from '../../../interfaces/IStatusHistory';
import { IOrder } from '../../../interfaces/IOrder';
import { IUser } from 'modules/security/users/interfaces/IUser';
import AutomaticCancelStatusTime from './AutomaticCancelStatusTime';
import PaymentOrderTime from './PaymentOrderTime';
import { ORDER_STATUS_TYPE_ENUM } from 'modules/sales/settings/order-status/interfaces';
import SystemStatusTime from './SystemStatusTime';
import { OrderStatus } from '../../OrderStatus';

type TimeItemProps = {
  item: IStatusHistory;
  owner?: IUser;
  order: IOrder | undefined;
  format?: string;
};

export const TimelineItem = styled(MuiTimelineItem)(() => ({
  '&:before': {
    display: 'none',
  },
}));
export const TimelineDot = styled(MuiTimelineDot)(() => ({
  // border: 'none',
  // svg: {
  //     fontSize: 19,
  //     marginTop:'-50%'
  // }
}));

const TimeItem = ({ item, owner, order, format = 'dd-MM-yyyy' }: TimeItemProps) => {
  const { t } = useTranslation('order');

  if ((item.system || !item.user) && item?.status?.type === ORDER_STATUS_TYPE_ENUM.CANCELED) {
    return <AutomaticCancelStatusTime item={item} format={format} />;
  }

  if (item?.status?.type === ORDER_STATUS_TYPE_ENUM.PAYED) {
    return <PaymentOrderTime item={item} owner={item.user || owner} order={order} format={format} />;
  }

  if (item.system || !item.user) return <SystemStatusTime item={item} format={format} />;

  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot sx={{ borderColor: item?.status?.color }} variant={'outlined'}>
          <Avatar sx={{ width: 24, height: 24 }} src={item?.user?.avatar?.thumb} />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '12px', px: 2 }}>
        <FlexBox justifyContent={'space-between'}>
          <Typography variant='h6' component='span'>
            {item.user?.fullName}
            &nbsp;
            <Typography component='span'>{t('history.changeStatus')}</Typography>
          </Typography>
          <Typography color={'text.secondary'}>
            <DateValue value={item.date} format={format} />
          </Typography>
        </FlexBox>
        <FlexBox mt={1}>
          <OrderStatus value={item.status} />
        </FlexBox>
      </TimelineContent>
    </TimelineItem>
  );
};

export default memo(TimeItem);
