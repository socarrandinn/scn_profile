import { useToggle } from '@dfl/hook-utils';
import { ORDER_STATUS_SUMMARY_CASE } from 'modules/sales/sub-orders/interfaces';
import { useCallback, useState } from 'react';

export const useOrderStatusCaseAction = () => {
  const { onOpen, ...toggle } = useToggle(false);
  const [summaryCase, setSummaryCase] = useState<ORDER_STATUS_SUMMARY_CASE>(ORDER_STATUS_SUMMARY_CASE.suborderNoExist);

  const handleOpen = useCallback(
    (c: ORDER_STATUS_SUMMARY_CASE) => {
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
