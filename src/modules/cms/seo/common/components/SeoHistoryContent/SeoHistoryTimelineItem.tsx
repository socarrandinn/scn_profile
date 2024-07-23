import { memo, useCallback, useEffect, useMemo } from 'react';
import { useParamsLink } from '@dfl/react-security';
import { Stack, Typography } from '@mui/material';
import { DateValue } from '@dfl/mui-react-common';
import {
  TimelineContentPaper,
  TimelineItem,
} from 'modules/security/audit-logs/components/AuditLogHistoryChange/styled';
import { TimelineConnector, TimelineContent, TimelineDot, TimelineSeparator } from '@mui/lab';
import { IAuditLogEntity } from 'modules/security/audit-logs/interfaces';
import AuditLogEventStatusChip from 'modules/security/audit-logs/components/AuditLogHistoryChange/AuditLogEventStatusChip';
import { useAuditLogEntityContext } from 'modules/security/audit-logs/context/AuditLogEntityContext';

type SeoHistoryTimelineItemProps = {
  auditLog: IAuditLogEntity;
  index: number;
  onClose?: () => void;
};

const SeoHistoryTimelineItem = ({ auditLog, index, onClose }: SeoHistoryTimelineItemProps) => {
  const { _id, user, updatedAt, event } = auditLog;
  const { checkEntity } = useAuditLogEntityContext();
  const fullName = useMemo(() => `${user?.firstName} ${user?.lastName}`, [user]);

  const handleEdit = useParamsLink({ entity: _id });

  useEffect(() => {
    if (checkEntity === null && index === 0) {
      handleEdit?.();
    }
  }, [checkEntity, handleEdit, index]);

  const onEdit = useCallback(() => {
    handleEdit();
    onClose?.();
  }, [handleEdit, onClose]);

  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineConnector sx={{ backgroundColor: 'primary.main' }} />
        <TimelineDot variant='filled' color='primary' />
        <TimelineConnector sx={{ backgroundColor: 'primary.main' }} />
      </TimelineSeparator>
      <TimelineContent padding={1}>
        <TimelineContentPaper active={checkEntity === _id} onClick={onEdit}>
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

export default memo(SeoHistoryTimelineItem);
