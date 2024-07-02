import { memo } from 'react';
import { AUDIT_LOG_COLORS_TEXT, AUDIT_LOG_EVENT_COLOR, AUDIT_LOG_EVENT_ENUM } from '../../constants/audit-log.status';
import { Chip, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useTranslation } from 'react-i18next';

type AuditLogStatusChipProps = {
  status: AUDIT_LOG_EVENT_ENUM;
};

const AuditLogStatusChip = ({ status }: AuditLogStatusChipProps) => {
  const { t } = useTranslation('auditLog');
  return (
    <Chip
      label={<Typography fontSize='10'>{t(`event.${status}`)}</Typography>}
      sx={{
        // @ts-ignore
        color: AUDIT_LOG_COLORS_TEXT[status] ?? grey[800],
        px: 1,
        mt: 1,
        backgroundColor: AUDIT_LOG_EVENT_COLOR[status],
        borderRadius: 4,
      }}
      variant='filled'
      size='small'
    />
  );
};

export default memo(AuditLogStatusChip);
