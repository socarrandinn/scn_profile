import { memo, ReactNode, useCallback } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton, SkeletonForm } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { WarehouseSupplierForm } from '../components/WarehouseSupplierForm';
import { IWarehouseSupplier } from '../interfaces/IWarehouseSupplier';
import useWarehouseProviderSupplierCreateForm from '../hooks/useWarehouseProviderSupplierCreateForm';

type WarehouseSupplierCreateModalProps = {
  open: boolean;
  onClose: () => void;
  title: ReactNode;
  subtitle?: string;
  dataError?: any;
  loadingInitData?: boolean;
  userId?: string | null;
  Form?: any;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  initValue?: IWarehouseSupplier;
  readOnly?: boolean;
};

const WarehouseSupplierCreateModal = ({
  open,
  onClose,
  title,
  subtitle,
  dataError,
  loadingInitData,
  maxWidth,
  initValue,
  readOnly,
}: WarehouseSupplierCreateModalProps) => {
  const { t } = useTranslation(['users', 'supplier']);
  const { control, onSubmit, isLoading, error, reset } = useWarehouseProviderSupplierCreateForm(initValue, onClose);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

  return (
    <DialogForm
      isLoading={loadingInitData}
      open={open}
      title={typeof title === 'string' ? t(title) : title}
      subtitle={typeof subtitle === 'string' ? t(subtitle) : subtitle}
      aria-labelledby={'warehouse-supplier-creation-title'}
      onClose={handleClose}
      maxWidth={maxWidth || 'xs'}
    >
      <DialogContent>
        <HandlerError error={dataError} />
        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<SkeletonForm numberItemsToShow={5} />}>
            <HandlerError error={error} />
            <WarehouseSupplierForm control={control} isLoading={isLoading} onSubmit={onSubmit} readOnly={readOnly} />
          </ConditionContainer>
        )}
      </DialogContent>
      <DialogActions>
        <Button variant='grey' onClick={handleClose}>{t('common:cancel')}</Button>
        <LoadingButton variant='contained' type={'submit'} loading={isLoading} form='warehouse-supplier-form'>
          {t('common:save')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(WarehouseSupplierCreateModal);
