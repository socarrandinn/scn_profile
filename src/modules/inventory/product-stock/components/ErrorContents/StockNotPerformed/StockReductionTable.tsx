import { HeadCell, Table } from '@dfl/mui-admin-layout';
import { memo } from 'react';
import { stockReductionColumns } from '../../../constants/stock-items.columns';
import CustomWidthTable from 'components/libs/table/contanier/CustomWidthTable';
import { arrayByObjectEmpty } from 'utils/array';
import EmptyList from '../EmptyList';

const StockReductionTable = ({
  data,
  columns = stockReductionColumns,
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

export default memo(StockReductionTable);
