import { FormPaper } from 'modules/common/components/FormPaper';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useFindOneLocalEntityById } from '../../hooks/useFindOneLocalEntityById';
import { useFindAuditLogsByModuleAndEntity } from '../../hooks/useFindAuditLogsByModuleAndEntity';

const AuditLogHistoryChangeSummary = () => {
  const { t } = useTranslation('auditLog');
  const { entity } = useFindOneLocalEntityById();
  const { data } = useFindAuditLogsByModuleAndEntity(entity?._id as string, entity?.module as string);
  return (
    <FormPaper nm title={t('summary.title')}>
      <pre> {JSON.stringify(data, null, 2)} </pre>
    </FormPaper>
  );
};

export default memo(AuditLogHistoryChangeSummary);
