import { EditOutlined } from '@mui/icons-material';
import { memo } from 'react';
import { WarehouseSupplierCommissionModalActions } from '../WarehouseSupplierCommissionModalActions';
import { useTranslation } from 'react-i18next';
import { IPriceConfigUpdate } from '../../interfaces/IWarehouseSupplier';
import { useToggle } from '@dfl/hook-utils';
import { Button } from '@mui/material';

type WarehouseSupplierCommissionRowActionProps = {
  initValue: IPriceConfigUpdate;
  disabled?: boolean;
};

const WarehouseSupplierCommissionRowAction = ({ initValue, disabled }: WarehouseSupplierCommissionRowActionProps) => {
  const { t } = useTranslation('supplier');
  const { isOpen, onClose, onOpen } = useToggle(false);
  return (
    <>
      <Button disabled={disabled} size='small' variant='outlined' onClick={onOpen} startIcon={<EditOutlined />}>
        {t('commission')}
      </Button>
      <WarehouseSupplierCommissionModalActions
        title={t('commissionModify')}
        onClose={onClose}
        open={isOpen}
        initValue={initValue}
      />
    </>
  );
};

export default memo(WarehouseSupplierCommissionRowAction);
