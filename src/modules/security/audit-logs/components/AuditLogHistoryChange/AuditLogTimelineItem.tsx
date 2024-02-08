import { memo, useCallback } from 'react';
import { TimelineContentPaper, TimelineItem } from './styled';
import { TimelineConnector, TimelineContent, TimelineDot, TimelineSeparator } from '@mui/lab';
import { Stack, Typography } from '@mui/material';
import AuditLogEventStatusChip from './AuditLogEventStatusChip';
import { DateValue } from '@dfl/mui-react-common';
import { IAuditLogEntity } from '../../interfaces';
import { useAuditLogEntityContext } from '../../context/AuditLogEntityContext';
/* import { useAuditLogFunction } from '../../hooks/useAuditLogFunction';
import { keysToExclude } from '../../constants/audit-log-keys-exclude'; */

type AuditLogTimelineItemProps = {
  entity: IAuditLogEntity;
};

const AuditLogTimelineItem = ({ entity }: AuditLogTimelineItemProps) => {
  const { user, updatedAt, event, _id } = entity;
  const { checkEntity, setCheckEntity } = useAuditLogEntityContext();
  /* const { onOneChangeTrace, onExcludeKeysFromObject } = useAuditLogFunction();
  const trace = onExcludeKeysFromObject(entity?.payload, keysToExclude);
  const changes = onOneChangeTrace(trace); */

  const handleCheckEntity = useCallback(() => {
    setCheckEntity?.(_id);
  }, [setCheckEntity, _id]);

  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineConnector sx={{ backgroundColor: 'primary.main' }} />
        <TimelineDot variant='filled' color='primary' />
        <TimelineConnector sx={{ backgroundColor: 'primary.main' }} />
      </TimelineSeparator>
      <TimelineContent>
        <TimelineContentPaper active={checkEntity === _id} onClick={handleCheckEntity}>
          <Stack flexDirection={{ xs: 'column', md: 'row' }} justifyContent={'space-between'} flexWrap={'wrap'}>
            <Typography mr={1} fontSize={15} fontWeight={600}>
              {user?.email}
            </Typography>
            <DateValue value={updatedAt} format='dd-MM-yyyy | hh:mm:ss aa' />
          </Stack>
          {/* <Typography>Ha modificado la descripción de productos</Typography> */}
          <AuditLogEventStatusChip status={event} />
        </TimelineContentPaper>
      </TimelineContent>
    </TimelineItem>
  );
};

export default memo(AuditLogTimelineItem);
