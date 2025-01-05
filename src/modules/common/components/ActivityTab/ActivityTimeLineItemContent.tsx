import { TimelineContent } from '@mui/lab';
import { memo } from 'react';
import { ChipItem, ActivityCard } from './styled';
import { Stack, Typography } from '@mui/material';
import { DateValue } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { IAuditLogEntity } from 'modules/security/audit-logs/interfaces';

type Props = {
  data: IAuditLogEntity;
  color: 'warning' | 'error' | 'success' | 'info' | 'primary' | 'secondary' | 'default';
};

const ActivityTimeLineItemContent = ({ data, color }: Props) => {
  const { t } = useTranslation('common');

  return (
    <TimelineContent>
      <ActivityCard>
        <Typography fontWeight={600} sx={{ mb: 1 }}>{data?.user?.email}</Typography>
        <Stack direction={'row'} gap={1} justifyContent={'start'}>
          <ChipItem
            key={data?._id}
            label={t(`activity.${data?.event}`)}
            color={color}
            size='small'
            variant='outlined'
          />
          <ChipItem
            label={<DateValue value={data?.createdAt} format="dd-MM-yyyy | hh:mm:ss aa" />}
          />
        </Stack>
      </ActivityCard>
    </TimelineContent>
  );
};

export default memo(ActivityTimeLineItemContent);
