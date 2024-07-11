import { IProductTags } from '../interfaces';

// tags list required
export const parseTagList = (tags: IProductTags[], otherTags: IProductTags[]) => {
  const array = [...tags, ...otherTags];
  return array?.map((tag) => ({
    // @ts-ignore
    name: tag?.name?.es || tag?.name,
    type: tag?.type,
    value: tag?.value,
    _id: tag?._id,
  }));
};
