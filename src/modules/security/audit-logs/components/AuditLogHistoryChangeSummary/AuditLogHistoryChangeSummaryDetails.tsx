import { memo, useMemo } from 'react';
import { useFindOneLocalEntityById } from '../../hooks/useFindOneLocalEntityById';
import { Button, Paper, Stack, Typography } from '@mui/material';
import { DateValue } from '@dfl/mui-react-common';
import AuditLogEventStatusChip from '../AuditLogHistoryChange/AuditLogEventStatusChip';
import { sxFormPaper } from '../AuditLogHistoryChange/styled';
import AuditLogModuleStatusChip from '../AuditLogHistoryChange/AuditLogModuleStatusChip';
import AuditLogDeviceSummary from './AuditLogDeviceSummary';
import { useToggle } from '@dfl/hook-utils';
import { useTranslation } from 'react-i18next';

const AuditLogHistoryChangeSummaryDetails = () => {
  const { t } = useTranslation('common');
  const { entity } = useFindOneLocalEntityById();
  const fullName = useMemo(() => entity?.user && `${entity?.user?.firstName} ${entity?.user?.lastName}`, [entity]);
  const { isOpen: expanded, onToggle } = useToggle(false);
  return (
    <Paper sx={{ ...sxFormPaper.sx, mb: { xs: 1, md: 2 } }}>
      <Stack flexDirection={{ xs: 'column', md: 'row' }} justifyContent={'space-between'} flexWrap={'wrap'}>
        <Typography mr={1} fontSize={15} fontWeight={600}>
          {fullName || '-'}
        </Typography>
        <DateValue value={entity?.updatedAt} format='dd-MM-yyyy | hh:mm:ss aa' />
      </Stack>
      <Typography fontSize={15}>{entity?.user?.email}</Typography>

      <Stack gap={2} flexDirection={{ xs: 'column', sm: 'row' }} justifyContent={'space-between'} flexWrap={'wrap'}>
        <Stack flexDirection={'row'} flexWrap={'wrap'} gap={1}>
          {entity?.module && <AuditLogModuleStatusChip module={entity?.module} />}
          {entity?.event && <AuditLogEventStatusChip status={entity?.event} />}
        </Stack>
        <Button onClick={onToggle}>{t('showMore')}</Button>
      </Stack>
      <AuditLogDeviceSummary expanded={expanded} device={entity?.device as any} />
    </Paper>
  );
};

export default memo(AuditLogHistoryChangeSummaryDetails);
