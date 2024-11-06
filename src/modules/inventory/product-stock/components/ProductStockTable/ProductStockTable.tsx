import { memo } from 'react';
import { IStockProductItem } from '../../interfaces/IStock';
import { Table } from '@dfl/mui-admin-layout';
import { stockItemsColumns } from '../../constants/stock-items.columns';
import EmptyProductItem from '../EmptyData/EmptyProductItem';
type ProductStockTableProps = {
  items: IStockProductItem[];
};

const ProductStockTable = ({ items }: ProductStockTableProps) => {
  return (
    <Table
      data={items}
      columns={stockItemsColumns}
      total={items.length}
      hidePagination
      emptyResultCmp={EmptyProductItem}
    />
  );
};

export default memo(ProductStockTable);
