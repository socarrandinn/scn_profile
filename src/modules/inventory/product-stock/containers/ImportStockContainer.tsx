import { memo } from 'react';
import { IStockDetailCallback, STOCK_SUMMARY_CASE } from '../interfaces/IStockSummary';
import { SupplierNoRelation } from '../components/SupplierNoRelation';

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
      return <>STOCK_REDUCTION_NOT_PERFORMED</>;
    case STOCK_SUMMARY_CASE.STOCK_ADDICTION_NOT_PERFORMED:
      return <>STOCK_ADDICTION_NOT_PERFORMED</>;
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
