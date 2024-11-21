import { memo } from 'react';
import { IStockProductItem } from '../../interfaces/IStock';
import { Table } from '@dfl/mui-admin-layout';
import { stockItemsColumns } from '../../constants/stock-items.columns';
import EmptyProductItem from '../EmptyData/EmptyProductItem';
import CustomWidthTable from 'components/libs/table/contanier/CustomWidthTable';
type ProductStockTableProps = {
  items: IStockProductItem[];
};

const ProductStockTable = ({ items }: ProductStockTableProps) => {
  return (
    <CustomWidthTable minWidth={350}>
      <Table
        data={items}
        columns={stockItemsColumns}
        total={items.length}
        hidePagination
        emptyResultCmp={EmptyProductItem}
      />
    </CustomWidthTable>
  );
};

export default memo(ProductStockTable);
