import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Dialog, DialogActions, DialogContent, Grid } from '@mui/material';
import { ConditionContainer, DialogForm, Form, HandlerError, LoadingButton, SkeletonForm } from '@dfl/mui-react-common';
import { USERS_ERRORS } from 'modules/security/users/constants/errors';
import FormDiscountField from 'modules/inventory/product/components/FormDiscountField/FormDiscountField';
import { ModifyCommissionConfirmationMessage } from 'modules/inventory/provider/supplier/components/ConfirmationMessage';
import { IPriceConfigUpdate } from '../../interfaces/IWarehouseSupplier';
import useWarehouseSupplierCommissionUpdate from '../../hooks/useWarehouseSupplierCommissionUpdate';

type UserCreateModalProps = {
  open: boolean;
  title: string;
  dataError?: any;
  initValue?: IPriceConfigUpdate;
  loadingInitData?: boolean;
  // Methods
  onClose: () => void;
};

const WarehouseSupplierCommissionModalActions = ({
  open,
  title,
  loadingInitData,
  initValue,
  onClose,
}: UserCreateModalProps) => {
  const { t } = useTranslation('supplier');
  const [confirmOpen, setConfirmOpen] = useState(false);
  const { control, handleSubmit, onSubmit, isLoading, error, reset } = useWarehouseSupplierCommissionUpdate(onClose, initValue);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

  const handleConfirmOpen = () => {
    setConfirmOpen(true);
  };

  const handleConfirmClose = () => {
    setConfirmOpen(false);
  };

  const handleConfirmSubmit = () => {
    onSubmit();
    setConfirmOpen(false);
  };

  return (
    <>
      <DialogForm isLoading={loadingInitData} open={open} onClose={handleClose} title={title} maxWidth='xs'>
        <DialogContent>
          <ConditionContainer active={!loadingInitData} alternative={<SkeletonForm numberItemsToShow={2} />}>
            <HandlerError error={error} errors={USERS_ERRORS} />
            <Form
              onSubmit={handleSubmit(handleConfirmOpen)}
              control={control}
              isLoading={isLoading}
              size={'small'}
              id={'warehouse-supplier-commission-form'}
              dark
            >
              <Grid container spacing={{ xs: 1, md: 2 }} pt={2}>
                <Grid item xs={12}>
                  <FormDiscountField
                    fullWidth
                    name='priceConfig'
                    label={t('warehouse:availableSupplier.fields.commission')}
                    size='medium'
                  />
                </Grid>
              </Grid>
            </Form>
          </ConditionContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{t('common:cancel')}</Button>
          <LoadingButton variant='contained' type='submit' loading={isLoading} form='warehouse-supplier-commission-form'>
            {t('common:save')}
          </LoadingButton>
        </DialogActions>
      </DialogForm>
      <Dialog open={confirmOpen}>
        <DialogActions>
          <Button onClick={handleConfirmClose}>{t('common:cancel')}</Button>
          <LoadingButton
            variant='contained'
            onClick={handleConfirmSubmit}
            loading={isLoading}
            form='warehouse-supplier-commission-form'
          >
            {t('common:save')}
          </LoadingButton>
        </DialogActions>
      </Dialog>
      <ModifyCommissionConfirmationMessage
        isLoading={isLoading}
        confirmOpen={confirmOpen}
        handleConfirmClose={handleConfirmClose}
        handleConfirmSubmit={handleConfirmSubmit}
      />
    </>
  );
};

export default memo(WarehouseSupplierCommissionModalActions);
