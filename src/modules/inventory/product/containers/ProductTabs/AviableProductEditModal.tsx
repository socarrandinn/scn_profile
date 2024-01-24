import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { UpdateAviableProductForm } from 'modules/inventory/product/components/UpdateAviableForm';
import UpdateAviableProductFormSkeleton
  from 'modules/inventory/product/components/UpdateAviableForm/UpdateAviableProductFormSkeleton';
import useAddAviableProductStoreAreaForm
  from 'modules/inventory/settings/store-area/hooks/useAddAviableProductStoreAreaForm';
import { IStock } from 'modules/inventory/store/interfaces';

type AviableProductEditModalProps = {
  open: boolean;
  productId: string;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  initValue?: IStock;
  onClose: () => void;
};
const AviableProductEditModal = ({
  title = 'stock.title',
  open,
  onClose,
  dataError,
  initValue,
  loadingInitData,
  productId,
}: AviableProductEditModalProps) => {
  const { t } = useTranslation('product');
  const {
    control,
    onSubmit,
    isLoading,
    reset,
    error
  } = useAddAviableProductStoreAreaForm(productId, onClose, initValue);
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
            aria-labelledby={'storeArea-creation-title'}
        >
            <DialogContent>
                {dataError && <HandlerError error={dataError}/>}

                {!dataError && (
                    <ConditionContainer active={!loadingInitData} alternative={<UpdateAviableProductFormSkeleton/>}>
                        <UpdateAviableProductForm error={error} isLoading={isLoading} control={control}
                                                  onSubmit={onSubmit}/>
                    </ConditionContainer>
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>{t('common:cancel')}</Button>
                <LoadingButton
                    variant='contained'
                    color='success'
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

export default memo(AviableProductEditModal);
