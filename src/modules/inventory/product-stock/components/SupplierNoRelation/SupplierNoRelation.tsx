import { memo, useCallback, useState } from 'react';
import { IWarehouseSupplierNoExist } from '../../interfaces/IStockSummary';
import DetailHeaderAction from '../DetailHeaderAction/DetailHeaderAction';
import { Stack } from '@mui/material';
import SupplierNoRelationList from './SupplierNoRelationList';
import WarehouseSupplierCreateModal from 'modules/inventory/warehouse/containers/WarehouseSupplierCreateModal';
import { PriceType } from 'modules/inventory/product/interfaces/IProductPriceDetails';
import { useToggle } from '@dfl/hook-utils';
import { IWarehouse } from 'modules/inventory/warehouse/interfaces';
import { ProviderCommissionHeader } from '../HandleErrors/StockHandlerError';
import { ISupplier } from 'modules/inventory/provider/supplier/interfaces';
import { IWarehouseSupplier } from 'modules/inventory/warehouse/interfaces/IWarehouseSupplier';
export type SupplierNoRelationProps = {
  items?: IWarehouseSupplierNoExist[];
  onInitialClose: () => void;
};

const SupplierNoRelation = ({ items, onInitialClose }: SupplierNoRelationProps) => {
  const { isOpen, onClose, onOpen } = useToggle(false);
  const [initValue, setInitValue] = useState<IWarehouseSupplier>({
    priceConfig: {
      type: PriceType.PERCENT,
      value: 10,
    },
    supplier: null,
    warehouse: null,
  });

  const handleOpen = useCallback(
    (supplier: ISupplier, warehouse: IWarehouse) => {
      setInitValue((prevState) => ({
        ...prevState,
        supplier,
        warehouse,
      }));
      onOpen();
    },
    [onOpen, setInitValue],
  );

  return (
    <Stack gap={1} minHeight={400} maxHeight={600}>
      <DetailHeaderAction onClose={onInitialClose} title='warehouse.import.summary.error.item4' />
      <SupplierNoRelationList items={items} handleOpen={handleOpen} />

      <WarehouseSupplierCreateModal
        open={isOpen}
        readOnly
        initValue={initValue}
        onClose={onClose}
        title={<ProviderCommissionHeader />}
        subtitle='stock:warehouse.provider.subtitle'
      />
    </Stack>
  );
};

export default memo(SupplierNoRelation);
