import { VISIBILITY_STATUS_MAP } from '../constants/visibility-status';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { IStatus } from '@dfl/mui-react-common';

export const useVisibilityStatus = (value: boolean, lastValue?: boolean) => {
  const { t } = useTranslation();
  return useMemo(() => {
    const status = VISIBILITY_STATUS_MAP.get(lastValue ?? value) as IStatus;
    return { ...status, title: t(status?.title) };
  }, [lastValue, value, t]);
};
