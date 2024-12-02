import { isArray } from 'lodash';
import { ISummaryTags, ITags, TAG_TYPE_ENUM } from 'modules/inventory/settings/tags/interfaces';
import { useCallback } from 'react';
import { useFieldArray, useWatch } from 'react-hook-form';

export const useTagsFieldArray = ({ control, name = 'tags.product' }: { control: any; name?: string }) => {
  const { selectedTag } = useWatch({ control });
  const tags = useWatch({ control, name });

  const { fields, append, remove } = useFieldArray({ control, name, keyName: 'tagId' });

  const getValue = (tag: ITags) => {
    const { type } = tag;
    switch (type) {
      case TAG_TYPE_ENUM.BOOLEAN:
        return false;
      case TAG_TYPE_ENUM.ARRAY:
        return [];
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
              isMultiValue: t?.isMultiValue,
            });
          }
        });
      } else {
        append({
          _id: selectedTag?._id,
          type: selectedTag?.type,
          value: getValue(selectedTag),
          name: selectedTag?.name,
          isMultiValue: selectedTag?.isMultiValue,
        });
      }
    }
  }, [selectedTag, fields, append]);

  const onHandleTags = useCallback(
    (event: any) => {
      const value = event.target.value;
      const newValue: ITags = value[value.length - 1];
      if (newValue) {
        const exist = tags?.find((tag: ISummaryTags) => tag?._id === newValue?._id);
        if (!exist) {
          append({
            _id: newValue?._id,
            type: newValue?.type,
            value: getValue(newValue),
            name: newValue?.name,
            isMultiValue: newValue?._id,
          });
        }
      }
    },
    [append, tags],
  );

  const onRemoveTag = useCallback(
    (index: number) => {
      remove(index);
    },
    [remove],
  );

  return {
    name,
    selectedTag,
    onHandleTags,
    fields,
    append,
    remove,
    onAddTag,
    onRemoveTag,
  };
};
