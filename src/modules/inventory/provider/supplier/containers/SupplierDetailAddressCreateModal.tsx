import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { SIGNUP_ERRORS } from 'modules/authentication/constants/login.errors';
import { mapGetOneErrors } from 'constants/errors';
import { SupplierGeneralAddressForm } from '../components/SupplierGeneralAddressForm';
import SUpplierGeneralAddressSkeleton from '../components/SupplierGeneralAddressForm/SUpplierGeneralAddressSkeleton';
import useSupplierAddressCreateForm from '../hooks/useSupplierAddressCreateForm';
import { ISupplier } from '../interfaces';

type SupplierDetailAddressCreateModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  initValue?: Partial<ISupplier>;
  onClose: () => void;
};
const SupplierDetailAddressCreateModal = ({
  title = 'create',
  open,
  onClose,
  dataError,
  initValue,
  loadingInitData,
}: SupplierDetailAddressCreateModalProps) => {
  const { t } = useTranslation('provider');
  const { control, onSubmit, isLoading, reset, error } = useSupplierAddressCreateForm(onClose, initValue);
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
      aria-labelledby={'provider-supplier-address-creation-title'}
    >
      <DialogContent>
        {dataError && <HandlerError error={dataError} errors={SIGNUP_ERRORS} mapError={mapGetOneErrors} />}

        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<SUpplierGeneralAddressSkeleton />}>
            <SupplierGeneralAddressForm error={error} isLoading={isLoading} control={control} onSubmit={onSubmit} />
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

export default memo(SupplierDetailAddressCreateModal);
