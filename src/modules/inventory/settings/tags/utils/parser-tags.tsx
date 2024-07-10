import { IProductTags } from '../interfaces';

// tags list required
export const parseTagList = (tags: IProductTags[], otherTags: IProductTags[]) => {
  const array = [...tags, ...otherTags];
  return array?.map((tag) => ({
    value: tag?.value,
    _id: tag?._id,
  }));
};
