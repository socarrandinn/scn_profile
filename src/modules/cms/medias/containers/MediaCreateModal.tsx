import { memo } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { DialogForm } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { BannerFileForm } from 'modules/cms/banners/components/BannerFileForm';

type Props = {
  open: boolean;
  onClose: VoidFunction;
};
const MediaCreateModal = ({ onClose, open }: Props) => {
  const { t } = useTranslation('media');
  const { control } = useForm({ defaultValues: { image: [] } });

  return (
    <DialogForm
      open={open}
      onClose={onClose}
      title={t('create')}
      aria-labelledby={'media-creation-title'}
      maxWidth={'md'}
    >
      <DialogContent>
        <BannerFileForm view={'desktop'} control={control} error={null} isLoading={false} maxFiles={5} />
      </DialogContent>
      <DialogActions>
        <Button variant='grey' onClick={onClose}>{t('common:cancel')}</Button>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(MediaCreateModal);
