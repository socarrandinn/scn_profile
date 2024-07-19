import { memo } from 'react';
import { AUDIT_LOG_MODULE_TEXT, AUDIT_LOG_MODULE_COLOR, AUDIT_LOG_MODULE_ENUM } from '../../constants/audit-log.status';
import { Chip, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useTranslation } from 'react-i18next';

type AuditLogModuleStatusChipProps = {
  module: AUDIT_LOG_MODULE_ENUM;
};

const AuditLogModuleStatusChip = ({ module }: AuditLogModuleStatusChipProps) => {
  const { t } = useTranslation('auditLog');
  return (
    <Chip
      label={<Typography fontSize='10'>{t(`module.${module}`)}</Typography>}
      sx={{
        // @ts-ignore
        color: AUDIT_LOG_MODULE_TEXT[module] ?? grey[800],
        px: 1,
        mt: 1,
        backgroundColor: AUDIT_LOG_MODULE_COLOR[module],
        borderRadius: 4,
      }}
      variant='filled'
      size='small'
    />
  );
};

export default memo(AuditLogModuleStatusChip);
