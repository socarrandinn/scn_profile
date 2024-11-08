import { useToggle } from '@dfl/hook-utils';
import { STOCK_SUMMARY_CASE } from 'modules/inventory/product-stock/interfaces/IStockSummary';
import { useCallback, useState } from 'react';

export const useItemAction = () => {
  const { onOpen, ...toggle } = useToggle(false);
  const [summaryCase, setSummaryCase] = useState<STOCK_SUMMARY_CASE>(STOCK_SUMMARY_CASE.STOCK_ADDICTION_NOT_PERFORMED);

  const handleOpen = useCallback(
    (c: STOCK_SUMMARY_CASE) => {
      setSummaryCase(c);
      onOpen();
    },
    [onOpen],
  );

  return {
    ...toggle,
    handleOpen,
    summaryCase,
  };
};
