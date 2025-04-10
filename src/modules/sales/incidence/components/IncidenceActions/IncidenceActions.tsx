import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { FormPaper } from 'modules/common/components/FormPaper';
import IncidenceActionsForm from './IncidenceActionsForm';
import IncidenceHistoryActions from '../IncidenceHistoryActions';
import { useIncidenceDetail } from '../../context/IncidenceDetailContext';
import IncidenceSolutionsMenu from '../IncidenceSolutionsMenu/IncidenceSolutionsMenu';

const IncidenceActions = () => {
  const { t } = useTranslation('incidence');
  const { incidenceId, incidence } = useIncidenceDetail();

  return (
    <FormPaper
      title={t('actions.title')}
      variant={{ title: 'h4' }}
      mbHeader={2}
      subtitle={t('actions.subtitle')}
    >
      <IncidenceActionsForm id={incidenceId} />
      <IncidenceSolutionsMenu />
      {incidence?.actions && <IncidenceHistoryActions data={incidence?.actions} />}
    </FormPaper>
  );
};

export default memo(IncidenceActions);
