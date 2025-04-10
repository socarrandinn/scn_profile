import { memo } from 'react';
import { RouterTab } from '@dfl/react-security';
import HeaderSummaryTabsSkeleton from 'modules/common/components/HeaderSummaryTabs/HeaderSummaryTabsSkeleton';
import { useIncidenceDetail } from '../../context/IncidenceDetailContext';
import { incidenceTabs } from '../../constants/incidence-tabs';
import IncidenceActionsHeader from '../IncidenceActionsHeader/IncidenceActionsHeader';
import { Section } from 'modules/common/components/HeaderSummaryTabs/styled';
import { IncidenceStatusPicker } from '../IncidenceStatusPicker';
import { INCIDENCE_STATUS_ENUM } from '../../constants/incidence-status';
import { DateValue, FlexBox } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import { EditIcon } from 'components/icons/EditIcon';
import { useToggle } from '@dfl/hook-utils';
import IncidenceCreateModal from '../../containers/IncidenceCreateModal';
import DeleteIcon from 'components/icons/DeleteIcon';
import { DeleteButton } from 'components/Actions/DeleteAction';
import { useDeleteIncidence } from '../../hooks/useDeleteIncidence';

const IncidenceHeaderActions = () => {
  const { t } = useTranslation('incidence');
  const { incidence, isLoading, error, incidenceId } = useIncidenceDetail();
  const { isOpen, onClose, onOpen } = useToggle();
  const { mutate, isLoading: loadingDelete } = useDeleteIncidence(incidenceId, onClose);
  return (

    <>
      <DeleteButton isLoading={loadingDelete} onDelete={mutate} disabled={incidence?.actions && incidence?.actions?.length > 0} />
      <Button variant='outlined' startIcon={<EditIcon />} onClick={onOpen}>
        {t('common:edit')}
      </Button>
      <IncidenceCreateModal
        title={'edit'}
        open={isOpen}
        onClose={onClose}
        initValue={incidence}
        loadingInitData={isLoading}
        dataError={error}
      />
    </>
  );
};

export default memo(IncidenceHeaderActions);
