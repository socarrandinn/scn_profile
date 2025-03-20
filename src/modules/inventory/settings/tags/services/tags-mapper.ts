interface Item {
  type: string;
  value: boolean;
  name: string;
}

type ItemsObjectTag = Record<string, Item>;

export const mapperObjectToArrayTags = (objectTags: ItemsObjectTag) => {
  if (objectTags) {
    return Object.keys(objectTags).map((key) => {
      return {
        ...objectTags[key],
        _id: key,
      };
    });
  }
  return [];
};
