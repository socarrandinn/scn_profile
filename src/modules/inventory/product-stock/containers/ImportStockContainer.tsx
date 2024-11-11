import { memo } from 'react';
import { IItemUpdateStockError, IStockDetailCallback, STOCK_SUMMARY_CASE } from '../interfaces/IStockSummary';
import { SupplierNoRelation } from '../components/SupplierNoRelation';
import { StockReductionNotPerformed } from '../components/StockNotPerformed';
import StockAdditionNotPerformed from '../components/StockNotPerformed/StockAdditionNotPerformed';

type ImportStockContainerProps = {
  _case: STOCK_SUMMARY_CASE;
  summary?: IStockDetailCallback;
  onClose: () => void;
};

const ImportStockContainer = ({ _case, summary, onClose }: ImportStockContainerProps) => {
  switch (_case) {
    case STOCK_SUMMARY_CASE.SUPPLIER_NO_RELATION:
      return (
        <SupplierNoRelation
          items={warehouseSupplierList || summary?.warehouseSupplierNoExist}
          onInitialClose={onClose}
        />
      );
    case STOCK_SUMMARY_CASE.STOCK_REDUCTION_NOT_PERFORMED:
      return (
        <StockReductionNotPerformed items={mockReductionItems || summary?.warehouseSupplierNoExist} onInitialClose={onClose} />
      );
    case STOCK_SUMMARY_CASE.STOCK_ADDICTION_NOT_PERFORMED:
      return (
        <StockAdditionNotPerformed items={mockAdditionItems || summary?.warehouseSupplierNoExist} onInitialClose={onClose} />
      );
  }
};

export default memo(ImportStockContainer);

// todo mockup data
export const warehouseSupplierList: any[] = [
  {
    item: 'Item-1',
    warehouse: '672b80fd579a83e537091a30',
    supplier: { _id: '672b80fd579a83e537091a30', name: 'Supplier-1' },
  },
  {
    item: 'Item-2',
    warehouse: '672b80fd579a83e537091a30',
    supplier: { _id: '672b80fd579a83e537091a30', name: 'Supplier-2' },
  },
  {
    item: 'Item-3',
    warehouse: '672b80fd579a83e537091a30',
    supplier: { _id: '672b80fd579a83e537091a30', name: 'Supplier-3' },
  },
  {
    item: 'Item-4',
    warehouse: '672b80fd579a83e537091a30',
    supplier: { _id: '672b80fd579a83e537091a30', name: 'Supplier-4' },
  },
  {
    item: 'Item-5',
    warehouse: '672b80fd579a83e537091a30',
    supplier: { _id: '672b80fd579a83e537091a30', name: 'Supplier-5' },
  },
  {
    item: 'Item-6',
    warehouse: '672b80fd579a83e537091a30',
    supplier: { _id: '672b80fd579a83e537091a30', name: 'Supplier-6' },
  },
  {
    item: 'Item-7',
    warehouse: '672b80fd579a83e537091a30',
    supplier: { _id: '672b80fd579a83e537091a30', name: 'Supplier-7' },
  },
  {
    item: 'Item-8',
    warehouse: '672b80fd579a83e537091a30',
    supplier: { _id: '672b80fd579a83e537091a30', name: 'Supplier-8' },
  },
  {
    item: 'Item-9',
    warehouse: '672b80fd579a83e537091a30',
    supplier: { _id: '672b80fd579a83e537091a30', name: 'Supplier-9' },
  },
  {
    item: 'Item-10',
    warehouse: '672b80fd579a83e537091a30',
    supplier: { _id: '672b80fd579a83e537091a30', name: 'Supplier-10' },
  },
];

export const mockReductionItems: IItemUpdateStockError[] = [
  {
    item: {
      _id: '1',
      name: 'Product A',
    },
    warehouseArea: {
      _id: '1',
      name: 'Warehouse 1',
    },
    stock: 100,
    quantity: 10,
  },
  {
    item: {
      _id: '2',
      name: 'Product B',
    },
    warehouseArea: {
      _id: '2',
      name: 'Warehouse 2',
    },
    stock: 200,
    quantity: 20,
  },
  {
    item: {
      _id: '3',
      name: 'Product C',
    },
    warehouseArea: {
      _id: '3',
      name: 'Warehouse 3',
    },
    stock: 150,
    quantity: 15,
  },
  {
    item: {
      _id: '4',
      name: 'Product D',
    },
    warehouseArea: {
      _id: '4',
      name: 'Warehouse 4',
    },
    stock: 80,
    quantity: 8,
  },
  {
    item: {
      _id: '5',
      name: 'Product E',
    },
    warehouseArea: {
      _id: '5',
      name: 'Warehouse 5',
    },
    stock: 50,
    quantity: 5,
  },
];
export const mockAdditionItems: IItemUpdateStockError[] = [
  {
    item: {
      _id: '6',
      name: 'Product F',
    },
    warehouseArea: {
      _id: '6',
      name: 'Warehouse 6',
    },
    stock: 120,
    quantity: 12,
  },
  {
    item: {
      _id: '7',
      name: 'Product G',
    },
    warehouseArea: {
      _id: '7',
      name: 'Warehouse 7',
    },
    stock: 90,
    quantity: 9,
  },
  {
    item: {
      _id: '8',
      name: 'Product H',
    },
    warehouseArea: {
      _id: '8',
      name: 'Warehouse 8',
    },
    stock: 110,
    quantity: 11,
  },
  {
    item: {
      _id: '9',
      name: 'Product I',
    },
    warehouseArea: {
      _id: '9',
      name: 'Warehouse 9',
    },
    stock: 130,
    quantity: 13,
  },
  {
    item: {
      _id: '10',
      name: 'Product J',
    },
    warehouseArea: {
      _id: '10',
      name: 'Warehouse 10',
    },
    stock: 160,
    quantity: 16,
  },
];
