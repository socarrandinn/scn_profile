import { isEmpty } from 'lodash';
import { useCallback } from 'react';

export const useStoresTabs = () => {
  const getTabs = useCallback((distributionData: any[]) => {
    if (!isEmpty(distributionData)) {
      const tabs = distributionData.map((data) => ({
        label: data.storeName || data.store,
        value: data.store,
      }));

      return tabs;
    }
    return [];
  }, []);
  return { getTabs };
};
