import { memo } from 'react';
import { IStockDetailCallback, STOCK_SUMMARY_CASE } from '../interfaces/IStockSummary';
import { SupplierNoRelation } from '../components/SupplierNoRelation';
import InvalidArea from '../components/InvalidArea/InvalidArea';
import { StockReductionNotPerformed } from '../components/StockNotPerformed';
import { StockWithInvalidQuantity } from '../components/StockWithInvalidQuantity';
import { ProductNoExist } from '../components/ProductNoExist';

type ImportStockContainerProps = {
  _case: STOCK_SUMMARY_CASE;
  details?: IStockDetailCallback;
  onClose: () => void;
};

const ImportStockContainer = ({ _case, details, onClose }: ImportStockContainerProps) => {
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
    default:
      return <></>;
  }
};

export default memo(ImportStockContainer);
