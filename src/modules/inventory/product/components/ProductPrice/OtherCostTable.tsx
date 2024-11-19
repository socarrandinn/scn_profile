import { Table } from '@dfl/mui-admin-layout';
import { memo } from 'react';
import { otherCostColumns } from './other-cost.columns';
import { IOtherCost } from '../../interfaces/IProductPriceDetails';
type OtherCostTableProps = {
  otherPrices: IOtherCost[];
};

const OtherCostTable = ({ otherPrices }: OtherCostTableProps) => {
  if (!otherPrices?.length) return null;
  return <Table columns={otherCostColumns} data={otherPrices} total={otherPrices?.length} hidePagination />;
};

export default memo(OtherCostTable);
