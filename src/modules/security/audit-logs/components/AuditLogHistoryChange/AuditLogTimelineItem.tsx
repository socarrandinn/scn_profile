import { memo, useMemo } from 'react';
import { TimelineContentPaper, TimelineItem } from './styled';
import { TimelineConnector, TimelineContent, TimelineDot, TimelineSeparator } from '@mui/lab';
import { Stack, Typography } from '@mui/material';
import AuditLogEventStatusChip from './AuditLogEventStatusChip';
import { DateValue } from '@dfl/mui-react-common';
import { IAuditLogEntity } from '../../interfaces';
import { useAuditLogEntityContext } from '../../context/AuditLogEntityContext';
import { useParamsLink } from '@dfl/react-security';

type AuditLogTimelineItemProps = {
  entity: IAuditLogEntity;
};

const AuditLogTimelineItem = ({ entity }: AuditLogTimelineItemProps) => {
  const { user, updatedAt, event, _id } = entity;
  const { checkEntity } = useAuditLogEntityContext();
  const fullName = useMemo(() => `${user?.firstName} ${user?.lastName}`, [user]);
  const handleEdit = useParamsLink({ entity: _id });

  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineConnector sx={{ backgroundColor: 'primary.main' }} />
        <TimelineDot variant='filled' color='primary' />
        <TimelineConnector sx={{ backgroundColor: 'primary.main' }} />
      </TimelineSeparator>
      <TimelineContent padding={1}>
        <TimelineContentPaper active={checkEntity === _id} onClick={handleEdit}>
          <Stack flexDirection={{ xs: 'column', md: 'row' }} justifyContent={'space-between'} flexWrap={'wrap'}>
            <Typography mr={1} fontSize={15} fontWeight={600}>
              {fullName}
            </Typography>
            <DateValue value={updatedAt} format='dd-MM-yyyy | hh:mm:ss aa' />
          </Stack>
          <Typography fontSize={15}>{user?.email}</Typography>
          <AuditLogEventStatusChip status={event} />
        </TimelineContentPaper>
      </TimelineContent>
    </TimelineItem>
  );
};

export default memo(AuditLogTimelineItem);
