import { memo, useCallback, useMemo } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton, SkeletonForm } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { USERS_ERRORS } from 'modules/security/users/constants/errors';
import useWarehouseProviderSupplierCreateForm, {
  initialUserInviteValue,
} from '../hooks/useWarehouseProviderSupplierCreateForm';
import { WarehouseSupplierForm } from '../components/WarehouseSupplierForm';
import { useWarehouseDetail } from '../context/WarehouseContext';

type WarehouseProviderSupplierCreateModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  dataError?: any;
  loadingInitData?: boolean;
  userId?: string | null;
  Form?: any;
};

const WarehouseProviderSupplierCreateModal = ({
  open,
  onClose,
  title,
  subtitle,
  dataError,
  loadingInitData,
}: WarehouseProviderSupplierCreateModalProps) => {
  const { t } = useTranslation(['users', 'supplier']);
  const { warehouseId } = useWarehouseDetail();

  const _initValue = useMemo(
    () => ({
      ...initialUserInviteValue,
      warehouse: warehouseId,
    }),
    [warehouseId],
  );

  const { control, onSubmit, isLoading, error, reset, watch } = useWarehouseProviderSupplierCreateForm(_initValue, onClose);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

  return (
    <DialogForm
      isLoading={loadingInitData}
      open={open}
      title={t(title)}
      subtitle={subtitle}
      aria-labelledby={'warehouse-supplier-creation-title'}
    >
      <DialogContent>
        <HandlerError error={dataError} />
        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<SkeletonForm numberItemsToShow={5} />}>
            <HandlerError error={error} errors={USERS_ERRORS} />
            <WarehouseSupplierForm control={control} isLoading={isLoading} onSubmit={onSubmit} watch={watch} />
          </ConditionContainer>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{t('common:cancel')}</Button>
        <LoadingButton variant='contained' type={'submit'} loading={isLoading} form='warehouse-supplier-form'>
          {t('common:save')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(WarehouseProviderSupplierCreateModal);
