import { useCallback } from 'react';
import { ISummaryTags, TAG_TYPE_ENUM } from '../interfaces';
import { isArray } from 'lodash';

export const useMapperTagsList = () => {
  const getArrayValue = (tag: ISummaryTags) => {
    if (TAG_TYPE_ENUM.ARRAY === tag?.type) {
      if (isArray(tag?.value)) {
        if (tag?.value?.length > 1) return tag?.value;
        return [tag?.value[0]];
      }
      return [tag?.value];
    }
    return tag?.value;
  };

  const requiredTagList = useCallback((tags?: Record<string, ISummaryTags>) => {
    if (tags) {
      return Object.values(tags).filter((tag) => {
        if (tag?.type === TAG_TYPE_ENUM.ARRAY) {
          tag.value = getArrayValue(tag);
        }
        return tag;
      });
    }
    return [];
  }, []);

  return {
    requiredTagList,
  };
};
