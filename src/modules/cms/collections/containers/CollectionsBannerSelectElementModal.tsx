import { memo, useCallback, useEffect } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { ICollectionElementRequest } from 'modules/cms/collections/interfaces';
import useCollectionElementsAddForm from '../hooks/useCollectionElementsAddForm';
import { CollectionElementsFormSkeleton } from '../components/CollectionElementsForm';
import { COLLECTION_CONTENT_TYPE } from '../constants/collection-types';
import BannerGalleryContainer from 'modules/cms/banners/components/BannerGallery/BannerGalleryContainer';
import useSelectBannerContext from 'modules/cms/banners/context/useSelectBannerContext';
import { useSearchParams } from 'react-router-dom';
import { BANNER_ELEMENT_OPERATION } from 'modules/cms/banners/interfaces';

type CollectionsBannerSelectElementModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  initValue?: ICollectionElementRequest;
  onClose: () => void;
  contentType: COLLECTION_CONTENT_TYPE;
};
const CollectionsBannerSelectElementModal = ({
  title = 'create',
  open,
  onClose,
  dataError,
  initValue,
  loadingInitData,
  contentType,
}: CollectionsBannerSelectElementModalProps) => {
  const { t } = useTranslation('collection');
  const { clearSelection, elements } = useSelectBannerContext();

  const { isLoading, reset, onSubmit, setValue } = useCollectionElementsAddForm(initValue, contentType, onClose);

  /* set elements */
  useEffect(() => {
    if (elements) {
      setValue('elements', elements);
    }
  }, [elements, setValue]);

  const handleClose = useCallback(
    (_e: any, reason?: 'backdropClick' | 'escapeKeyDown') => {
      if (reason !== 'backdropClick') {
        onClose?.();
        clearSelection?.();
        reset();
      }
    },
    [clearSelection, onClose, reset],
  );

  return (
    <DialogForm
      open={open}
      onClose={handleClose}
      isLoading={loadingInitData}
      title={t(title)}
      aria-labelledby={'collections-creation-title'}
      maxWidth='md'
      disableEscapeKeyDown={true}
    >
      <DialogContent>
        {dataError && <HandlerError error={dataError} />}

        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<CollectionElementsFormSkeleton />}>
            <BannerGalleryContainer />
          </ConditionContainer>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{t('common:cancel')}</Button>
        <LoadingButton
          variant='contained'
          onClick={onSubmit}
          loading={isLoading || loadingInitData}
          disabled={!!dataError || elements?.length === 0}
          form='collection-elements-form'
        >
          {t('common:save')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(CollectionsBannerSelectElementModal);

type Props = {
  collectionId: string;
};
export const CollectionsBannerSelectElementAction = ({ collectionId }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const entityId = searchParams.get('addElement');

  const handleCloseEdit = useCallback(() => {
    entityId && searchParams.delete('addElement');
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams, entityId]);

  return (
    <CollectionsBannerSelectElementModal
      onClose={handleCloseEdit}
      open={!!entityId}
      contentType={COLLECTION_CONTENT_TYPE.BANNER}
      initValue={{
        collectionId,
        elements: [],
        operation: BANNER_ELEMENT_OPERATION.EXISTS_ELEMENT,
      }}
      title='addElement'
    />
  );
};
