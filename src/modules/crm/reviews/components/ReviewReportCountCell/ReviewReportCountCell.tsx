import { RowActions } from '@dfl/mui-admin-layout';
import { Stack, Typography } from '@mui/material';
import ReportSearchIcon from 'components/libs/Icons/ReportSearchIcon';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

type ReviewReportCountCellProps = {
  count: number;
  reportId: string;
};

const ReviewReportCountCell = ({ count, reportId }: ReviewReportCountCellProps) => {
  // const handleEdit = useParamsLink({ rview: reportId });
  const { t } = useTranslation('reviews');
  const navigate = useNavigate();
  const onDetails = useCallback(() => {
    navigate(`/crm/reviews/${reportId}`);
  }, [navigate, reportId]);

  if (count === 0) return <>{count}</>;
  return (
    <Stack alignItems={'center'} justifyContent={'center'} gap={1} direction={'row'}>
      <Typography lineHeight={1}>{count}</Typography>
      <RowActions icon={ReportSearchIcon} tooltip={t('report')} onClick={onDetails} />
    </Stack>
  );
};

export default memo(ReviewReportCountCell);
