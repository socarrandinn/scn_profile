import { ISummaryTags, TAGS_DEFAULT_VALUE } from '../interfaces';

// tags list required
export const parseTagList = (tags: ISummaryTags[], otherTags: ISummaryTags[]) => {
  const array = [...tags, ...otherTags];
  return array?.map((tag) => ({
    value: tag?.value,
    _id: tag?._id,
  }));
};

export const getDefaultValue = (tags: ISummaryTags[]) => {
  return tags?.map((tag) => ({
    ...tag,
    value: TAGS_DEFAULT_VALUE[tag?.type],
  }));
};
