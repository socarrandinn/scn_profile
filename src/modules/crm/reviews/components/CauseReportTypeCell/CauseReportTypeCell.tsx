import { memo } from 'react';
import { IReportUser } from '../../interfaces';
import { useFindOneReportCause } from 'modules/crm/settings/report-cause/hooks/useFindOneReportCause';
import { Skeleton } from '@mui/material';
import { LongText } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';

type CauseReportTypeCellProps = {
  record: IReportUser;
};

const CauseReportTypeCell = ({ record }: CauseReportTypeCellProps) => {
  const { data, isLoading } = useFindOneReportCause(record?.type);
  const { t } = useTranslation('reportCause');

  if (isLoading) {
    return <Skeleton variant='text' sx={{ maxWidth: 250, width: '100%' }} />;
  }

  if (!data) return <>{t('notFound')}</>;

  return <LongText text={data?.name} lineClamp={2} />;
};

export default memo(CauseReportTypeCell);
