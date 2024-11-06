import { Button, Stack } from '@mui/material';
import { ManufactureForm } from '../components/ManufactureForm';
import useManufactureCreateForm from '../hooks/useManufactureCreateForm';
import { IManufacture } from '../interfaces';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';

interface IManufactureEditBasicInfoContainer {
  onClose: () => void;
  initValue: IManufacture;
}

const ManufactureEditBasicInfoContainer = ({ onClose, initValue }: IManufactureEditBasicInfoContainer) => {
  const { control, onSubmit, isLoading, error, formState } = useManufactureCreateForm(onClose, initValue);
  const { t } = useTranslation('common');

  return (
    <>
      <ManufactureForm isLoading={isLoading} onSubmit={onSubmit} control={control} error={error} withImage={false} />
      <Stack mt={{ xs: 1, md: 3 }} gap={1} justifyContent={'end'} direction={'row'}>
        <Button onClick={onClose}>{t('common:cancel')}</Button>
        <LoadingButton
          variant='contained'
          type={'submit'}
          loading={isLoading}
          disabled={!formState?.isDirty || !!error || !initValue._id}
          form='form'
        >
          {t('save')}
        </LoadingButton>
      </Stack>
    </>
  );
};

export default ManufactureEditBasicInfoContainer;
