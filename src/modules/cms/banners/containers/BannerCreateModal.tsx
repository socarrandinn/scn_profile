import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import useBannerCreateForm from 'modules/cms/banners/hooks/useBannerCreateForm';
import { IBanner } from '../interfaces/IBanner';
import BannerFormSkeleton from '../components/BannerForm/BannerFormSkeleton';
import BannerForm from '../components/BannerForm/BannerForm';

type BannerCreateModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  initValue?: IBanner;
  onClose: () => void;
};
const BannerCreateModal = ({
  title = 'create',
  open,
  onClose,
  dataError,
  initValue,
  loadingInitData,
}: BannerCreateModalProps) => {
  const { t } = useTranslation('banner');
  const { control, onSubmit, isLoading, reset, error } = useBannerCreateForm(initValue, onClose);
  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

  return (
    <DialogForm
      open={open}
      onClose={handleClose}
      isLoading={loadingInitData}
      title={t(title)}
      aria-labelledby={'banner-creation-title'}
    >
      <DialogContent>
        {dataError && <HandlerError error={dataError} />}

        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<BannerFormSkeleton />}>
            <BannerForm error={error} control={control} onSubmit={onSubmit} isLoading={isLoading} />
          </ConditionContainer>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{t('common:cancel')}</Button>
        <LoadingButton
          variant='contained'
          type={'submit'}
          loading={isLoading || loadingInitData}
          disabled={!!dataError}
          form='form'
        >
          {t('common:save')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(BannerCreateModal);
