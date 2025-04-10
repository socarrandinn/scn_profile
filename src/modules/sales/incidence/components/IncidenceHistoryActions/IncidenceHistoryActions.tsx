import { Typography } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Timeline, TimelineConnector, TimelineContent, TimelineItem, timelineItemClasses, TimelineSeparator } from '@mui/lab';
import CheckCircleIcon from 'modules/inventory/product-stock/components/Icons/CheckCircleIcon';
import { format } from 'date-fns';
import { INCIDENCE_ACTION_ENUM } from '../../constants/incidence-action.enum';
import { IIncidenceActions } from '../../interfaces';

const IncidenceHistoryActions = ({ data }: { data: IIncidenceActions[] }) => {
  const { t } = useTranslation('incidence');

  const sortedData = [...(data || [])].sort(
    (a, b) => new Date(b?.date).getTime() - new Date(a?.date).getTime()
  );

  return (
    <>
      <Typography variant='h4' mt={4}>{t('historyActions')}</Typography>
      <Timeline sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}>
        {sortedData?.map((action: IIncidenceActions, index: number) => {
          const isLast = index === data?.length - 1;
          return (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <CheckCircleIcon />
                {!isLast && <TimelineConnector sx={{ backgroundColor: 'primary.main', marginY: 0.5 }} />}
              </TimelineSeparator>
              <TimelineContent sx={{ pt: 0, paddingRight: 0 }}>
                <Typography variant='h4'>{t(`actions.${action?.actionType as INCIDENCE_ACTION_ENUM}`)}</Typography>
                <Typography variant='body2' sx={{ fontWeight: 300 }}>
                  {format(new Date(action?.date), 'dd/MM/yyyy H:mm aa')}
                </Typography>
                {action?.note && <Typography sx={{ py: 0.5 }}>{action?.note}</Typography>}
              </TimelineContent>
            </TimelineItem>
          )
        })}
      </Timeline>
    </>
  );
};

export default memo(IncidenceHistoryActions);
