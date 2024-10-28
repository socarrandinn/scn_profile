import { ConditionContainer, DialogForm, FlexBox, HandlerError } from '@dfl/mui-react-common';
import { LoadingButton } from '@mui/lab';
import { Button, DialogActions, DialogContent, Typography } from '@mui/material';
import { mapGetOneErrors } from 'constants/errors';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { IAddProductStock } from '../interfaces/IStock';

import { isEmpty, isObject } from 'lodash';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import useStoreProductAddStock from '../hooks/useStoreProductAddStock';
import { StoreProductStockForm, StoreProductStockFormSkeleton } from '../components/StoreProductStockForm';

type StoreProductAddStockModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  warehouse: string;
  dataError?: any;
  initValue?: IAddProductStock;
  onClose: () => void;
};

const HeaderModal = () => {
  const { t } = useTranslation('product');
  return (
    <FlexBox
      maxWidth={'97%'}
      width={'97%'}
      justifyContent={'space-between'}
      alignItems={{ xs: 'flex-start' }}
      flexDirection={{ xs: 'column', md: 'row' }}
    >
      <Typography>{t('warehouseStockModal.action')}</Typography>
      <Button
        href={'../../../../../products.xlsx'}
        download='products.xlsx'
        target='_blank'
        variant='text'
        startIcon={<FileDownloadIcon />}
      >
        {t('warehouseStockModal.export')}
      </Button>
    </FlexBox>
  );
};
const StoreProductAddStockModal = ({
  open,
  warehouse,
  dataError,
  initValue,
  loadingInitData,
  onClose,
}: StoreProductAddStockModalProps) => {
  const { t } = useTranslation('common');
  const { control, onSubmit, isLoading, reset, error, watch, setError, clearErrors, resetField, errors, setValue } =
    useStoreProductAddStock(onClose, initValue);

  const isItemDisabled = watch('items')?.some((item) => !isObject(item?.item));

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

  return (
    <DialogForm
      open={open}
      // onClose={handleClose}
      maxWidth='lg'
      isLoading={loadingInitData}
      title={<HeaderModal />}
      aria-labelledby={'warehouse-creation-title'}
    >
      <DialogContent>
        {dataError && <HandlerError error={dataError} mapError={mapGetOneErrors} />}
        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<StoreProductStockFormSkeleton />}>
            <StoreProductStockForm
              error={error}
              isLoading={isLoading}
              control={control}
              setValue={setValue}
              warehouse={warehouse}
              watch={watch}
              onSubmit={onSubmit}
              {...{ setError, clearErrors, resetField, errors }}
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
          disabled={!!dataError || isItemDisabled || isEmpty(watch('items'))}
          form='product-stock-form'
        >
          {t('common:accept')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(StoreProductAddStockModal);
