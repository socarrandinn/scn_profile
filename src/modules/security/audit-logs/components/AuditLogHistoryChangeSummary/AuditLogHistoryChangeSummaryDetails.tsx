import { memo, useMemo } from 'react';
import { useFindOneLocalEntityById } from '../../hooks/useFindOneLocalEntityById';
import { Paper, Stack, Typography } from '@mui/material';
import { DateValue } from '@dfl/mui-react-common';
import AuditLogEventStatusChip from '../AuditLogHistoryChange/AuditLogEventStatusChip';
import { sxFormPaper } from '../AuditLogHistoryChange/styled';
import AuditLogModuleStatusChip from '../AuditLogHistoryChange/AuditLogModuleStatusChip';

const AuditLogHistoryChangeSummaryDetails = () => {
  const { entity } = useFindOneLocalEntityById();
  const fullName = useMemo(() => entity?.user && `${entity?.user?.firstName} ${entity?.user?.lastName}`, [entity]);

  return (
    <Paper sx={{ ...sxFormPaper.sx, mb: { xs: 1, md: 2 } }}>
      <Stack flexDirection={{ xs: 'column', md: 'row' }} justifyContent={'space-between'} flexWrap={'wrap'}>
        <Typography mr={1} fontSize={15} fontWeight={600}>
          {fullName || '-'}
        </Typography>
        <DateValue value={entity?.updatedAt} format='dd-MM-yyyy | hh:mm:ss aa' />
      </Stack>
      <Typography fontSize={15}>{entity?.user?.email}</Typography>

      <Stack flexDirection={'row'} flexWrap={'wrap'} gap={1}>
        {entity?.module && <AuditLogModuleStatusChip module={entity?.module} />}
        {entity?.event && <AuditLogEventStatusChip status={entity?.event} />}
      </Stack>
    </Paper>
  );
};

export default memo(AuditLogHistoryChangeSummaryDetails);
