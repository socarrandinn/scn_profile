import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { ICollection } from 'modules/cms/collections/interfaces';
import { CollectionsFormSkeleton } from 'modules/cms/collections/components/CollectionsForm';
import CollectionsUpdateTypeForm from '../components/CollectionsForm/CollectionsUpdateTypeForm';
import useCollectionsUpdateTypeForm from '../hooks/useCollectionsUpdateTypeForm';
import { DYNAMIC_COLLECTION_TYPE } from '../constants/collection-types';

type CollectionsDynamicUpdateModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  initValue?: Pick<ICollection, 'settings' | 'contentType' | '_id'>;
  onClose: () => void;
};

const CollectionsDynamicUpdateModal = ({
  title = 'create',
  open,
  onClose,
  dataError,
  initValue,
  loadingInitData,
}: CollectionsDynamicUpdateModalProps) => {
  const { t } = useTranslation('collection');

  const { control, onSubmit, isLoading, reset, error, setValue } = useCollectionsUpdateTypeForm(onClose, initValue);
  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

  return (
    <DialogForm
      open={open}
      onClose={handleClose}
      isLoading={loadingInitData}
      title={title}
      aria-labelledby={'collections-update-type-title'}
    >
      <DialogContent>
        {dataError && <HandlerError error={dataError} />}

        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<CollectionsFormSkeleton />}>
            <CollectionsUpdateTypeForm
              error={error}
              isLoading={isLoading}
              control={control}
              onSubmit={onSubmit}
              setValue={setValue}
              excludes={[DYNAMIC_COLLECTION_TYPE.CUSTOM]}
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
          form='collection-type-form'
        >
          {t('common:save')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(CollectionsDynamicUpdateModal);
