import { isEmpty } from 'lodash';
import { useCallback } from 'react';

export const useStoresTabs = () => {
  const getTabs = useCallback((distributionData: any[]) => {
    if (!isEmpty(distributionData)) {
      const tabs = distributionData.map((data) => ({
        label: data.warehouseName || data.warehouse || data.name,
        value: data.warehouse || data._id,
      }));

      return tabs;
    }
    return [];
  }, []);
  return { getTabs };
};
