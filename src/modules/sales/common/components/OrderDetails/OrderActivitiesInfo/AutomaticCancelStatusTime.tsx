import { memo } from 'react';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import { DateValue, FlexBox } from '@dfl/mui-react-common';
import Typography from '@mui/material/Typography';

import { Trans, useTranslation } from 'react-i18next';
import { SystemAvatar } from './SystemStatusTime';
import { OrderStatus } from '../../OrderStatus';
import { TimelineDot, TimelineItem } from './OrderHistory';

type AutomaticCancelStatusTimeProps = {
  item: any;
  format?: string;
};

const AutomaticCancelStatusTime = ({ item, format = 'dd-MM-yyyy' }: AutomaticCancelStatusTimeProps) => {
  const { t } = useTranslation('order');

  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot sx={{ borderColor: item.status?.color }} variant={'outlined'}>
          <SystemAvatar />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '12px', px: 2 }}>
        <FlexBox justifyContent={'space-between'}>
          <Typography variant='body1' component='span'>
            <Trans
              t={t}
              i18nKey={'history.autoCancelByMissingPayment'}
              components={{
                bold: <strong />,
              }}
            />
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

export default memo(AutomaticCancelStatusTime);
