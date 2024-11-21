import { memo, useEffect, useMemo } from 'react';
import { useToggle } from '@dfl/hook-utils';
import WarehouseSupplierCreateModal from 'modules/inventory/warehouse/containers/WarehouseSupplierCreateModal';
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { WarningOutlined } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import warning from 'assets/images/handlers/warning-supplier.png';
import { HandlerError } from '@dfl/mui-react-common';
import { pick } from 'lodash';

import { IWarehouseSupplierNoExist } from '../../interfaces/IStockSummary';
import { PriceType } from 'modules/inventory/product/interfaces/IProductPriceDetails';
type StockHandleErrorProps = {
  error: any;
  loadingInitData: boolean;
};

const StockHandlerError = ({ error, loadingInitData }: StockHandleErrorProps) => {
  const warehouseSupplierNoExist = useMemo(
    () => error?.details?.warehouseSupplierNoExist?.[0],
    [error],
  ) as IWarehouseSupplierNoExist;
  const { isOpen, onClose, onOpen } = useToggle(false);
  useEffect(() => {
    if (warehouseSupplierNoExist) {
      onOpen();
    }
  }, [onOpen, warehouseSupplierNoExist]);

  if (warehouseSupplierNoExist) {
    return (
      <WarehouseSupplierCreateModal
        open={isOpen}
        readOnly
        initValue={{
          priceConfig: {
            type: PriceType.PERCENT,
            value: 10,
          },
          ...pick(warehouseSupplierNoExist, ['warehouse', 'supplier']) as any
        }}
        loadingInitData={loadingInitData}
        onClose={onClose}
        title={<ProviderCommissionHeader />}
        subtitle='stock:warehouse.provider.subtitle'
      />
    );
  }

  return <HandlerError error={error} />;
};

export default memo(StockHandlerError);

export const ProviderCommissionHeader = () => {
  const { t } = useTranslation('stock');
  return (
    <ListItem sx={{ p: 0, m: '0 0 4px 0' }}>
      <ListItemAvatar sx={{ minWidth: 30 }}>
        <Avatar src={warning} variant='square' sx={{ objectFit: 'contain', width: 25, height: 25 }}>
          <WarningOutlined color='warning' />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primaryTypographyProps={{ fontWeight: 600, m: 0 }} primary={t('warehouse.provider.title')} />
    </ListItem>
  );
};
