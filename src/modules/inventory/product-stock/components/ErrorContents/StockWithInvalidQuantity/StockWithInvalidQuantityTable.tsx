import { HeadCell, Table } from '@dfl/mui-admin-layout';
import { memo } from 'react';
import CustomWidthTable from 'components/libs/table/contanier/CustomWidthTable';
import { stockWithInvalidQuantityColumns } from 'modules/inventory/product-stock/constants/stock-items.columns';
import { arrayByObjectEmpty } from 'utils/array';
import EmptyList from '../EmptyList';

const StockWithInvalidQuantityTable = ({
  data,
  columns = stockWithInvalidQuantityColumns,
}: {
  data?: any;
  columns?: Array<HeadCell<any>>;
}) => {
  if (arrayByObjectEmpty(data)) {
    return <EmptyList />;
  }
  return (
    <CustomWidthTable minWidth={300}>
      <Table data={data} total={data.length} hidePagination columns={columns} />
    </CustomWidthTable>
  );
};

export default memo(StockWithInvalidQuantityTable);
