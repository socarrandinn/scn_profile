import { HeadCell, Table } from '@dfl/mui-admin-layout';
import { memo } from 'react';
import { stockWithInvalidQuantityColumns } from '../../constants/stock-items.columns';
import CustomWidthTable from 'components/libs/table/contanier/CustomWidthTable';

const StockWithInvalidQuantityTable = ({
  data,
  columns = stockWithInvalidQuantityColumns,
}: {
  data?: any;
  columns?: Array<HeadCell<any>>;
}) => {
  return (
    <CustomWidthTable minWidth={300}>
      <Table data={data} total={data.length} hidePagination columns={columns} />
    </CustomWidthTable>
  );
};

export default memo(StockWithInvalidQuantityTable);
