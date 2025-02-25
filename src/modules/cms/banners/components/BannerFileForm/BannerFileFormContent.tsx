import { memo, useCallback } from 'react';
import { useCollectionBannerContext } from '../../context/useCollectionBannerContext';
import BannerFileForm from './BannerFileForm';
import { useForm } from 'react-hook-form';
import { Button, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';

const BannerFileFormContent = ({ onClose }: { onClose?: VoidFunction }) => {
  const view = useCollectionBannerContext((state) => state.view);
  const { control, watch } = useForm({ defaultValues: { image: [] } });
  const { toggleMedia } = useCollectionBannerContext();
  const { t } = useTranslation('common');
  const images = watch('image');

  const handleSubmit = useCallback(() => {
    if (images?.length === 0) return;
    toggleMedia(images?.[0] as any);
    onClose?.();
  }, [images, onClose, toggleMedia]);

  return (
    <Stack>
      <BannerFileForm view={view} control={control} error={null} isLoading={false} />
      <Stack gap={1} flexDirection={'row'} sx={{ justifyContent: 'end', mt: 2 }}>
        <Button variant='grey' onClick={onClose}>
          {t('common:cancel')}
        </Button>
        <Button
          onClick={handleSubmit}
          disabled={images?.length === 0}
          variant='contained'
          type={'submit'}
          form='banner-form'
        >
          {t('common:save')}
        </Button>
      </Stack>
    </Stack>
  );
};

export default memo(BannerFileFormContent);
