import { useToggle } from '@dfl/hook-utils';
import { useWarehouseDetail } from 'modules/inventory/warehouse/context/WarehouseContext';
import ProductWarehouseStockCreateModal from '../../containers/ProductWarehouseStockCreateModal';
import { AddButton } from '@dfl/mui-admin-layout';
import { IWarehouse } from 'modules/inventory/warehouse/interfaces';
import { STOCK_OPERATIONS } from '../../constants/stock-operations.constants';

const StockWarehouseAction = () => {
  const { warehouseId } = useWarehouseDetail();
  const { isOpen, onClose, onOpen } = useToggle(false);
  return (
    <>
      <AddButton action={onOpen} />

      <ProductWarehouseStockCreateModal
        title='warehouse.title'
        subtitle='warehouse.subtitle'
        open={isOpen}
        onClose={onClose}
        initValue={{
          warehouse: warehouseId as unknown as IWarehouse,
          note: '',
          operation: STOCK_OPERATIONS.ADDED,
          quantity: 1,
          item: null,
        }}
      />
    </>
  );
};

export default StockWarehouseAction;
