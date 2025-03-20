import { IDataSummary } from 'modules/common/interfaces/common-data-error';
import { useEffect, useMemo, useState } from 'react';

export const useAction = ({ open, onClose, time = 5 }: { open: boolean; onClose: () => void; time?: number }) => {
  const [dataError, setDataError] = useState<IDataSummary | undefined>(undefined);
  const isData = useMemo(() => !!dataError || false, [dataError]);
  const [cancelCountdown, setCancelCountdown] = useState<number | null>(null); // 5 seconds

  useEffect(() => {
    if (open) {
      setDataError(undefined);
      setCancelCountdown(null);
    }
  }, [open]);

  useEffect(() => {
    if (dataError) {
      setCancelCountdown(time);
    }
  }, [dataError, time]);

  useEffect(() => {
    if (cancelCountdown !== null && cancelCountdown > 0) {
      const timer = setTimeout(() => {
        setCancelCountdown((prev) => (prev ?? 0) - 1);
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }

    if (cancelCountdown === 0) {
      onClose();
    }
  }, [cancelCountdown, onClose]);
  return {
    isData,
    setDataError,
    dataError,
    cancelCountdown,
  };
};
