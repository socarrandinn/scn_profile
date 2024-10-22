import { memo } from 'react';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import { DateValue, FlexBox } from '@dfl/mui-react-common';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import Avatar from '@mui/material/Avatar';
import { IUser } from 'modules/security/users/interfaces/IUser';
import { IOrderStatus, ORDER_STATUS_TYPE_ENUM } from 'modules/sales/settings/order-status/interfaces';
import { TimelineDot, TimelineItem } from './OrderHistory';
import { OrderStatus } from '../../OrderStatus';

type CreateOrderTimeProps = {
  owner: IUser;
  createAt: string;
  format?: string;
};

const CreateOrderTime = ({ owner, createAt, format = 'dd-MM-yyyy' }: CreateOrderTimeProps) => {
  const { t } = useTranslation('order');

  const createdStatus: Partial<IOrderStatus> = {
    _id: 'created',
    color: 'success',
    type: ORDER_STATUS_TYPE_ENUM.CREATED,
    title: t('history.created'),
    order: 0,
  };

  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot color={'success'} variant={'outlined'}>
          <Avatar sx={{ width: 24, height: 24 }} src={owner?.avatar?.thumb} />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '12px', px: 2 }}>
        <FlexBox justifyContent={'space-between'}>
          <Typography variant='h6' component='span'>
            {owner?.fullName}
            &nbsp;
            <Typography component='span'>{t('history.createOrder')}</Typography>
          </Typography>
          <Typography color={'text.secondary'}>
            <DateValue value={createAt} format={format} />
          </Typography>
        </FlexBox>
        <OrderStatus value={createdStatus as IOrderStatus} />
      </TimelineContent>
    </TimelineItem>
  );
};

export default memo(CreateOrderTime);
