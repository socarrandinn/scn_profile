import { memo, useCallback } from 'react';
import { TimelineContentPaper, TimelineItem } from './styled';
import { TimelineConnector, TimelineContent, TimelineDot, TimelineSeparator } from '@mui/lab';
import { Stack, Typography } from '@mui/material';
import { EmailValue } from 'components/libs/EmailValue';
import AuditLogStatusChip from './AuditLogStatusChip';
import { DateValue } from '@dfl/mui-react-common';
import { IAuditLogEntity } from '../../interfaces';
import { useAuditLogEntityContext } from '../../context/AuditLogEntityContext';

type AuditLogTimelineItemProps = {
  entity: IAuditLogEntity;
};

const AuditLogTimelineItem = ({ entity }: AuditLogTimelineItemProps) => {
  const { user, updatedAt, event, _id } = entity;
  const { checkEntity, setCheckEntity } = useAuditLogEntityContext();
  console.log(checkEntity);

  const handleCheckEntity = useCallback(() => {
    setCheckEntity?.(_id);
  }, [setCheckEntity, _id]);

  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot variant='filled' color='primary' />
        <TimelineConnector sx={{ backgroundColor: 'primary.main' }} />
      </TimelineSeparator>
      <TimelineContent>
        <TimelineContentPaper active={checkEntity === _id} onClick={handleCheckEntity}>
          <Stack gap={{ md: 1 }} flexDirection={{ xs: 'column', md: 'row' }} justifyContent={'space-between'}>
            <EmailValue value={user?.email} />
            <DateValue value={updatedAt} />
          </Stack>
          <Typography>Ha modificado la descripción de productos</Typography>
          <AuditLogStatusChip status={event} />
        </TimelineContentPaper>
      </TimelineContent>
    </TimelineItem>
  );
};

export default memo(AuditLogTimelineItem);
