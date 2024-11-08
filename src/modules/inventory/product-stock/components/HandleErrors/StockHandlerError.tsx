import { memo, useMemo } from 'react';
import { STOCK_ERROR } from '../../constants/stock-errors';
import { useToggle } from '@dfl/hook-utils';

import WarehouseSupplierCreateModal from 'modules/inventory/warehouse/containers/WarehouseSupplierCreateModal';
import { IWarehouseSupplier } from 'modules/inventory/warehouse/interfaces/IWarehouseSupplier';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { WarningOutlined } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
type StockHandleErrorProps = {
  error: any;
  initValue?: IWarehouseSupplier;
  loadingInitData: boolean;
};

const StockHandlerError = ({ error, initValue, loadingInitData }: StockHandleErrorProps) => {
  const _reference = useMemo(() => error?.reference, [error]);
  const { isOpen, onClose } = useToggle(true);

  switch (_reference) {
    case STOCK_ERROR.NOT_RELATION_PROVIDER_COMMISSION:
      return (
        <WarehouseSupplierCreateModal
          open={isOpen}
          initValue={initValue}
          loadingInitData={loadingInitData}
          onClose={onClose}
          title={<ProviderCommissionHeader />}
          subtitle='stock:warehouse.provider.subtitle'
        />
      );

    default:
      return (
        <WarehouseSupplierCreateModal
          open={isOpen}
          initValue={initValue}
          loadingInitData={loadingInitData}
          onClose={onClose}
          title={<ProviderCommissionHeader />}
          subtitle='stock:warehouse.provider.subtitle'
        />
      );
    // return <HandlerError error={error} />;
  }
};

export default memo(StockHandlerError);

const ProviderCommissionHeader = () => {
  const { t } = useTranslation('stock');
  return (
    <ListItem sx={{ p: 0, m: 0 }}>
      <ListItemIcon sx={{ minWidth: 30 }}>
        <WarningOutlined color='warning' />
      </ListItemIcon>
      <ListItemText primaryTypographyProps={{ fontWeight: 600 }} primary={t('warehouse.provider.title')} />
    </ListItem>
  );
};
