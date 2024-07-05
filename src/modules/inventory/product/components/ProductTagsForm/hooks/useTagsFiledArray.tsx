import { isArray } from 'lodash';
import { ITags, TAG_TYPE_ENUM } from 'modules/inventory/settings/tags/interfaces';
import { useCallback } from 'react';
import { useFieldArray, useWatch } from 'react-hook-form';

export const useTagsFiledArray = ({ control }: { control: any }) => {
  const { selectedTag } = useWatch({ control });
  const name = 'tags';
  const { fields, append, remove } = useFieldArray({ control, name, keyName: 'tagId' });

  const getValue = (tag: ITags) => {
    const { type, values } = tag;
    switch (type) {
      case TAG_TYPE_ENUM.BOOLEAN:
        return false;
      case TAG_TYPE_ENUM.ARRAY:
      case TAG_TYPE_ENUM.ARRAY_CHECKBOX:
        return values;
      default:
        return null;
    }
  };

  const onAddTag = useCallback(() => {
    if (selectedTag) {
      if (isArray(selectedTag)) {
        // eslint-disable-next-line array-callback-return
        selectedTag?.map((t: ITags) => {
          const exit = fields?.find((tag: any) => tag?._id === t?._id);
          if (!exit) {
            append({
              _id: t?._id,
              type: t?.type,
              value: getValue(t),
              name: t?.name,
            });
          }
        });
      } else {
        append({
          _id: selectedTag?._id,
          type: selectedTag?.type,
          value: getValue(selectedTag),
          name: selectedTag?.name,
        });
      }
    }
  }, [append, selectedTag, getValue]);

  const onRemoveTag = useCallback(
    (index: number) => {
      remove(index);
    },
    [remove],
  );

  return {
    name,
    selectedTag,
    fields,
    append,
    remove,
    onAddTag,
    onRemoveTag,
  };
};
