import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import useCollectionsCreateForm from 'modules/cms/collections/hooks/useCollectionsCreateForm';
import { ICollection } from 'modules/cms/collections/interfaces';
import { CollectionsForm, CollectionsFormSkeleton } from 'modules/cms/collections/components/CollectionsForm';
import { TransTypography } from 'components/TransTypography';
import CollectionHandlerError from '../components/HandleErrors/CollectionHandlerError';
import { ConfirmDialog } from 'components/CollectionActions';
import warning from 'assets/images/collection/warning.webp';

type CollectionsCreateModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  initValue?: ICollection;
  onClose: () => void;
};
const CollectionsCreateModal = ({
  title = 'create',
  open,
  onClose,
  dataError,
  initValue,
  loadingInitData,
}: CollectionsCreateModalProps) => {
  const { t } = useTranslation('collection');

  const {
    control,
    onSubmit,
    onForceSubmit,
    isLoading,
    reset,
    error,
    setValue,
    onConfirmClose,
    onForceTypeSubmit,
    openConfirm,
  } = useCollectionsCreateForm(onClose, initValue);
  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

  return (
    <>
      <DialogForm
        open={open}
        onClose={handleClose}
        isLoading={loadingInitData}
        title={
          <TransTypography
            component='h2'
            fontWeight={700}
            message={`collection:${title}`}
            values={{ name: t(`contentType.${initValue?.contentType ?? ''}`) }}
          />
        }
        aria-labelledby={'collections-creation-title'}
      >
        <DialogContent>
          {dataError && <HandlerError error={dataError} />}

          {!dataError && (
            <ConditionContainer active={!loadingInitData} alternative={<CollectionsFormSkeleton />}>
              <CollectionHandlerError error={error} isLoading={isLoading} onConfirm={onForceSubmit} />
              <CollectionsForm isLoading={isLoading} control={control} onSubmit={onSubmit} setValue={setValue} />
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
            form='collection-form'
          >
            {t('common:save')}
          </LoadingButton>
        </DialogActions>
      </DialogForm>

      {/* only change CUSTOM to DYNAMIC */}
      <ConfirmDialog
        open={openConfirm}
        title={t('collection:confirmForceType.title')}
        confirmationMessage={t('collection:confirmForceType.subtitle')}
        onClose={onConfirmClose}
        isLoading={isLoading}
        onConfirm={onForceTypeSubmit}
        confirmButtonText={t('common:confirmation.confirm')}
        imageUrl={warning}
      />
    </>
  );
};

export default memo(CollectionsCreateModal);
