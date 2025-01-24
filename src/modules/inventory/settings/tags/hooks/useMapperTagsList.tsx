import { useCallback } from 'react';
import { ISummaryTags } from '../interfaces';

export const useMapperTagsList = () => {
  const requiredTagList = useCallback((tags?: Record<string, ISummaryTags>) => {
    if (tags) {
      return Object.values(tags).filter((tag) => tag);
    }
    return [];
  }, []);
  return {
    requiredTagList,
  };
};
