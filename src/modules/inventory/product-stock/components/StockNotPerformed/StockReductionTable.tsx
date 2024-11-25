import { HeadCell, Table } from '@dfl/mui-admin-layout';
import { memo } from 'react';
import { stockReductionColumns } from '../../constants/stock-items.columns';
import CustomWidthTable from 'components/libs/table/contanier/CustomWidthTable';

const StockReductionTable = ({
  data,
  columns = stockReductionColumns,
}: {
  data?: any;
  columns?: Array<HeadCell<any>>;
}) => {
  // const items = useUpdateStockContext((state) => state.items);
  return (
    <CustomWidthTable minWidth={300}>
      <Table data={data} total={data.length} hidePagination columns={columns} />
    </CustomWidthTable>
  );
};

export default memo(StockReductionTable);
