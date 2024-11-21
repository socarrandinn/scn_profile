import { memo, useCallback, useState } from 'react';
import { IWarehouseSupplierNoExist } from '../../interfaces/IStockSummary';
import DetailHeaderAction from '../DetailHeaderAction/DetailHeaderAction';
import { Stack } from '@mui/material';
import SupplierNoRelationList from './SupplierNoRelationList';
import WarehouseSupplierCreateModal from 'modules/inventory/warehouse/containers/WarehouseSupplierCreateModal';
import { PriceType } from 'modules/inventory/product/interfaces/IProductPriceDetails';
import { useToggle } from '@dfl/hook-utils';
import { IWarehouseSummary } from 'modules/inventory/warehouse/interfaces';
import { ProviderCommissionHeader } from '../HandleErrors/StockHandlerError';
import { ISupplierSummary } from 'modules/inventory/provider/supplier/interfaces';
import { IWarehouseSupplier } from 'modules/inventory/warehouse/interfaces/IWarehouseSupplier';
export type SupplierNoRelationProps = {
  items?: IWarehouseSupplierNoExist[];
  onInitialClose: () => void;
};

type ValueProps = Omit<IWarehouseSupplier, 'supplier' | 'warehouse'> & {
  supplier: ISupplierSummary | null;
  warehouse: IWarehouseSummary | null;
};

const SupplierNoRelation = ({ items, onInitialClose }: SupplierNoRelationProps) => {
  const { isOpen, onClose, onOpen } = useToggle(false);
  const [initValue, setInitValue] = useState<ValueProps>({
    priceConfig: {
      type: PriceType.PERCENT,
      value: 10,
    },
    supplier: null,
    warehouse: null,
  });

  const handleOpen = useCallback(
    (supplier: ISupplierSummary, warehouse: IWarehouseSummary) => {
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
      <DetailHeaderAction onClose={onInitialClose} title='warehouse.import.summary.error.warehouseSupplierNoExist' />
      {/* // todo define disabled supplier by add commission */}
      <SupplierNoRelationList items={items} handleOpen={handleOpen} />
      <WarehouseSupplierCreateModal
        open={isOpen}
        readOnly
        initValue={initValue as IWarehouseSupplier}
        onClose={onClose}
        title={<ProviderCommissionHeader />}
        subtitle='stock:warehouse.provider.subtitle'
      />
    </Stack>
  );
};

export default memo(SupplierNoRelation);
