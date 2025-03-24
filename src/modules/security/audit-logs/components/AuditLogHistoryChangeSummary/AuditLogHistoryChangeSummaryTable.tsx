import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useFindOneLocalEntityById } from '../../hooks/useFindOneLocalEntityById';
import { PaperSection } from 'components/PaperSection';
import { sxFormPaper } from '../AuditLogHistoryChange/styled';
import JsonView from '@uiw/react-json-view';
import { nordTheme } from '@uiw/react-json-view/nord';
import { Box } from '@mui/material';

const AuditLogHistoryChangeSummaryTable = () => {
  const { t } = useTranslation('auditLog');
  const { entity } = useFindOneLocalEntityById();
  // const { onOneChangeTrace, onExcludeKeysFromObject } = useAuditLogFunction();
  /* const trace = onExcludeKeysFromObject(entity?.payload, keysToExclude);
  const changes = onOneChangeTrace(trace); */
  return (
    <PaperSection nm title={t('summary.title')} sx={sxFormPaper.sx}>
      {/* <HistoryChangeSummaryTraceTable changes={changes} /> */}
      {entity?.payload && <JsonViewContent value={entity?.payload} />}
    </PaperSection>
  );
};

export default memo(AuditLogHistoryChangeSummaryTable);

const JsonViewContent = ({ value }: { value: object }) => {
  return (
    <Box
      sx={{
        paddingTop: 2,
        borderRadius: 0.5,
        overflow: 'hidden',
      }}
    >
      <JsonView value={value} style={nordTheme} />
    </Box>
  );
};
