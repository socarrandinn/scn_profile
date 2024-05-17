import { memo, useCallback, useMemo } from 'react';
import { useParamsLink } from '@dfl/react-security';
import { useRobotTxtContext } from '../../contexts/RobotTxtContext';
import { Stack, Typography } from '@mui/material';
import { DateValue } from '@dfl/mui-react-common';
import {
  TimelineContentPaper,
  TimelineItem,
} from 'modules/security/audit-logs/components/AuditLogHistoryChange/styled';
import { TimelineConnector, TimelineContent, TimelineDot, TimelineSeparator } from '@mui/lab';
import { IAuditLogEntity } from 'modules/security/audit-logs/interfaces';
import AuditLogEventStatusChip from 'modules/security/audit-logs/components/AuditLogHistoryChange/AuditLogEventStatusChip';

type RobotTxtLogTimelineItemProps = {
  auditLog: IAuditLogEntity;
  index: number;
  onClose?: () => void;
};

const RobotTxtLogTimelineItem = ({ auditLog, onClose }: RobotTxtLogTimelineItemProps) => {
  const { _id, user, updatedAt, event } = auditLog;
  const { checkRobotTxt } = useRobotTxtContext();
  const fullName = useMemo(() => `${user?.firstName} ${user?.lastName}`, [user]);

  const handleEdit = useParamsLink({ entity: _id });

  const onEdit = useCallback(() => {
    handleEdit();
    onClose?.();
  }, [handleEdit]);

  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineConnector sx={{ backgroundColor: 'primary.main' }} />
        <TimelineDot variant='filled' color='primary' />
        <TimelineConnector sx={{ backgroundColor: 'primary.main' }} />
      </TimelineSeparator>
      <TimelineContent padding={1}>
        <TimelineContentPaper active={checkRobotTxt === _id} onClick={onEdit}>
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

export default memo(RobotTxtLogTimelineItem);
