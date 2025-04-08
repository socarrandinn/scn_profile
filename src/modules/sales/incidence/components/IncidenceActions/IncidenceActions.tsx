import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { FormPaper } from 'modules/common/components/FormPaper';
import IncidenceActionsForm from './IncidenceActionsForm';
import { Typography } from '@mui/material';
import IncidenceHistoryActions from '../IncidenceHistoryActions';

const IncidenceActions = ({ id }: { id: string }) => {
  const { t } = useTranslation('incidence');

  return (
    <FormPaper
      title={t('actions.title')}
      variant={{ title: 'h4' }}
      mbHeader={2}
      subtitle={t('actions.subtitle')}
    >
      <IncidenceActionsForm id={id} />
      <IncidenceHistoryActions />
    </FormPaper>
  );
};

export default memo(IncidenceActions);
