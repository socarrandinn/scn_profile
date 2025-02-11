import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { ICollectionElement } from 'modules/cms/collections/interfaces';
import useCollectionElementsAddForm from '../hooks/useCollectionElementsAddForm';
import { CollectionElementsForm, CollectionElementsFormSkeleton } from '../components/CollectionElementsForm';
import { COLLECTION_CONTENT_TYPE } from '../constants/collection-types';

type CollectionsAddElementModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  initValue?: ICollectionElement;
  onClose: () => void;
  contentType: COLLECTION_CONTENT_TYPE;
};
const CollectionsAddElementModal = ({
  title = 'create',
  open,
  onClose,
  dataError,
  initValue,
  loadingInitData,
  contentType,
}: CollectionsAddElementModalProps) => {
  const { t } = useTranslation('collection');
  const { control, onSubmit, isLoading, reset, error } = useCollectionElementsAddForm(initValue, contentType, onClose);
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
      aria-labelledby={'collections-creation-title'}
    >
      <DialogContent>
        {dataError && <HandlerError error={dataError} />}

        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<CollectionElementsFormSkeleton />}>
            <CollectionElementsForm
              error={error}
              isLoading={isLoading}
              control={control}
              onSubmit={onSubmit}
              contentType={contentType}
            />
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
          form='collection-elements-form'
        >
          {t('common:save')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(CollectionsAddElementModal);
