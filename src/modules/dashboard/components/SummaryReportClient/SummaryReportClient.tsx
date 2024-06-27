import { FlexBox } from '@dfl/mui-react-common';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import FilterCenterFocusOutlinedIcon from '@mui/icons-material/FilterCenterFocusOutlined';
import UnpublishedOutlinedIcon from '@mui/icons-material/UnpublishedOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import { CounterBox } from 'components/libs/analytic/CounterBox';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

interface SummaryReportClientProps {
  summary: {
    totalUsers: number;
    activeUsers: number;
    unverifiedUsers: number;
    blockedUsers: number;
  };
}
const SummaryReportClient = ({ summary }: SummaryReportClientProps) => {
  const { t } = useTranslation('report');
  return (
    <FlexBox className='mt-2' gap={2} flexDirection={{ xs: 'column', md: 'row' }} flexWrap='wrap'>
      <CounterBox
        title={t('report.client.summary.total')}
        value={summary?.totalUsers}
        flexGrow={1}
        currency={false}
        icon={FilterCenterFocusOutlinedIcon}
        color='secondary'
      />
      <CounterBox
        title={t('report.client.summary.unverified')}
        value={summary?.unverifiedUsers}
        flexGrow={1}
        currency={false}
        icon={UnpublishedOutlinedIcon}
        color='secondary'
      />
      <CounterBox
        title={t('report.client.summary.active')}
        value={summary?.activeUsers}
        flexGrow={1}
        currency={false}
        icon={VerifiedOutlinedIcon}
        color='primary'
      />

      <CounterBox
        title={t('report.client.summary.blocked')}
        value={summary?.blockedUsers}
        flexGrow={1}
        currency={false}
        icon={BlockOutlinedIcon}
        color='error'
      />
    </FlexBox>
  );
};

export default memo(SummaryReportClient);
