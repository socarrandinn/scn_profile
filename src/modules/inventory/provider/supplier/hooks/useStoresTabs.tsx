import { isEmpty } from 'lodash';
import { useCallback } from 'react';

export const useStoresTabs = () => {
  const getTabs = useCallback((distributionData: any[]) => {
    if (!isEmpty(distributionData)) {
      const tabs = distributionData.map((data) => ({
        label: data.storeName || data.store || data.name,
        value: data.store || data._id,
      }));

      return tabs;
    }
    return [];
  }, []);
  return { getTabs };
};
