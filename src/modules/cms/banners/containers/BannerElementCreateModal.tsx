import { memo, useCallback, useEffect, useMemo } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import useBannerElementCreateForm from 'modules/cms/banners/hooks/useBannerElementCreateForm';
import { IBannerCreateElementRequest } from '../interfaces/IBanner';
import BannerFormSkeleton from '../components/BannerForm/BannerFormSkeleton';
import BannerForm from '../components/BannerForm/BannerForm';
import { useCollectionBannerContext } from '../context/useCollectionBannerContext';
import { IMedia } from 'modules/cms/medias/interfaces/IMedia';

type BannerElementCreateModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  initValue?: IBannerCreateElementRequest;
  onClose: () => void;
  collectionId?: string;
};
const BannerElementCreateModal = ({
  title = 'create',
  open,
  onClose,
  dataError,
  initValue,
  loadingInitData,
}: BannerElementCreateModalProps) => {
  const { t } = useTranslation('banner');
  const { setMedia, media } = useCollectionBannerContext();

  const someDisabled = useMemo(
    () => [!!dataError, media?.desktop === null, media?.mobile === null].some(Boolean),
    [dataError, media?.desktop, media?.mobile],
  );

  useEffect(() => {
    setMedia({
      desktop: (initValue?.banner?.desktopImage as IMedia) ?? null,
      mobile: (initValue?.banner?.mobileImage as IMedia) ?? null,
    });
  }, [initValue?.banner?.desktopImage, initValue?.banner?.mobileImage, setMedia]);

  const { control, onSubmit, isLoading, reset, error } = useBannerElementCreateForm({
    defaultValues: initValue,
    onClose,
  });

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
    // setMedia({ desktop: null, mobile: null });
  }, [onClose, reset]);

  return (
    <DialogForm
      open={open}
      onClose={handleClose}
      isLoading={loadingInitData}
      title={t(title)}
      aria-labelledby={'banner-creation-title'}
      maxWidth={'sm'}
    >
      <DialogContent>
        {dataError && <HandlerError error={dataError} />}

        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<BannerFormSkeleton />}>
            <BannerForm
              error={error}
              control={control}
              onSubmit={onSubmit}
              isLoading={isLoading}
              name='banner'
              form='collection-banner-from'
            />
          </ConditionContainer>
        )}
      </DialogContent>
      <DialogActions>
        <Button variant='grey' onClick={handleClose}>
          {t('common:cancel')}
        </Button>
        <LoadingButton
          variant='contained'
          type={'submit'}
          loading={isLoading || loadingInitData}
          disabled={someDisabled}
          form='collection-banner-from'
        >
          {t('common:save')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(BannerElementCreateModal);
