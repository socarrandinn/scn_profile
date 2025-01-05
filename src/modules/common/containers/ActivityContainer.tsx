import { NotSearchResult, SkeletonList } from '@dfl/mui-react-common';
import { SearchResponseType } from '@dfl/react-security';
import { PagePaperLayout } from 'layouts/index';
import ActivityTimeLine from 'modules/common/components/ActivityTab/ActivityTimeLine'
import { IAuditLogEntity } from 'modules/security/audit-logs/interfaces';
import { memo } from 'react'
import { useTranslation } from 'react-i18next';

type Props = {
  isLoading: boolean;
  data: SearchResponseType<IAuditLogEntity>;
};

const ActivityContainer = ({ isLoading, data }: Props) => {
  const { t } = useTranslation('auditLog');

  return (
    <PagePaperLayout title={t('title')} sx={{ mb: 2 }}>
      {!isLoading && !data?.data?.length && (
        <div className='flex items-center justify-center'>
          <NotSearchResult />
        </div>
      )}
      {isLoading ? (
        <SkeletonList numberItemsToShow={4} />
      ) : (
        <ActivityTimeLine data={data?.data} total={data?.total} />
      )}
    </PagePaperLayout>
  );
};

export default memo(ActivityContainer);
