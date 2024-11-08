import { memo } from 'react';
import { IStockSummary, STOCK_SUMMARY_CASE } from '../interfaces/IStockSummary';
import { SupplierNoRelation } from '../components/SupplierNoRelation';

type ImportStockContainerProps = {
  _case: STOCK_SUMMARY_CASE;
  summary?: IStockSummary;
};

const ImportStockContainer = ({ _case, summary }: ImportStockContainerProps) => {
  switch (_case) {
    case STOCK_SUMMARY_CASE.SUPPLIER_NO_RELATION:
      return <SupplierNoRelation supplier={[]} />;
    case STOCK_SUMMARY_CASE.STOCK_REDUCTION_NOT_PERFORMED:
      return <>STOCK_REDUCTION_NOT_PERFORMED</>;
    case STOCK_SUMMARY_CASE.STOCK_ADDICTION_NOT_PERFORMED:
      return <>STOCK_ADDICTION_NOT_PERFORMED</>;
  }
};

export default memo(ImportStockContainer);
