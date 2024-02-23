import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useFindOneLocalEntityById } from '../../hooks/useFindOneLocalEntityById';
import { PaperSection } from 'components/PaperSection';
import HistoryChangeSummaryTraceTable from '../AuditLogHistoryChange/HistoryChangeSummaryTraceTable';
import { useAuditLogFunction } from '../../hooks/useAuditLogFunction';
import { keysToExclude } from '../../constants/audit-log-keys-exclude';
import { sxFormPaper } from '../AuditLogHistoryChange/styled';

const AuditLogHistoryChangeSummaryTable = () => {
  const { t } = useTranslation('auditLog');
  const { entity } = useFindOneLocalEntityById();
  const { onOneChangeTrace, onExcludeKeysFromObject } = useAuditLogFunction();
  const trace = onExcludeKeysFromObject(entity?.payload, keysToExclude);
  const changes = onOneChangeTrace(trace);
  return (
    <PaperSection nm title={t('summary.title')} sx={sxFormPaper.sx}>
      <HistoryChangeSummaryTraceTable changes={changes} />
    </PaperSection>
  );
};

export default memo(AuditLogHistoryChangeSummaryTable);
