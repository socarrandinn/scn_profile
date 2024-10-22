import { memo } from 'react';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import { DateValue, FlexBox } from '@dfl/mui-react-common';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import Avatar from '@mui/material/Avatar';
import { Stack } from '@mui/material';
import { IUser } from 'modules/security/users/interfaces/IUser';
import { IStatusHistory } from '../../../interfaces/IStatusHistory';
import { IOrder } from '../../../interfaces/IOrder';
import { TimelineDot, TimelineItem } from './OrderHistory';
import { OrderStatus } from '../../OrderStatus';
import { OrderPaymentMethod } from '../../OrderPaymentMethod';

type CreateOrderTimeProps = {
  owner: IUser;
  item: IStatusHistory;
  order: IOrder | undefined;
  format?: string;
};

const PaymentOrderTime = ({ owner, item, order, format = 'dd-MM-yyy' }: CreateOrderTimeProps) => {
  const { t } = useTranslation('order');
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
        <Stack gap={1}>
          <FlexBox justifyContent={'space-between'} gap={1}>
            <Typography variant='h6' component='span'>
              {owner?.fullName}
              &nbsp;
              <Typography component='span'>{t('history.payment')}</Typography>
            </Typography>
            <Typography color={'text.secondary'}>
              <DateValue value={item.date} format={format} />
            </Typography>
          </FlexBox>
          <FlexBox flexWrap={'wrap'} gap={0.5}>
            <OrderStatus value={item.status} />
            {!!order?.billing?.gateway && <OrderPaymentMethod record={order} value={order?.billing?.gateway} />}
          </FlexBox>
        </Stack>
      </TimelineContent>
    </TimelineItem>
  );
};

export default memo(PaymentOrderTime);
