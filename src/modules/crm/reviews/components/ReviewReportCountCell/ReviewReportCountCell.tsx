import { RowActions } from '@dfl/mui-admin-layout';
import { useParamsLink } from '@dfl/react-security';
import { Stack, Typography } from '@mui/material';
import ReportSearchIcon from 'components/libs/Icons/ReportSearchIcon';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

type ReviewReportCountCellProps = {
  count: number;
  reportId: string;
};

const ReviewReportCountCell = ({ count, reportId }: ReviewReportCountCellProps) => {
  const handleEdit = useParamsLink({ rview: reportId });
  const { t } = useTranslation('reviews');
  if (count === 0) return <>{count}</>;
  return (
    <Stack alignItems={'center'} justifyContent={'center'} gap={1} direction={'row'}>
      <Typography lineHeight={1}>{count}</Typography>
      <RowActions icon={ReportSearchIcon} tooltip={t('report')} onClick={handleEdit} />
    </Stack>
  );
};

export default memo(ReviewReportCountCell);
