import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { IStatus, StatusPicker } from '@dfl/mui-react-common';
import useCausesIncidenceUpdateStatus from '../../hooks/useCausesIncidenceUpdateStatus';
import { CAUSE_INCIDENCE_STATUS } from '../../constants/causes-incidence-status';

type CausesIncidenceStatusPickerProps = {
  value: IStatus;
  causeId: string;
  statusColor?: string;
  isLoading?: boolean;
  isError?: boolean;
  readOnly?: boolean;
};

const CausesIncidenceStatusPicker = ({ value, causeId, readOnly = false }: CausesIncidenceStatusPickerProps) => {
  const { t } = useTranslation('causesIncidence');
  const { mutateAsync, isLoading: loadingChange } = useCausesIncidenceUpdateStatus(causeId);

  return (
    <StatusPicker
      readOnly={readOnly}
      options={CAUSE_INCIDENCE_STATUS.map((option) => ({ ...option, title: t(option.title) }))}
      name='active'
      size={'small'}
      value={{ ...value, title: t(value?.title) }}
      isLoading={loadingChange}
      onChange={(status: IStatus) => mutateAsync(status?._id)}
    />
  );
};

export default memo(CausesIncidenceStatusPicker);
