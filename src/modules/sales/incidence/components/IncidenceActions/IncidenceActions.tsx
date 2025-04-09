import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { FormPaper } from 'modules/common/components/FormPaper';
import IncidenceActionsForm from './IncidenceActionsForm';
import { Typography } from '@mui/material';
import IncidenceHistoryActions from '../IncidenceHistoryActions';
import { useIncidenceDetail } from '../../context/IncidenceDetailContext';
import { TermFilter } from '@dofleini/query-builder';
import { useFindAuditLogsByEntity } from 'modules/security/audit-logs/hooks/useFindAuditLogsByEntity';
import IncidenceSolutionsMenu from '../IncidenceSolutionsMenu/IncidenceSolutionsMenu';

const IncidenceActions = () => {
  const { t } = useTranslation('incidence');
  const { incidenceId } = useIncidenceDetail();

  const filters = useMemo(() => {
    return new TermFilter({ field: 'event', value: 'ADD_ACTION' })
  }, []);

  const { data } = useFindAuditLogsByEntity(incidenceId, filters);



  return (
    <FormPaper
      title={t('actions.title')}
      variant={{ title: 'h4' }}
      mbHeader={2}
      subtitle={t('actions.subtitle')}
    >
      <IncidenceActionsForm id={incidenceId} />
      <IncidenceSolutionsMenu />
      {data?.data?.length > 0 && <IncidenceHistoryActions data={data?.data} />}
    </FormPaper>
  );
};

export default memo(IncidenceActions);
