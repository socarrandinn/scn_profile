import { IProductTags } from '../interfaces';

// tags list required
export const parseTagList = (tags: IProductTags[]) => {
  return tags?.map((tag) => ({
    value: tag?.value,
    _id: tag?._id,
  }));
};
