import { LoadingButton } from '@dfl/mui-react-common';
import { Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import useCauseCancellationSettingsForm from '../hooks/useCauseCancellationSettingsForm';
import CauseCancellationSettingsForm from '../components/CauseCancellationSettingsForm/CauseCancellationSettingsForm';

const CauseCancellationSettingsContainer = () => {
  const { t } = useTranslation('common');

  const { control, onSubmit, isLoading, error } = useCauseCancellationSettingsForm();

  return (
    <Stack gap={2}>
      <CauseCancellationSettingsForm control={control} onSubmit={onSubmit} error={error} isLoading={isLoading} />
      <Stack direction={'row'} justifyContent={'end'}>
        <LoadingButton loading={isLoading} variant='contained' type='submit' form='cause-cancellation-setting-form'>
          {t('save')}
        </LoadingButton>
      </Stack>
    </Stack>
  );
};

export default CauseCancellationSettingsContainer;
