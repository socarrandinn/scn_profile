import { FormPaper } from 'modules/common/components/FormPaper';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const AuditLogHistoryChangeSummary = () => {
  const { t } = useTranslation('auditLog');
  return <FormPaper nm title={t('summary.title')}></FormPaper>;
};

export default memo(AuditLogHistoryChangeSummary);
