import { Typography } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Timeline, TimelineConnector, TimelineContent, TimelineItem, timelineItemClasses, TimelineSeparator } from '@mui/lab';
import CheckCircleIcon from 'modules/inventory/product-stock/components/Icons/CheckCircleIcon';
import { format } from 'date-fns';
import { IAuditLogEntity } from 'modules/security/audit-logs/interfaces';
import { INCIDENCE_ACTION_ENUM } from '../../constants/incidence-action.enum';

const IncidenceHistoryActions = ({ data }: { data: IAuditLogEntity[] }) => {
  const { t } = useTranslation('incidence');

  return (
    <>
      <Typography variant='h4' mt={4}>{t('historyActions')}</Typography>
      <Timeline sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}>
        {data?.map((action: IAuditLogEntity, index: number) => {
          const isLast = index === data?.length - 1;
          return (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <CheckCircleIcon />
                {!isLast && <TimelineConnector sx={{ backgroundColor: 'primary.main', marginY: 0.5 }} />}
              </TimelineSeparator>
              <TimelineContent sx={{ pt: 0, paddingRight: 0 }}>
                <Typography variant='h4'>{t(`actions.${action?.payload?.actionType as INCIDENCE_ACTION_ENUM}`)}</Typography>
                <Typography variant='body2' sx={{ fontWeight: 300 }}>
                  {format(new Date(action?.createdAt), 'dd/MM/yyyy H:mm aa')}
                </Typography>
                {action?.payload?.note && <Typography sx={{ py: 0.5 }}>{action?.payload?.note}</Typography>}
              </TimelineContent>
            </TimelineItem>
          )
        })}
      </Timeline>
    </>
  );
};

export default memo(IncidenceHistoryActions);
