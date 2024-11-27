import { memo } from 'react';
import { IStockDetailCallback, STOCK_SUMMARY_CASE } from '../interfaces/IStockSummary';
import InvalidArea from '../components/ErrorContents/InvalidArea/InvalidArea';
import { StockReductionNotPerformed } from '../components/ErrorContents/StockNotPerformed';
import { ProductNoExist } from '../components/ErrorContents/ProductNoExist';
import { StockWithInvalidQuantity } from '../components/ErrorContents/StockWithInvalidQuantity';
import { SupplierNoRelation } from '../components/ErrorContents/SupplierNoRelation';
import { DataError } from '../components/ErrorContents/DataError';

type ImportStockContainerProps = {
  _case: STOCK_SUMMARY_CASE;
  details?: IStockDetailCallback;
  successDataError?: any[];
  onClose: () => void;
};

const ImportStockContainer = ({ _case, details, onClose, successDataError }: ImportStockContainerProps) => {
  switch (_case) {
    case STOCK_SUMMARY_CASE.warehouseSupplierNoExist:
      return <SupplierNoRelation items={details?.warehouseSupplierNoExist} onInitialClose={onClose} />;
    case STOCK_SUMMARY_CASE.invalidArea:
      return <InvalidArea invalidArea={details?.invalidArea} onInitialClose={onClose} />;
    case STOCK_SUMMARY_CASE.productNoExist:
      return <ProductNoExist productNoExist={details?.productNoExist} onInitialClose={onClose} />;

    case STOCK_SUMMARY_CASE.stockReductionWithInvalidCause:
      return (
        <StockReductionNotPerformed
          stockReductionWithInvalidCause={details?.stockReductionWithInvalidCause}
          onInitialClose={onClose}
        />
      );

    case STOCK_SUMMARY_CASE.stockWithInvalidQuantity:
      return (
        <StockWithInvalidQuantity
          stockWithInvalidQuantity={details?.stockWithInvalidQuantity}
          onInitialClose={onClose}
        />
      );

    case STOCK_SUMMARY_CASE.dataError:
      return <DataError dataError={successDataError || []} onInitialClose={onClose} />;
    default:
      return <></>;
  }
};

export default memo(ImportStockContainer);
