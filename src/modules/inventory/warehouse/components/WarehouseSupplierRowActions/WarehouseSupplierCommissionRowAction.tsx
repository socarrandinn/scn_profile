import { LoadingButton } from '@dfl/mui-react-common';
import { EditOutlined } from '@mui/icons-material';
import { memo } from 'react';
import { WarehouseSupplierCommissionModalActions } from '../WarehouseSupplierCommissionModalActions';
import { useTranslation } from 'react-i18next';
import { IPriceConfigUpdate } from '../../interfaces/IWarehouseSupplier';

type WarehouseSupplierCommissionRowActionProps = {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  isLoading: boolean;
  initValue: IPriceConfigUpdate;
};

const WarehouseSupplierCommissionRowAction = ({
  isLoading,
  onOpen,
  onClose,
  open,
  initValue,
}: WarehouseSupplierCommissionRowActionProps) => {
  const { t } = useTranslation('supplier');

  return (
    <>
      <LoadingButton variant='outlined' onClick={onOpen} loading={isLoading} startIcon={<EditOutlined />}>
        {t('commission')}
      </LoadingButton>
      <WarehouseSupplierCommissionModalActions
        title={t('commissionModify')}
        onClose={onClose}
        open={open}
        initValue={initValue}
      />
    </>
  );
};

export default memo(WarehouseSupplierCommissionRowAction);
