import { memo, useCallback } from 'react';
import { IStock } from '../../interfaces/IStock';
import { ConditionContainer, DialogForm } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { Button, DialogActions, DialogContent, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { WarningOutlined } from '@mui/icons-material';
import ProviderCommissionRelationForm from '../../components/ProviderCommissionRelationForm/ProviderCommissionRelationForm';
import useProductWarehouseStockCreateForm from '../../hooks/useProductWarehouseStockCreateForm';
import { LoadingButton } from '@mui/lab';
import { ProviderCommissionRelationFormSkeleton } from '../../components/ProviderCommissionRelationForm';

type HandleErrorProviderProps = {
  initValue: IStock;
  open: boolean;
  loadingInitData: boolean;
  onClose: () => void;
};

const HandleErrorProvider = ({ initValue, loadingInitData, open, onClose }: HandleErrorProviderProps) => {
  const { t } = useTranslation('stock');
  const { control, onSubmit, isLoading, reset, error, setValue } = useProductWarehouseStockCreateForm(
    onClose,
    initValue,
  );

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

  const _title = (
    <ListItem>
      <ListItemIcon>
        <WarningOutlined color='warning' />
      </ListItemIcon>
      <ListItemText primary={t('warehouse.provider.title')} />
    </ListItem>
  );

  return (
    <DialogForm
      open={open}
      isLoading={loadingInitData}
      title={_title}
      subtitle={t('warehouse.provider.subtitle')}
      aria-labelledby={'stock-creation-title'}
    >
      <DialogContent>
        <ConditionContainer active={!loadingInitData} alternative={<ProviderCommissionRelationFormSkeleton />}>
          <ProviderCommissionRelationForm
            error={error}
            isLoading={isLoading}
            control={control}
            onSubmit={onSubmit}
            setValue={setValue}
          />
        </ConditionContainer>
      </DialogContent>
      <DialogActions sx={{ mt: 2 }}>
        <Button variant='outlined' onClick={handleClose}>
          {t('common:cancel')}
        </Button>
        <LoadingButton
          variant='contained'
          type={'submit'}
          loading={isLoading || loadingInitData}
          form='form-provider-commission'
        >
          {t('common:save')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(HandleErrorProvider);
