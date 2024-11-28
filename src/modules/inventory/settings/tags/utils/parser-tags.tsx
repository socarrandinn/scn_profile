import { ISummaryTags } from '../interfaces';

// tags list required
export const parseTagList = (tags: ISummaryTags[], otherTags: ISummaryTags[]) => {
  const array = [...tags, ...otherTags];
  return array?.map((tag) => ({
    // @ts-ignore
    // name: tag?.name?.es || tag?.name,
    // type: tag?.type,
    value: tag?.value,
    _id: tag?._id,
  }));
};
