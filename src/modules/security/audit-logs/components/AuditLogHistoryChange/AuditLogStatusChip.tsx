import { memo } from 'react';
import { AUDIT_LOG_COLORS, AUDIT_LOG_EVENT_ENUM } from '../../constants/audit-log.status';
import { Chip } from '@mui/material';
import { grey } from '@mui/material/colors';

type AuditLogStatusChipProps = {
  status: AUDIT_LOG_EVENT_ENUM;
};

const AuditLogStatusChip = ({ status }: AuditLogStatusChipProps) => {
  return (
    <Chip
      label={status}
      color='primary'
      sx={{ color: grey[800], px: 2, mt: 1, backgroundColor: AUDIT_LOG_COLORS[status], borderRadius: 8 }}
      variant='filled'
      size='small'
    />
  );
};

export default memo(AuditLogStatusChip);
