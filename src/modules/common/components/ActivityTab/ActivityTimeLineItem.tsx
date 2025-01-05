import { RadioButtonCheckedOutlined } from '@mui/icons-material';
import { TimelineConnector, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab';
import { memo } from 'react';
import ActivityTimeLineItemContent from './ActivityTimeLineItemContent';
import { IAuditLogEntity } from 'modules/security/audit-logs/interfaces';

type Props = {
  data: IAuditLogEntity;
};

// Define conditional styles for different event type
const getEventColor = (event: string) => {
  const normalizedEvent = event.toLowerCase();
  if (normalizedEvent.startsWith('delete')) {
    return 'primary';
  } else if (normalizedEvent.startsWith('update')) {
    return 'info';
  } else if (normalizedEvent.startsWith('create')) {
    return 'success';
  } else {
    return 'warning';
  }
};

const ActivityTimeLineItem = ({ data }: Props) => {
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot variant='filled' color={getEventColor(data.event)}>
          <RadioButtonCheckedOutlined sx={{ color: 'white' }} />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <ActivityTimeLineItemContent data={data} color={getEventColor(data.event)} />
    </TimelineItem>
  );
};

export default memo(ActivityTimeLineItem);
