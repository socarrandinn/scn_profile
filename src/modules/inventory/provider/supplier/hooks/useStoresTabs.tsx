import { isEmpty } from 'lodash';
import { IStore } from 'modules/inventory/store/interfaces';
import { useCallback } from 'react';

export const useStoresTabs = () => {
  const getTabs = useCallback((stores: IStore[]) => {
    if (!isEmpty(stores)) {
      const tabs = stores?.map((store) => ({
        label: store?.name,
        value: store?._id,
      }));

      return tabs;
    }
    return []
  }, []);
  return { getTabs };
};
