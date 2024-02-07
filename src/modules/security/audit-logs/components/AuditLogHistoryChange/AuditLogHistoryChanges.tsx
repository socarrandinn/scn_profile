import { FormPaper } from 'modules/common/components/FormPaper';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Timeline } from './styled';
import AuditLogTimelineItem from './AuditLogTimelineItem';
import { useAuditLogEntityContext } from '../../context/AuditLogEntityContext';
import { IAuditLogEntity } from '../../interfaces';
import AuditLogHistoryChangeSkeleton from './AuditLogHistoryChangeSkeleton';

const AuditLogHistoryChange = () => {
  const { t } = useTranslation('auditLog');
  const { data, isLoading, error } = useAuditLogEntityContext();

  if (isLoading || error) {
    return (
      <FormPaper nm title={t('title')}>
        <AuditLogHistoryChangeSkeleton />
      </FormPaper>
    );
  }

  return (
    <FormPaper nm title={t('title')}>
      <Timeline>
        {data?.data?.map((entity: IAuditLogEntity) => (
          <AuditLogTimelineItem key={entity?._id} entity={entity} />
        ))}
      </Timeline>
    </FormPaper>
  );
};

export default memo(AuditLogHistoryChange);
